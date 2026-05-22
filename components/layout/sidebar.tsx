import Link from "next/link";
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { FolderKanban, LayoutDashboard, LucideIcon, Settings } from "lucide-react";

interface SidebarItem {
    label: string,
    route: string,
    icon: LucideIcon
}

const sidebarItems: SidebarItem[] = [
    {
        label: "Dashboard",
        route: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Projects",
        route: "/projects",
        icon: FolderKanban,
    },
    {
        label: "Settings",
        route: "/settings",
        icon: Settings,
    },
]

export function SidebarComponent() {
    return(
            
            <Sidebar>
                <SidebarHeader />

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarMenu>
                        {sidebarItems.map(item => (
                            <SidebarMenuItem key={item.label}>
                                <SidebarMenuButton>
                                    <Link href={item.route} className="flex items-center gap-2">
                                        <span><item.icon /></span>
                                        <span>{item.label}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
    )
}