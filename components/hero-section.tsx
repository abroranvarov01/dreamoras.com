"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Sparkles, Moon, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [mistParticles, setMistParticles] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setMistParticles((prev) => [...prev, Date.now()])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMistParticles((prev) => prev.slice(1))
    }, 4000)

    return () => clearTimeout(timeout)
  }, [mistParticles])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-32">
      <div className="absolute inset-0 bg-[url('/lavender-spa-aromatherapy-background.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-pale-cream/80 via-pale-cream/70 to-pale-cream/90" />

      {/* Animated mist background */}
      <div className="absolute inset-0 overflow-hidden">
        {mistParticles.map((id) => (
          <div
            key={id}
            className="absolute w-64 h-64 rounded-full bg-misty-lilac/20 blur-3xl animate-mist"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-radial from-twilight-lavender/30 to-transparent animate-breathe" />

      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
        {/* Decorative icons */}
        <div className="flex justify-center gap-8 mb-4">
          <Moon className="w-8 h-8 text-misty-lilac/60 animate-float" />
          <Sparkles className="w-8 h-8 text-sage-green/60 animate-shimmer" />
          <Star className="w-8 h-8 text-warm-sand/60 animate-float" style={{ animationDelay: "1s" }} />
        </div>

        {/* Central product visual with enhanced styling */}

        <div className="space-y-4">
          <div className="inline-block px-6 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-misty-lilac/30 text-sm text-midnight-navy font-light mb-4">
            Premium Aromatherapy • Made with Pure Essential Oils
          </div>

          <h1 className="font-serif text-6xl md:text-8xl font-light text-midnight-navy tracking-tight text-balance">
            Find Your Calm.
          </h1>

          <p className="text-2xl md:text-3xl text-midnight-navy/80 font-light text-balance max-w-3xl mx-auto">
            Sleep deeper. Relax faster. Breathe easier.
          </p>

          <p className="text-lg text-midnight-navy/60 font-light text-balance max-w-2xl mx-auto">
            Transform your evenings with scientifically-backed aromatherapy products that help you unwind naturally and
            wake up refreshed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link href="/sleep-collection">
            <Button
              size="lg"
              className="bg-midnight-navy text-pale-cream hover:bg-midnight-navy/90 transition-all duration-300 hover:shadow-lg hover:shadow-misty-lilac/50 px-10 py-7 text-lg group"
            >
              <span className="inline-block group-hover:scale-105 transition-transform">Shop Sleep Collection</span>
            </Button>
          </Link>
          <Link href="/aromatherapy">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-midnight-navy text-midnight-navy hover:bg-midnight-navy/5 px-10 py-7 text-lg group bg-transparent"
            >
              <span className="inline-block group-hover:scale-105 transition-transform">Explore Aromatherapy</span>
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-midnight-navy/60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>100% Pure Essential Oils</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            <span>5000+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4" />
            <span>60-Night Sleep Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
