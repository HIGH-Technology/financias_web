import * as React from "react"
// Icons are imported in nav-main.tsx and team-switcher.tsx

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: "Home" as const,
      isActive: true,
    },
    {
      title: "Finanças",
      url: "/finances",
      icon: "CreditCard" as const,
      isActive: false,
      items: [
        {
          title: "Contas",
          url: "/finances/accounts",
        },
      ],
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="relative">
      <div className="absolute right-0 top-14 bottom-16 w-px bg-white/10"></div>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
