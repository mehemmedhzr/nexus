"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "./button"
import { useTheme } from "next-themes"

export function ThemeToggle(){
    const {theme, setTheme} = useTheme();

    return (
        <Button variant="outline" size="icon" className="rounded-full" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="absolute scale-100 dark:scale-0" />
            <Moon className="absolute scale-0 dark:scale-100" />
        </Button>
    )
}