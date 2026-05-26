import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Строительство под ключ",
    description: "Полный цикл от проектирования до сдачи объекта. Берём на себя все этапы — вы получаете готовый дом.",
    icon: "house",
    badge: "Под ключ",
  },
  {
    title: "Газобетонные блоки",
    description: "Используем только сертифицированный газобетон ведущих производителей. Тепло, прочно, долговечно.",
    icon: "brick",
    badge: "Материал",
  },
  {
    title: "Фиксированная цена",
    description: "Смета фиксируется в договоре и не меняется в процессе строительства. Никаких сюрпризов.",
    icon: "shield",
    badge: "Гарантия",
  },
  {
    title: "Сроки по договору",
    description: "Строго соблюдаем сроки. За каждую неделю просрочки — штраф в пользу клиента.",
    icon: "clock",
    badge: "Сроки",
  },
  {
    title: "Отделка и инженерия",
    description: "Чистовая отделка, электрика, водоснабжение, отопление — всё в одном проекте и договоре.",
    icon: "wrench",
    badge: "Полный цикл",
  },
  {
    title: "Гарантия 5 лет",
    description: "Даём гарантию на конструктив 5 лет, на отделочные работы — 2 года. Устраняем замечания бесплатно.",
    icon: "star",
    badge: "Надёжность",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Строим газобетонные дома с 2010 года — более 300 сданных объектов по всей России
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "house" && "🏠"}
                    {feature.icon === "brick" && "🧱"}
                    {feature.icon === "shield" && "🛡️"}
                    {feature.icon === "clock" && "⏱️"}
                    {feature.icon === "wrench" && "🔧"}
                    {feature.icon === "star" && "⭐"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
