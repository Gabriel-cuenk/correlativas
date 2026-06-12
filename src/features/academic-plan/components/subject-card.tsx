import type { Subject, SubjectState } from "../model/academic";

const labels: Record<SubjectState, string> = { pending: "Habilitada", regularized: "Regularizada", approved: "Aprobada" };

export function SubjectCard({ subject, value, selected, canExam, blocked, missingRequirement, onSelect }: {
  subject: Subject; value: SubjectState; selected: boolean; canExam: boolean; blocked: boolean; missingRequirement?: string; onSelect: () => void;
}) {
  return (
    <article className={`subjectCard ${value} ${blocked ? "blocked" : ""} ${selected ? "selected" : ""}`}>
      <button className="cardBody" onClick={onSelect} disabled={blocked}>
        <span className="stateLabel">{blocked ? "Pendiente" : labels[value]}</span>
        <h3>{subject.name}</h3>
        <p>{blocked ? `Falta ${missingRequirement}` : value === "regularized" && canExam ? "Lista para rendir" : "Ver correlativas"}</p>
        <span className={`cardOpen ${blocked ? "lockedIcon" : ""}`} aria-hidden="true">{blocked ? "" : "+"}</span>
      </button>
    </article>
  );
}
