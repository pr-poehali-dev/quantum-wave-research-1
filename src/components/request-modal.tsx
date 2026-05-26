import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SEND_URL = "https://functions.poehali.dev/ec56a75b-4047-437a-b832-e0857fb75269"

interface RequestModalProps {
  open: boolean
  onClose: () => void
}

export function RequestModal({ open, onClose }: RequestModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch(SEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      })
      if (!res.ok) throw new Error("Ошибка отправки")
      setSent(true)
    } catch {
      setError("Не удалось отправить заявку. Позвоните нам напрямую: +7 921 189-99-18")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSent(false)
      setName("")
      setPhone("")
      setError("")
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-zinc-900 border border-red-500/30 text-white max-w-md">
        {!sent ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-orbitron text-white">Получить расчёт</DialogTitle>
              <DialogDescription className="text-gray-400 font-space-mono">
                Оставьте контакты — перезвоним в течение часа и рассчитаем стоимость вашего дома бесплатно.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300 font-space-mono">Ваше имя</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван Иванов"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-300 font-space-mono">Номер телефона</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 900 000-00-00"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500 focus:border-red-500"
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm font-space-mono">{error}</p>
              )}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-orbitron border-0 py-5 text-base"
              >
                {loading ? "Отправляем..." : "Отправить заявку"}
              </Button>
              <p className="text-xs text-gray-500 text-center font-space-mono">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-orbitron text-white mb-2">Заявка принята!</h3>
            <p className="text-gray-400 font-space-mono mb-6">
              Перезвоним вам в течение часа. Спасибо, {name}!
            </p>
            <Button onClick={handleClose} className="bg-red-500 hover:bg-red-600 text-white border-0">
              Закрыть
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
