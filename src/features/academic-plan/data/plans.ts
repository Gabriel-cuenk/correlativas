import type { AcademicPlan } from "../model/academic";
import { validatePlan } from "../model/validate-plan";
import { electromecanica2023 } from "./plans/electromecanica-2023";
import { quimica2023 } from "./plans/quimica-2023";
import { rural2026 } from "./plans/rural-2026";
import { sistemas2023 } from "./plans/sistemas-2023";

export const academicPlans: AcademicPlan[] = [
  sistemas2023,
  electromecanica2023,
  quimica2023,
  rural2026,
].map(validatePlan);
