import { Button } from "@/components/ui/button"
import { useModal } from "@/lib/modal-context"

export function CTASection() {
  const { openModal } = useModal()

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Готовы построить дом мечты?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Оставьте заявку — наш специалист свяжется с вами в течение часа, проконсультирует и предложит
            бесплатный выезд на участок для расчёта стоимости.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openModal}
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
            >
              Получить расчёт стоимости
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              Смотреть наши проекты
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
