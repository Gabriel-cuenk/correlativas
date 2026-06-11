export type SubjectState = "pending" | "regularized" | "approved";
export type Requirement = { id: string; state: "regularized" | "approved" };
export type Subject = { id: string; name: string; year: number; course: Requirement[]; exam: Requirement[] };
export type AcademicPlan = { id: string; career: string; version: string; source: string; subjects: Subject[] };
export type AcademicState = Record<string, SubjectState>;

export const s = (id: number, name: string, year: number, regularized: number[] = [], approved: number[] = []): Subject => ({
  id: String(id), name, year,
  course: [...regularized.map((value) => ({ id: String(value), state: "regularized" as const })), ...approved.map((value) => ({ id: String(value), state: "approved" as const }))],
  exam: [...regularized.map((value) => ({ id: String(value), state: "regularized" as const })), ...approved.map((value) => ({ id: String(value), state: "approved" as const }))],
});

export function meets(requirements: Requirement[], state: AcademicState) {
  return requirements.every((requirement) => {
    const value = state[requirement.id] ?? "pending";
    return requirement.state === "regularized" ? value !== "pending" : value === "approved";
  });
}

export function missing(requirements: Requirement[], state: AcademicState, plan: AcademicPlan) {
  return requirements.filter((item) => !meets([item], state)).map((item) => {
    const name = plan.subjects.find((subject) => subject.id === item.id)?.name ?? item.id;
    return `${item.state === "approved" ? "Aprobar" : "Regularizar"} ${name}`;
  });
}

export const cycle = (value: SubjectState): SubjectState => value === "pending" ? "regularized" : value === "regularized" ? "approved" : "pending";
