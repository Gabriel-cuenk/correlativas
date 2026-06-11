"use client";

import { useState } from "react";
import { plans } from "@/data/plans";
import { AcademicState, meets, missing, Subject, SubjectState } from "@/lib/academic";

const labels: Record<SubjectState, string> = {
  pending: "Disponible",
  regularized: "Regularizada",
  approved: "Aprobada",
};

const emptyState = (planId: string) =>
  Object.fromEntries(
    (plans.find((plan) => plan.id === planId) ?? plans[0]).subjects.map((subject) => [
      subject.id,
      "pending",
    ]),
  ) as AcademicState;

export default function Simulator() {
  const [planId, setPlanId] = useState(plans[0].id);
  const plan = plans.find((item) => item.id === planId) ?? plans[0];
  const [base, setBase] = useState<AcademicState>(() => emptyState(planId));
  const [scenario, setScenario] = useState<AcademicState>(() => emptyState(planId));
  const [mode, setMode] = useState<"base" | "scenario">("base");
  const [selectedId, setSelectedId] = useState(plan.subjects[0].id);

  const state = mode === "base" ? base : scenario;
  const setState = mode === "base" ? setBase : setScenario;
  const selected = plan.subjects.find((item) => item.id === selectedId) ?? plan.subjects[0];
  const years = [...new Set(plan.subjects.map((item) => item.year))];
  const approved = plan.subjects.filter((item) => state[item.id] === "approved");
  const regularized = plan.subjects.filter((item) => state[item.id] === "regularized");
  const available = plan.subjects.filter(
    (item) => state[item.id] === "pending" && meets(item.course, state),
  );
  const visibleSubjects = plan.subjects.filter(
    (item) => state[item.id] !== "pending" || meets(item.course, state),
  );
  const changes = plan.subjects.filter((item) => base[item.id] !== scenario[item.id]);

  function choosePlan(id: string) {
    const next = plans.find((item) => item.id === id) ?? plans[0];
    setPlanId(id);
    setBase(emptyState(id));
    setScenario(emptyState(id));
    setSelectedId(next.subjects[0].id);
    setMode("base");
  }

  function update(id: string, value: SubjectState) {
    setState((current) => ({ ...current, [id]: value }));
  }

  function startScenario() {
    setScenario({ ...base });
    setMode("scenario");
  }

  return (
    <main className="journey">
      <nav className="nav">
        <a className="wordmark" href="#mapa" aria-label="Ir al mapa académico">
          <i>c</i><span>correlativas</span>
        </a>
        <label className="careerSelect">
          <span>Plan activo</span>
          <select value={planId} onChange={(event) => choosePlan(event.target.value)}>
            {plans.map((item) => (
              <option key={item.id} value={item.id}>{item.career} · {item.version}</option>
            ))}
          </select>
        </label>
        <button className="resetButton" onClick={() => choosePlan(planId)}>Empezar de nuevo</button>
      </nav>

      <header className="intro">
        <div className="introCopy">
          <p>{mode === "base" ? "Tu recorrido académico" : "Escenario de planificación"}</p>
          <h1>{mode === "base" ? "Avanzá materia por materia." : "Probá qué camino te conviene."}</h1>
          <span>
            Solo ves las materias que ya alcanzaste. Al regularizar o aprobar una,
            el mapa revela automáticamente las nuevas posibilidades.
          </span>
        </div>
        <div className="modeSwitch">
          <button className={mode === "base" ? "active" : ""} onClick={() => setMode("base")}>
            <span>Estado actual</span><small>Marcá lo que ya hiciste</small>
          </button>
          <button className={mode === "scenario" ? "active" : ""} onClick={startScenario}>
            <span>Simular</span><small>Probá sin modificar tu estado</small>
          </button>
        </div>
      </header>

      <section className="statusRail" aria-label="Resumen del recorrido">
        <div className="statusMain">
          <span>Progreso</span>
          <strong>{approved.length}<small> / {plan.subjects.length} aprobadas</small></strong>
          <div className="bar"><i style={{ width: `${approved.length / plan.subjects.length * 100}%` }} /></div>
        </div>
        <Stat value={regularized.length} label="listas para rendir" />
        <Stat value={available.length} label="disponibles ahora" accent />
        <Stat value={plan.subjects.length - visibleSubjects.length} label="aún ocultas" />
        {mode === "scenario" && (
          <button className="scenarioReset" onClick={() => setScenario({ ...base })}>
            Descartar {changes.length} {changes.length === 1 ? "cambio" : "cambios"}
          </button>
        )}
      </section>

      <section className="mapHeader" id="mapa">
        <div>
          <p>Tu mapa académico</p>
          <h2>Elegí el próximo movimiento</h2>
        </div>
        <div className="legend">
          <span><i className="availableDot" />Disponible</span>
          <span><i className="regularizedDot" />Regularizada</span>
          <span><i className="approvedDot" />Aprobada</span>
        </div>
      </section>

      <section className="mapLayout">
        <div className="roadmap">
          {years.map((year) => {
            const yearSubjects = plan.subjects.filter((item) => item.year === year);
            const visible = yearSubjects.filter((item) => visibleSubjects.includes(item));
            const hidden = yearSubjects.length - visible.length;
            return (
              <section className={`yearLane ${visible.length ? "" : "emptyLane"}`} key={year}>
                <header>
                  <span>{year}°</span>
                  <div><strong>año</strong><small>{visible.length} visibles · {hidden} ocultas</small></div>
                </header>
                <div className="laneSubjects">
                  {visible.map((subject) => (
                    <SubjectCard
                      key={subject.id}
                      subject={subject}
                      value={state[subject.id] ?? "pending"}
                      selected={selected.id === subject.id}
                      canExam={meets(subject.exam, state)}
                      onSelect={() => setSelectedId(subject.id)}
                      onChange={(value) => update(subject.id, value)}
                    />
                  ))}
                  {!visible.length && (
                    <div className="lockedYear">
                      <span>Este año se revelará cuando avances.</span>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>

        <aside className="inspector">
          <button className="inspectorClose" aria-label="Cerrar detalle">Detalle</button>
          <div className="subjectTitle">
            <span>{selected.year}° año · materia {selected.id.padStart(2, "0")}</span>
            <h2>{selected.name}</h2>
            <p className={state[selected.id] ?? "pending"}>{labels[state[selected.id] ?? "pending"]}</p>
          </div>
          <div className="inspectorActions">
            <span>Cambiar estado</span>
            <div>
              <button className={state[selected.id] === "pending" ? "active" : ""} onClick={() => update(selected.id, "pending")}>Disponible</button>
              <button className={state[selected.id] === "regularized" ? "active" : ""} onClick={() => update(selected.id, "regularized")}>Regularizada</button>
              <button className={state[selected.id] === "approved" ? "active" : ""} onClick={() => update(selected.id, "approved")}>Aprobada</button>
            </div>
          </div>
          <Requirement title="Para cursar" ready={meets(selected.course, state)} items={missing(selected.course, state, plan)} />
          <Requirement title="Para rendir" ready={meets(selected.exam, state)} items={missing(selected.exam, state, plan)} />
          <div className="unlocks">
            <span>Próximas aperturas</span>
            <h3>Al avanzar con esta materia</h3>
            {plan.subjects.filter((item) => item.course.some((requirement) => requirement.id === selected.id)).length
              ? plan.subjects
                  .filter((item) => item.course.some((requirement) => requirement.id === selected.id))
                  .map((item) => <p key={item.id}>{item.name}</p>)
              : <p>No desbloquea materias directamente.</p>}
          </div>
        </aside>
      </section>
    </main>
  );
}

function SubjectCard({ subject, value, selected, canExam, onSelect, onChange }: {
  subject: Subject; value: SubjectState; selected: boolean; canExam: boolean;
  onSelect: () => void; onChange: (value: SubjectState) => void;
}) {
  return (
    <article className={`subjectCard ${value} ${selected ? "selected" : ""}`}>
      <button className="cardBody" onClick={onSelect}>
        <span>{subject.id.padStart(2, "0")}</span>
        <h3>{subject.name}</h3>
        <p>{value === "regularized" && canExam ? "Podés rendirla" : labels[value]}</p>
      </button>
      <div className="cardActions">
        {value !== "regularized" && <button onClick={() => onChange("regularized")}>Regularicé</button>}
        {value !== "approved" && <button className="primary" onClick={() => onChange("approved")}>Aprobé</button>}
        {value !== "pending" && <button className="undo" onClick={() => onChange("pending")}>Deshacer</button>}
      </div>
    </article>
  );
}

function Stat({ value, label, accent = false }: { value: number; label: string; accent?: boolean }) {
  return <div className={`railStat ${accent ? "accent" : ""}`}><strong>{value}</strong><span>{label}</span></div>;
}

function Requirement({ title, ready, items }: { title: string; ready: boolean; items: string[] }) {
  return (
    <section className={`requirement ${ready ? "ready" : ""}`}>
      <div><span>{title}</span><strong>{ready ? "Cumplido" : "Pendiente"}</strong></div>
      {ready ? <p>Todos los requisitos están completos.</p> : items.map((item) => <p key={item}>{item}</p>)}
    </section>
  );
}
