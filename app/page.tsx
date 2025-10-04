"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Sparkles, Star } from "lucide-react"

const validGuests = [
  { name: "Gladys Ambrocio", guests: 3 },
  { name: "Alejandra Chajón", guests: 2 },
  { name: "Marlen Chajón", guests: 1 },
  { name: "Magaly Ambrocio", guests: 2 },
  { name: "Roberto Maida", guests: 2 },
  { name: "Katherine Maida", guests: 2 },
  { name: "Enrique Ambrocio", guests: 5 },
  { name: "Julia Ronquillo", guests: 1 },
  { name: "Luis Alberto Aldana", guests: 3 },
  { name: "Juana Catalán", guests: 1 },
  { name: "Fernanda Catalán", guests: 2 },
  { name: "Lucrecia Rosales", guests: 3 },
  { name: "Ana Lucía Rosales", guests: 4 },
  { name: "Oracio Rosales", guests: 1 },
  { name: "Isabel Rosales", guests: 3 },
  { name: "David Rosales", guests: 4 },
  { name: "Yessenia Ronquillo", guests: 3 },
  { name: "Adelaido Ambrocio", guests: 0 },
  { name: "Nery Ronquillo", guests: 0 },
  { name: "Angela Ramón", guests: 4 },
  { name: "Oscar Sil", guests: 0 },
  { name: "Julio Flores", guests: 0 },
  { name: "Josue Jiménez", guests: 0 },
  { name: "Kelvin Hernández", guests: 0 },
  { name: "Kevin Pérez", guests: 0 },
  { name: "Lisa Borrayo", guests: 0 },
  { name: "Elvis López", guests: 2 },
  { name: "Erick Aguilar", guests: 1 },
  { name: "Jeimy Pelén", guests: 2 },
  { name: "Sofia Rivera", guests: 1 },
  { name: "Katherine Orellana", guests: 3 },
  { name: "Laura Gatica", guests: 1 },
  { name: "Gary Quintanilla", guests: 1 },
  { name: "Girsa Cristel", guests: 2 },
  { name: "Emanuel Perla", guests: 0 },
  { name: "Yessica Velásquez", guests: 1 },
  { name: "Deyler García", guests: 1 },
  { name: "Fernando Rodas", guests: 1 },
  { name: "Dennis Ramirez", guests: 1 },
  { name: "Selena Chipix", guests: 1 },
  { name: "Heidy Castillo", guests: 2 },
  { name: "Maritza Najera", guests: 1 },
  { name: "Jorge Culpatán", guests: 0 },
  { name: "Evelyn Cárcamo", guests: 0 },
  { name: "Norma López", guests: 2 },
  { name: "Karina Barrios", guests: 1 },
  { name: "Kederlyn Ochoa", guests: 1 },
  { name: "Elva López", guests: 3 },
  { name: "Augusto Santiso", guests: 0 },
  { name: "Mireira Juárez", guests: 3 },
  { name: "Elida Ambrocio", guests: 1 },
  { name: "Lucy Ambrocio", guests: 1 },
  { name: "Mario Ambrocio", guests: 1 },
  { name: "Gustavo Ambrocio", guests: 1 },
  { name: "Adelsa Ambrocio", guests: 1 },
];

export default function QuinceaneraInvitation() {
  const [guestName, setGuestName] = useState("")
  const [guestCount, setGuestCount] = useState<number | null>(null)
  const [showInvitation, setShowInvitation] = useState(false)
  const [isNotInvited, setIsNotInvited] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (guestName.trim()) {
      const guest = validGuests.find((g) => g.name.toLowerCase() === guestName.trim().toLowerCase())

      if (guest) {
        setGuestCount(guest.guests)
        setShowInvitation(true)
        setIsNotInvited(false)
      } else {
        setIsNotInvited(true)
        setShowInvitation(false)
      }
    }
  }

  const handleReset = () => {
    setShowInvitation(false)
    setIsNotInvited(false)
    setGuestName("")
    setGuestCount(null)
  }

  // 🌸 DECORATIVE BACKGROUND COMPONENT (flowers & hearts)
  const DecorativeBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* floating blobs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-green-400/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-400/30 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* 🌺 Decorative images (replace src with your own) */}
      <img
        src="/flowers/flowers_1.webp"
        alt="Flower"
        className="absolute w-40 sm:w-52 top-10 right-0 opacity-60 rotate-[15deg] animate-slow-spin"
      />
      <img
        src="/flowers/flowers_1.webp"
        alt="Flower"
        className="absolute w-32 sm:w-48 bottom-0 left-4 opacity-50 rotate-[-10deg] animate-slow-spin-reverse"
      />
      <img
        src="/flowers/flowers_1.webp"
        alt="Heart"
        className="absolute w-20 sm:w-28 top-1/3 left-1/2 opacity-40 animate-float-slow"
      />
      <img
        src="/flowers/flowers_1.webp"
        alt="Heart"
        className="absolute w-24 sm:w-32 bottom-1/4 right-1/3 opacity-40 animate-rotate-sway"
      />

      {/* existing sparkles/stars/hearts */}
      <Star className="absolute top-20 left-1/4 w-6 h-6 text-teal-400 fill-teal-400 animate-sparkle" />
      <Star
        className="absolute top-1/4 right-1/3 w-5 h-5 text-emerald-400 fill-emerald-400 animate-wiggle"
        style={{ animationDelay: "0.5s" }}
      />
      <Star
        className="absolute bottom-1/4 left-1/2 w-7 h-7 text-green-400 fill-green-400 animate-bounce-slow"
        style={{ animationDelay: "1.5s" }}
      />

      <Heart
        className="absolute top-32 right-1/4 w-8 h-8 text-emerald-500 fill-emerald-500 animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />
      <Heart
        className="absolute bottom-40 left-20 w-6 h-6 text-green-500 fill-green-500 animate-pulse-glow"
        style={{ animationDelay: "2.5s" }}
      />
      <Sparkles
        className="absolute top-1/4 left-1/3 w-8 h-8 text-teal-500 animate-sparkle"
        style={{ animationDelay: "0.8s" }}
      />
    </div>
  )

  // 🔹 NOT INVITED SCREEN
  if (isNotInvited) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <DecorativeBackground />
        <Card className="w-full max-w-md p-8 md:p-12 shadow-2xl border-2 border-primary/40 relative z-10 bg-white/95 backdrop-blur-sm animate-fade-in-up">
          <div className="space-y-6 text-center relative z-10">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Heart className="w-16 h-16 text-primary fill-primary animate-pulse-glow" />
                <Sparkles className="w-6 h-6 text-secondary absolute -top-2 -right-2 animate-sparkle" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif text-primary text-balance leading-tight">
              ¡Hola, {guestName}!
            </h1>

            <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed">
              <p className="text-pretty">Agradezco mucho tu interés en celebrar conmigo este día tan especial.</p>
              <p className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600">
                Lamentablemente, por cuestiones de espacio y organización, esta celebración es solo para invitados confirmados.
              </p>
              <p className="text-pretty">
                Espero que puedas comprender y que en futuras ocasiones podamos compartir momentos especiales juntos.
              </p>
            </div>

            <div className="flex justify-center items-center gap-2 text-primary pt-4">
              <Heart className="w-5 h-5 fill-current animate-pulse-glow" />
              <span className="text-lg font-medium">Con cariño y respeto</span>
              <Heart className="w-5 h-5 fill-current animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
            </div>

            <Button
              onClick={handleReset}
              className="w-full mt-6 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-700 text-white font-semibold"
            >
              Volver
            </Button>
          </div>
        </Card>
      </main>
    )
  }

  // 🔹 NAME ENTRY SCREEN
  if (!showInvitation) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <DecorativeBackground />
        <Card className="w-full max-w-md p-8 md:p-12 shadow-2xl border-2 border-primary/40 relative z-10 bg-white/95 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Heart className="w-16 h-16 text-primary fill-primary animate-pulse-glow" />
                  <Sparkles className="w-6 h-6 text-secondary absolute -top-2 -right-2 animate-sparkle" />
                  <Sparkles className="w-5 h-5 text-accent absolute -bottom-1 -left-2 animate-wiggle" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif text-primary text-balance animate-slide-in-left">
                Mis XV Años
              </h1>

              <p className="text-muted-foreground text-lg animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                Ingresa tu nombre para ver tu invitación
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Tu nombre
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Escribe tu nombre aquí..."
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="text-lg h-12 border-primary/50 focus:border-primary transition-all duration-300 hover:border-primary/70"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Ver mi invitación
              <Heart className="ml-2 w-5 h-5 fill-current animate-pulse" />
            </Button>
          </form>
        </Card>
      </main>
    )
  }

  // 🔹 INVITATION SCREEN
  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <DecorativeBackground />
      <Card className="w-full max-w-2xl p-8 md:p-16 shadow-2xl border-2 border-primary/40 relative z-10 bg-white/95 backdrop-blur-sm animate-fade-in-up">
        <div className="space-y-8 text-center relative z-10">
          <div className="flex justify-center items-center gap-4 animate-slide-in-left">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-500 to-green-500" />
            <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-glow" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-green-500 to-emerald-500" />
          </div>

          <div className="space-y-2 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 leading-tight">
              Fatima Daniela
            </h2>
            <h2 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 leading-tight">
              Ronquillo Ambrocio
            </h2>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-serif text-primary text-balance leading-tight animate-slide-in-right">
              ¡Hola, {guestName}!
            </h1>

            <div className="space-y-4 text-base md:text-lg text-foreground/90 leading-relaxed max-w-xl mx-auto">
              <p className="text-pretty animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                Con el corazón lleno de alegría y emoción, quiero compartir contigo uno de los momentos más especiales
                de mi vida.
              </p>

              <p
                className="text-pretty font-serif font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 text-2xl md:text-3xl animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                ¡Celebro mis XV años!
              </p>

              <p className="text-pretty animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Tu presencia haría este día aún más mágico e inolvidable. Sería un honor tenerte a mi lado en esta
                celebración que marca el inicio de una nueva etapa llena de sueños y esperanzas.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-2 border-primary/40 rounded-xl p-6 md:p-8 space-y-3 relative overflow-hidden">
            <div className="flex justify-center relative z-10">
              <Sparkles className="w-8 h-8 text-secondary animate-wiggle" />
            </div>
            {guestCount === 0 ? (
              <p className="text-lg md:text-xl text-foreground relative z-10 font-medium">
                Esta invitación es <span className="text-emerald-600 font-semibold">solo para ti 🫶</span>
              </p>
            ) : (
              <>
                <p className="text-lg md:text-xl text-foreground relative z-10">
                  Puedes asistir con{" "}
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 text-2xl md:text-3xl">
                    {guestCount}
                  </span>{" "}
                  {guestCount === 1 ? "invitado" : "invitados"}
                </p>
                <p className="text-sm text-muted-foreground relative z-10">Esperamos contar con tu confirmación</p>
              </>
            )}
          </div>

          <p className="text-base md:text-lg text-foreground/80 italic text-pretty animate-fade-in-up">
            "Los momentos más hermosos de la vida son aquellos que compartimos con las personas que amamos"
          </p>

          <div className="flex justify-center items-center gap-2 text-primary">
            <Heart className="w-5 h-5 fill-current animate-pulse-glow" />
            <span className="text-lg font-medium">Con cariño</span>
            <Heart className="w-5 h-5 fill-current animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
          </div>

          <Button
            onClick={handleReset}
            variant="outline"
            className="mt-8 border-emerald-600 text-emerald-700 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 hover:text-white bg-transparent transition-all duration-300 hover:border-transparent font-semibold"
          >
            Ver otra invitación
          </Button>
        </div>
      </Card>
    </main>
  )
}
