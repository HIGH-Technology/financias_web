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
        <SidebarInset className="flex flex-col h-screen overflow-hidden">
          <Navbar />
          <main className="flex-1 bg-base-dark overflow-y-auto">
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