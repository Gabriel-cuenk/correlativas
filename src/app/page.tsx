import { AcademicSimulator } from "@/features/academic-plan/components/academic-simulator";
import { academicPlans } from "@/features/academic-plan/data/plans";

export default function HomePage() {
  return <AcademicSimulator plans={academicPlans} />;
}
