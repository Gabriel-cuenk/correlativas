import type { AcademicPlan } from "./academic";

export function validatePlan(plan: AcademicPlan) {
  const subjectIds = new Set<string>();

  for (const subject of plan.subjects) {
    if (subjectIds.has(subject.id)) {
      throw new Error(`${plan.id}: duplicate subject id ${subject.id}`);
    }

    subjectIds.add(subject.id);
  }

  for (const subject of plan.subjects) {
    for (const requirement of [...subject.course, ...subject.exam]) {
      if (!subjectIds.has(requirement.id)) {
        throw new Error(
          `${plan.id}: subject ${subject.id} references missing subject ${requirement.id}`,
        );
      }
    }
  }

  return plan;
}
