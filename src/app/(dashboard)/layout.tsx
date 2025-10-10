import { AppSidebar } from "@/components/app-sidebar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProtectedRoute } from "@/components/ProtectedRoute"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ProtectedRoute>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Navbar title="Dashboard" />
          <main className="flex-1 min-h-screen bg-base-dark">
            <div className="p-6">
              {children}
            </div>
          </main>
          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </ProtectedRoute>
  )
}