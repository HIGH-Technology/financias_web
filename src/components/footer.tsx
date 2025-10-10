"use client"

import * as React from "react"
import { Heart, Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-white/10 bg-base-dark backdrop-blur-xl">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-teal to-accent-neon/50">
                <span className="text-sm font-bold text-white">F</span>
              </div>
              <span className="font-bold text-white">Sistema Financeiro</span>
            </div>
            <p className="text-sm text-white/60">
              Controle completo das suas finanças pessoais e empresariais em um só lugar.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/features" className="text-white/60 hover:text-primary-teal transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-white/60 hover:text-primary-teal transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="/integrations" className="text-white/60 hover:text-primary-teal transition-colors">
                  Integrações
                </a>
              </li>
              <li>
                <a href="/api" className="text-white/60 hover:text-primary-teal transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-white/60 hover:text-primary-teal transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white/60 hover:text-primary-teal transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="text-white/60 hover:text-primary-teal transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/60 hover:text-primary-teal transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/help" className="text-white/60 hover:text-primary-teal transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="/docs" className="text-white/60 hover:text-primary-teal transition-colors">
                  Documentação
                </a>
              </li>
              <li>
                <a href="/community" className="text-white/60 hover:text-primary-teal transition-colors">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="/status" className="text-white/60 hover:text-primary-teal transition-colors">
                  Status do Sistema
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-white/60">
            <span>© {currentYear} Sistema Financeiro. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-white/60">Feito por</span>
            <span className="text-sm text-white/60">High Developments</span>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white/60 hover:text-white hover:bg-white/5">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white/60 hover:text-white hover:bg-white/5">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white/60 hover:text-white hover:bg-white/5">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
