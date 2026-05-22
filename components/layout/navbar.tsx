"use client"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { ThemeToggle } from "../ui/theme-toggle";
// import { useEffect, useState } from "react";

export function Navbar() {

    return (
        <div className="flex gap-4 p-2">
            <Input placeholder="Search..." type="search"/>
            <div className="flex gap-2">
                {/* current theme {theme} */}
                <ThemeToggle />
                <Avatar>
                    <AvatarImage
                        src=""
                        alt="user"
                        className="grayscale"
                    />
                    <AvatarFallback>MH</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}