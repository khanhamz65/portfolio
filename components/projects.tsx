"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Pinnacle Premiere Limo",
    description:
      "A sleek limo booking website enabling users to reserve luxury transportation with ease and efficiency.",
    image: "/pinnacle-premiere-limo.png",
    technologies: ["React", "EmailJS"],
    githubUrl: null,
    liveUrl: "https://pinnaclepremierlimo.com/",
  },
  {
    title: "SNF Wound Care",
    description:
      "A US-based skilled nursing facility platform for managing wound care, built with a robust Next.js frontend and Laravel backend.",
    image: "/snf-wound-care.png",
    technologies: ["Next.js", "Laravel"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: "eHealth Jamaica",
    description:
      "An Electronic Medical Record (EMR) system for healthcare providers, featuring secure data management and patient records.",
    image: "/ehealth-jamaica.png",
    technologies: ["Angular", "Laravel"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: "eHealth Jamaica Meeting Portal",
    description:
      "A video call service connecting patients and doctors, built with real-time communication features using WebRTC.",
    image: "/ehealth-meeting-portal.png",
    technologies: ["React", "Firebase", "WebRTC"],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: "ZaikaRoots",
    description:
      "A recipe finder app powered by the Spoonacular API, offering a vast collection of global cuisines and personalized recipe suggestions.",
    image: "/zaikaroots.png",
    technologies: ["Next.js", "Spoonacular API", "Tailwind CSS"],
    githubUrl: null,
    liveUrl: "https://zaikaroots-receipe.vercel.app/",
  },
  {
    title: "Weather Insights",
    description:
      "A responsive weather app that detects current location weather, allows location search, and map-based weather checks using a free weather API.",
    image: "/weather-insights.png",
    technologies: ["React", "OpenWeather API", "CSS3"],
    githubUrl: null,
    liveUrl: "https://weather-insight-omega.vercel.app/",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-foreground mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            A showcase of my recent work, demonstrating expertise in modern web development technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-border bg-card overflow-hidden transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                {project.liveUrl && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform ${
                        isVisible ? "scale-100" : "scale-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 200 + techIndex * 100 + 400}ms`,
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                {project.liveUrl && (
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}