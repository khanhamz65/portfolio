"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const texts = ["Full Stack Developer", "React Specialist", "Problem Solver", "UI/UX Enthusiast"]

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      const targetText = texts[currentText]
      if (displayText.length < targetText.length) {
        timeout = setTimeout(() => {
          setDisplayText(targetText.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentText((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, displayText, isTyping, texts])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      const headerOffset = 80
      const elementPosition = element.offsetTop - headerOffset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-float">
                <img
                  src="/hamza.jpg"
                  alt="Hamza Munir - Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg lg:text-xl">👋</span>
              </div>
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-primary">Hamza Munir</span>
              </h1>

              <div className="h-12 sm:h-16 lg:h-20 flex items-center justify-center lg:justify-start">
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-muted-foreground">
                  <span className="inline-block">
                    {displayText}
                    <span className="inline-block w-0.5 h-6 sm:h-8 lg:h-10 bg-primary ml-1 animate-pulse" />
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
             I craft modern, scalable, and user-friendly web solutions with passion. From building seamless front-end experiences to robust back-end systems, I turn ideas into reality through clean code and creative design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <div className="flex gap-3 justify-center lg:justify-start">
                <a href="https://github.com/khanhamz65" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/hamzamunirdev" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=khanhamz65@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}