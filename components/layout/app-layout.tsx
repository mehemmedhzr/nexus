import { SidebarComponent } from "@/components/layout/sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { Navbar } from "./navbar";

export default function AppLayout({children}: {children: React.ReactNode}) {
    return(
        <SidebarProvider>
            <SidebarComponent />

            <main className="grow">
                <Navbar />
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}