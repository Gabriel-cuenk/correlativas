"use client";

import { useState } from "react";
import { SubjectCard } from "./subject-card";
import { AcademicPlan, AcademicState, meets, missing, SubjectState } from "../model/academic";

const emptyState = (plan: AcademicPlan) =>
  Object.fromEntries(plan.subjects.map((subject) => [subject.id, "pending"])) as AcademicState;

const descriptions: Record<string, string> = {
  "Ingeniería en Sistemas de Información": "Software, datos y transformación digital.",
  "Ingeniería Electromecánica": "Energía, máquinas y sistemas industriales.",
  "Ingeniería Química": "Procesos, materiales y producción sustentable.",
  "Licenciatura en Administración Rural": "Gestión, producción y negocios agropecuarios.",
};

const icons = ["⌘", "⚙", "△", "↗"];

export function AcademicSimulator({ plans }: { plans: AcademicPlan[] }) {
  const [started, setStarted] = useState(false);
  const [name, setName] = useState("");
  const [planId, setPlanId] = useState(plans[0].id);
  const plan = plans.find((item) => item.id === planId) ?? plans[0];
  const [base, setBase] = useState<AcademicState>(() => emptyState(plans[0]));
  const [scenario, setScenario] = useState<AcademicState>(() => emptyState(plans[0]));
  const [mode, setMode] = useState<"base" | "scenario">("base");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const state = mode === "base" ? base : scenario;
  const setState = mode === "base" ? setBase : setScenario;
  const approved = plan.subjects.filter((item) => state[item.id] === "approved");
  const regularized = plan.subjects.filter((item) => state[item.id] === "regularized");
  const hasProgress = plan.subjects.some((item) => state[item.id] !== "pending");
  const visible = plan.subjects.filter(
    (item) => (item.year === 1 || hasProgress) && (state[item.id] !== "pending" || meets(item.course, state)),
  );
  const available = visible.filter((item) => state[item.id] === "pending");
  const almostAvailable = hasProgress
    ? plan.subjects.filter(
        (item) =>
          state[item.id] === "pending" &&
          !meets(item.course, state) &&
          missing(item.course, state, plan).length === 1 &&
          item.course.length > 1,
      )
    : [];
  const displayed = [
    ...visible.filter((item) => state[item.id] !== "approved"),
    ...almostAvailable,
  ].sort((a, b) => a.year - b.year || Number(a.id) - Number(b.id));
  const visibleYears = [...new Set(displayed.map((item) => item.year))];
  const selected = plan.subjects.find((item) => item.id === selectedId);

  function choosePlan(id: string) {
    const next = plans.find((item) => item.id === id) ?? plans[0];
    setPlanId(next.id);
    setBase(emptyState(next));
    setScenario(emptyState(next));
    setMode("base");
    setSelectedId(null);
  }

  function update(id: string, value: SubjectState) {
    setState((current) => ({ ...current, [id]: value }));
    if (value === "approved") setSelectedId(null);
  }

  function startScenario() {
    setScenario({ ...base });
    setMode("scenario");
  }

  if (!started) {
    return (
      <main className="onboarding">
        <section className="onboardingPanel">
          <div className="welcome">
            <a className="brand" href="#" aria-label="Correlativas">Correlativas</a>
            <p>Planeá tu recorrido académico</p>
            <h1>¡Hola! ¿Cómo te llamás?</h1>
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Escribí tu nombre aquí..." aria-label="Tu nombre" />
          </div>
          <div className="careerHeading">
            <div><span>Paso 1 de 1</span><h2>Elegí tu carrera</h2></div>
            <p>{plans.length} carreras disponibles</p>
          </div>
          <div className="careerGrid">
            {plans.map((item, index) => (
              <button key={item.id} className={`careerCard ${planId === item.id ? "selected" : ""}`} onClick={() => choosePlan(item.id)}>
                <span className="careerIcon">{icons[index]}</span><span className="careerCheck">✓</span>
                <strong>{item.career}</strong><small>{descriptions[item.career]}</small><em>{item.version}</em>
              </button>
            ))}
          </div>
          <button className="startButton" onClick={() => setStarted(true)}>Comenzar mi plan <span>→</span></button>
        </section>
        <footer className="onboardingFooter">
          <span><strong>Correlativas</strong> · Planeador académico</span><span>Sin cuentas · Tus cambios no se guardan</span>
        </footer>
      </main>
    );
  }

  return (
    <main className="planner">
      <nav className="plannerNav">
        <button className="brand" onClick={() => setStarted(false)}>Correlativas</button>
        <div className="navActions">
          <button className={mode === "base" ? "active" : ""} onClick={() => setMode("base")}>Estado actual</button>
          <button className={mode === "scenario" ? "active" : ""} onClick={startScenario}>Simular</button>
          <button className="changeCareer" onClick={() => setStarted(false)}>Cambiar carrera</button>
        </div>
      </nav>
      <div className="plannerShell">
        <header className="planIntro">
          <p>Hola, {name.trim() || "estudiante"} <span>•</span> {plan.version}</p>
          <h1>Plan de estudios: {plan.career}</h1>
          <span>Marcá tu avance. Las próximas materias aparecerán cuando cumplas sus correlativas.</span>
        </header>
        <section className="summary" aria-label="Resumen académico">
          <div className="summaryProgress"><span>Avance total</span><strong>{Math.round((approved.length / plan.subjects.length) * 100)}%</strong><div><i style={{ width: `${(approved.length / plan.subjects.length) * 100}%` }} /></div></div>
          <Stat value={`${approved.length} / ${plan.subjects.length}`} label="Materias aprobadas" />
          <Stat value={regularized.length} label="Listas para rendir" />
          <Stat value={available.length} label="Habilitadas para cursar" accent />
        </section>
        <section className="planToolbar">
          <div><h2>Tu recorrido</h2><p>Solo mostramos las materias que ya podés cursar.</p></div>
          <div className="legend"><span><i className="availableDot" />Habilitada</span><span><i className="regularizedDot" />Regularizada</span><span><i className="approvedDot" />Aprobada</span></div>
        </section>
        <div className="yearList">
          {visibleYears.map((year) => {
            const subjects = displayed.filter((item) => item.year === year);
            return (
              <section className="yearSection" key={year}>
                <header><span>{year}</span><div><h2>{year === 1 ? "Primer" : `${year}°`} año</h2><p>{subjects.length} materias visibles</p></div></header>
                <div className="subjectGrid">
                  {subjects.map((subject) => {
                    const missingCourse = missing(subject.course, state, plan);
                    const blocked = state[subject.id] === "pending" && missingCourse.length > 0;
                    return <SubjectCard key={subject.id} subject={subject} value={state[subject.id] ?? "pending"} selected={selected?.id === subject.id} canExam={meets(subject.exam, state)} blocked={blocked} missingRequirement={missingCourse[0]} onSelect={() => setSelectedId(subject.id)} />;
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
      {selected && (
        <div className="modalBackdrop" onClick={() => setSelectedId(null)}>
          <section className="subjectModal" role="dialog" aria-modal="true" aria-labelledby="subject-modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="modalClose" onClick={() => setSelectedId(null)} aria-label="Cerrar detalle">×</button>
            <header className="modalHeader">
              <div><span>Código: {selected.id.padStart(2, "0")}</span><small>{selected.year}° año</small></div>
              <h2 id="subject-modal-title">{selected.name}</h2>
              <p>Consultá sus correlativas y probá cómo cambia tu recorrido al regularizarla o aprobarla.</p>
              <div className="stateControls">
                <button className={state[selected.id] === "pending" ? "active" : ""} onClick={() => update(selected.id, "pending")}>Pendiente</button>
                <button className={state[selected.id] === "regularized" ? "active regular" : ""} onClick={() => update(selected.id, "regularized")}>Regularizada</button>
                <button className="approveState" onClick={() => update(selected.id, "approved")}>Aprobada</button>
              </div>
            </header>
            <div className="unlockColumns">
              <UnlockList title="Al regularizar habilita" subjects={unlocksBy(selected.id, "regularized", plan)} />
              <UnlockList title="Al aprobar habilita" subjects={unlocksBy(selected.id, "approved", plan)} />
            </div>
            <div className="modalRequirements">
              <Detail title={meets(selected.course, state) ? "Habilitada para cursar" : "Requisitos para cursar"} items={missing(selected.course, state, plan)} />
              <Detail title={meets(selected.exam, state) ? "Habilitada para rendir" : "Requisitos para rendir"} items={missing(selected.exam, state, plan)} />
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

function Stat({ value, label, accent = false }: { value: string | number; label: string; accent?: boolean }) {
  return <div className={`summaryStat ${accent ? "accent" : ""}`}><span>{label}</span><strong>{value}</strong></div>;
}

function Detail({ title, items }: { title: string; items: string[] }) {
  return <div className="detailBlock"><strong>{title}</strong>{items.length ? items.map((item) => <p key={item}>{item}</p>) : <p>Todos los requisitos están cumplidos.</p>}</div>;
}

function unlocksBy(id: string, requiredState: "regularized" | "approved", plan: AcademicPlan) {
  return plan.subjects.filter((subject) =>
    [...subject.course, ...subject.exam].some((requirement) => requirement.id === id && requirement.state === requiredState),
  );
}

function UnlockList({ title, subjects }: { title: string; subjects: AcademicPlan["subjects"] }) {
  return (
    <section className="unlockList">
      <h3>{title}</h3>
      {subjects.length
        ? subjects.map((subject) => <div key={subject.id}><i /><span><strong>{subject.name}</strong><small>{subject.year}° año</small></span><b>›</b></div>)
        : <p>No habilita materias directamente.</p>}
    </section>
  );
}
