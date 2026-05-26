import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Александр Петров",
    role: "Владелец дома, Московская область",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Построили дом 120 м² за 8 месяцев точно в срок. Смета не выросла ни на рубль. Живём второй год — никаких проблем, тепло даже в сильные морозы.",
  },
  {
    name: "Марина Соколова",
    role: "Владелец дома, Подмосковье",
    avatar: "/professional-woman-scientist.png",
    content:
      "Сначала боялась строиться — много историй про обман. Здесь всё прозрачно: договор, смета, фотоотчёты каждую неделю. Рекомендую всем знакомым.",
  },
  {
    name: "Дмитрий Захаров",
    role: "Владелец дома, Тверская область",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Газобетонный дом с отделкой под ключ. Качество строительства на высоте — проверял каждый этап. Отдельная благодарность за честность по срокам.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы наших клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Более 300 семей уже живут в домах, которые мы построили
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
