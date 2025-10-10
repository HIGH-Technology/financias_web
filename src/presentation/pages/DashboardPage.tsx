'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, TrendingUp, CreditCard, PiggyBank } from 'lucide-react'

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white">Bem-vindo ao Sistema Financeiro!</h2>
        <p className="text-white/60">
          Gerencie suas finanças de forma eficiente e tome decisões inteligentes.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white/90">Saldo Total</CardTitle>
            <DollarSign className="h-4 w-4 text-white/60" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-teal">R$ 15.420,50</div>
            <p className="text-xs text-white/60">
              +2.5% desde o mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white/90">Receitas</CardTitle>
            <TrendingUp className="h-4 w-4 text-white/60" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent-neon">R$ 8.750,00</div>
            <p className="text-xs text-white/60">
              +5.2% desde o mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white/90">Despesas</CardTitle>
            <CreditCard className="h-4 w-4 text-white/60" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">R$ 3.240,00</div>
            <p className="text-xs text-white/60">
              -1.8% desde o mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-xl border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white/90">Investimentos</CardTitle>
            <PiggyBank className="h-4 w-4 text-white/60" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-teal">R$ 12.580,50</div>
            <p className="text-xs text-white/60">
              +8.3% desde o mês passado
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/5 backdrop-blur-xl border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Atividade Recente</CardTitle>
          <CardDescription className="text-white/60">
            Suas últimas transações financeiras
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-neon rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-white">Salário recebido</p>
                  <p className="text-xs text-white/60">Hoje, 09:00</p>
                </div>
              </div>
              <div className="text-sm font-medium text-accent-neon">+R$ 5.500,00</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-white">Pagamento de contas</p>
                  <p className="text-xs text-white/60">Ontem, 14:30</p>
                </div>
              </div>
              <div className="text-sm font-medium text-red-400">-R$ 850,00</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-teal rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-white">Investimento em ações</p>
                  <p className="text-xs text-white/60">2 dias atrás, 10:15</p>
                </div>
              </div>
              <div className="text-sm font-medium text-primary-teal">+R$ 2.300,00</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
