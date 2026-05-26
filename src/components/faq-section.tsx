import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько стоит дом из газобетона под ключ?",
      answer:
        "Стоимость зависит от площади, этажности и комплектации. В среднем дом 100 м² под ключ обходится от 4,5 млн рублей. После бесплатного замера участка мы составляем точную смету, которая фиксируется в договоре.",
    },
    {
      question: "Сколько времени занимает строительство?",
      answer:
        "Дом площадью до 150 м² строим за 6–9 месяцев, включая отделку. Сроки прописываем в договоре. За каждую неделю просрочки — неустойка в пользу клиента.",
    },
    {
      question: "Почему именно газобетон?",
      answer:
        "Газобетон — один из лучших материалов для частного дома: отличная теплоизоляция, лёгкий вес, пожаробезопасность и долговечность более 100 лет. Экономия на отоплении до 40% по сравнению с кирпичным домом.",
    },
    {
      question: "Можно ли изменить проект в процессе строительства?",
      answer:
        "Небольшие изменения по планировке возможны до начала работ бесплатно. Изменения в процессе строительства согласовываем индивидуально — фиксируем в доп. соглашении с перерасчётом стоимости.",
    },
    {
      question: "Какую гарантию вы даёте?",
      answer:
        "Гарантия на конструктив и фундамент — 5 лет, на отделочные работы — 2 года. Все гарантийные обязательства прописаны в договоре. Устраняем недостатки бесплатно в течение гарантийного срока.",
    },
    {
      question: "Вы работаете в нашем регионе?",
      answer:
        "Работаем в Москве, Московской области и прилегающих регионах. Выезд специалиста на участок для замера и консультации — бесплатно. Уточните возможность работы в вашем районе по телефону или в форме ниже.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о строительстве, сроках и стоимости.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
