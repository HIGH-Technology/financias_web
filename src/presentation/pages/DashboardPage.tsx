'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  DollarSign, 
  TrendingUp, 
  CreditCard, 
  PiggyBank, 
  ArrowUpRight, 
  ArrowDownRight,
} from 'lucide-react'

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="group bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border-white/10 hover:border-primary-teal/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-teal/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-white/80">Saldo Total</CardTitle>
            <div className="p-2 rounded-lg bg-primary-teal/20 group-hover:bg-primary-teal/30 transition-colors">
              <DollarSign className="h-4 w-4 text-primary-teal" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">R$ 15.420,50</div>
            <div className="flex items-center space-x-1">
              <ArrowUpRight className="h-3 w-3 text-accent-neon" />
              <span className="text-xs text-accent-neon font-medium">+2.5%</span>
              <span className="text-xs text-white/50">este mês</span>
            </div>
          </CardContent>
        </Card>

        <Card className="group bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border-white/10 hover:border-accent-neon/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-neon/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-white/80">Receitas</CardTitle>
            <div className="p-2 rounded-lg bg-accent-neon/20 group-hover:bg-accent-neon/30 transition-colors">
              <TrendingUp className="h-4 w-4 text-accent-neon" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">R$ 8.750,00</div>
            <div className="flex items-center space-x-1">
              <ArrowUpRight className="h-3 w-3 text-accent-neon" />
              <span className="text-xs text-accent-neon font-medium">+5.2%</span>
              <span className="text-xs text-white/50">este mês</span>
            </div>
          </CardContent>
        </Card>

        <Card className="group bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border-white/10 hover:border-red-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-400/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-white/80">Despesas</CardTitle>
            <div className="p-2 rounded-lg bg-red-400/20 group-hover:bg-red-400/30 transition-colors">
              <CreditCard className="h-4 w-4 text-red-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">R$ 3.240,00</div>
            <div className="flex items-center space-x-1">
              <ArrowDownRight className="h-3 w-3 text-red-400" />
              <span className="text-xs text-red-400 font-medium">-1.8%</span>
              <span className="text-xs text-white/50">este mês</span>
            </div>
          </CardContent>
        </Card>

        <Card className="group bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border-white/10 hover:border-primary-teal/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-teal/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-white/80">Investimentos</CardTitle>
            <div className="p-2 rounded-lg bg-primary-teal/20 group-hover:bg-primary-teal/30 transition-colors">
              <PiggyBank className="h-4 w-4 text-primary-teal" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">R$ 12.580,50</div>
            <div className="flex items-center space-x-1">
              <ArrowUpRight className="h-3 w-3 text-accent-neon" />
              <span className="text-xs text-accent-neon font-medium">+8.3%</span>
              <span className="text-xs text-white/50">este mês</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border-white/10">
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-medium text-white/80">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-white">R$ 15.231,89</div>
                <div className="text-sm text-white/60">+20.1% from last month</div>
              </div>
              
              <div className="h-24 w-full">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 300 80"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0,60 L 25,45 L 50,55 L 75,40 L 100,35 L 125,30 L 150,32 L 175,28 L 200,25 L 225,20 L 250,15 L 275,10 L 300,5"
                    fill="none"
                    stroke="rgb(64, 255, 201)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle cx="0" cy="60" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="25" cy="45" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="50" cy="55" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="75" cy="40" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="100" cy="35" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="125" cy="30" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="150" cy="32" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="175" cy="28" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="200" cy="25" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="225" cy="20" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="250" cy="15" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="275" cy="10" r="2" fill="rgb(64, 255, 201)" />
                  <circle cx="300" cy="5" r="2" fill="rgb(64, 255, 201)" />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border-white/10">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-white/80">Subscriptions</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-white">+2.350</div>
                <div className="text-sm text-white/60">+180.1% from last month</div>
              </div>
              
              <div className="h-24 w-full">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 300 80"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="areaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(13, 148, 136)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="rgb(13, 148, 136)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  
                  <path
                    d="M 0,70 L 25,30 L 50,65 L 75,25 L 100,35 L 125,40 L 150,38 L 175,42 L 200,40 L 225,45 L 250,50 L 275,48 L 300,45 L 300,80 L 0,80 Z"
                    fill="url(#areaGradient2)"
                  />
                  
                  <path
                    d="M 0,70 L 25,30 L 50,65 L 75,25 L 100,35 L 125,40 L 150,38 L 175,42 L 200,40 L 225,45 L 250,50 L 275,48 L 300,45"
                    fill="none"
                    stroke="rgb(13, 148, 136)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
