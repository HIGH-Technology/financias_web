"use client"

import * as React from "react"
import { Bell, Search, User, LogOut, Settings, HelpCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/shared/hooks/useAuth"

export function Navbar() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    toast.success("Logout realizado com sucesso!")
    router.push("/login")
  }

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-base-dark/95 backdrop-blur-xl border-b border-white/10">
      <div className="flex h-14 items-center px-4 justify-end">
        <div className="hidden md:flex md:max-w-sm md:mr-4">
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/60" />
            <Input
              placeholder="Pesquisar..."
              className="pl-8 bg-white/5 border-white/10 text-white placeholder:text-white/60 focus:border-accent-neon"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="relative text-white/70 hover:text-white hover:bg-white/5">
            <Bell className="h-4 w-4" />
            {/*<Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs bg-black backdrop-blur-xl text-white">
              3
            </Badge>*/}
            <span className="sr-only">Notifications</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="relative h-8 w-8 rounded-full hover:bg-white/10 transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-primary-teal/50 focus:ring-offset-2 focus:ring-offset-base-dark"
              >
                <Avatar className="h-8 w-8 ring-2 ring-transparent hover:ring-primary-teal/30 transition-all duration-200">
                  <AvatarImage 
                    src={user?.avatar || "https://www.upload.ee/image/18686481/defaultavatar.png"} 
                    alt={user?.name || "User"}
                    className="hover:brightness-110 transition-all duration-200"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-primary-teal to-accent-neon/50 text-white hover:from-primary-teal/80 hover:to-accent-neon/60 transition-all duration-200">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-base-dark/95 backdrop-blur-xl border-white/10" align="end" forceMount>
              <DropdownMenuLabel className="font-normal text-white">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user?.name || "Usuário"}</p>
                  <p className="text-xs leading-none text-white/60">
                    {user?.email || "email@exemplo.com"}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5">
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5">
                <Settings className="mr-2 h-4 w-4" />
                <span>Configurações</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Ajuda e Suporte</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem
                className="text-red-400 focus:text-red-400 hover:bg-red-400/10"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
