"use client"

import * as React from "react"
import { Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-white/10 bg-base-dark/95 backdrop-blur-xl flex-shrink-0">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2 text-xs text-white/60">
            <span>© {currentYear} {process.env.NEXT_PUBLIC_SITE_TITLE}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline"><a href="https://www.high-development.com.br/" target="_blank" className="hover:text-white">HIGH Development</a></span>
          </div>

          {/*<div className="flex items-center space-x-4 text-xs text-white/60">
            <a href="/help" className="hover:text-primary-teal transition-colors">Ajuda</a>
            <a href="/docs" className="hover:text-primary-teal transition-colors">Documentação</a>
            <a href="/about" className="hover:text-primary-teal transition-colors">Sobre</a>
          </div>*/}

          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="h-7 w-7 text-white/60 hover:text-white hover:bg-white/5">
              <Github className="h-3 w-3" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-white/60 hover:text-white hover:bg-white/5">
              <Twitter className="h-3 w-3" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-white/60 hover:text-white hover:bg-white/5">
              <Linkedin className="h-3 w-3" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
