type RequirementStatusProps = {
  title: string;
  ready: boolean;
  items: string[];
};

export function RequirementStatus({ title, ready, items }: RequirementStatusProps) {
  return (
    <section className={`requirement ${ready ? "ready" : ""}`}>
      <div>
        <span>{title}</span>
        <strong>{ready ? "Cumplido" : "Pendiente"}</strong>
      </div>
      {ready
        ? <p>Todos los requisitos están completos.</p>
        : items.map((item) => <p key={item}>{item}</p>)}
    </section>
  );
}
