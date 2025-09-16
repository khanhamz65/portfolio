"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  { name: "HTML", icon: "🌐", level: 95 },
  { name: "CSS", icon: "🎨", level: 90 },
  { name: "Tailwind", icon: "💨", level: 90 },
  { name: "JavaScript", icon: "⚡", level: 80 },
  { name: "React", icon: "⚛️", level: 90 },
  { name: "Next.js", icon: "▲", level: 85 },
  { name: "Angular", icon: "🅰️", level: 80 },
  { name: "PHP", icon: "🐘", level: 85 },
  { name: "Laravel", icon: "🔴", level: 90 },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-foreground mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Technical Skills
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Proficient in modern web technologies with a focus on creating scalable and maintainable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-border transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`, // Increased delay for better staggered effect
              }}
            >
              <div className="flex items-center mb-4">
                <span
                  className={`text-3xl mr-3 transition-all duration-700 ${
                    isVisible ? "scale-100 rotate-0" : "scale-0 rotate-180"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  {skill.icon}
                </span>
                <h3 className="text-xl font-semibold text-card-foreground">{skill.name}</h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1500 ease-out shadow-lg"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 150 + 500}ms`,
                      boxShadow: isVisible ? "0 0 10px rgba(234, 88, 12, 0.5)" : "none",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground italic">
            "Proficient in modern web technologies with a passion for continuous learning."
          </p>
        </div>
      </div>
    </section>
  )
}
