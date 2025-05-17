export function StatsSection() {
  const stats = [
    {
      value: "10M+",
      label: "Users Protected",
    },
    {
      value: "500K+",
      label: "Scams Reported",
    },
    {
      value: "$150M+",
      label: "Estimated Savings",
    },
    {
      value: "95%",
      label: "Detection Accuracy",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Impact</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              ScamShield has helped millions of users avoid scams and protect their assets
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4"
            >
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
