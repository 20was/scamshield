export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "ScamShield helped me identify a sophisticated phishing attempt that my email provider didn't catch. I would have lost thousands if not for their alert system.",
      author: "Sarah Johnson",
      role: "Small Business Owner",
    },
    {
      quote:
        "The educational resources are incredibly valuable. I've learned so much about protecting myself online and now feel confident in spotting potential scams.",
      author: "Michael Chen",
      role: "Retired Teacher",
    },
    {
      quote:
        "After reporting a scam on ScamShield, I was amazed to see how quickly the community verified it and alerted others. This platform is making the internet safer for everyone.",
      author: "Priya Patel",
      role: "Software Developer",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Hear from people who have used ScamShield to protect themselves from scams
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
              <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
