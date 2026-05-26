import { LucideIcon } from "lucide-react";
import React, { JSX } from "react";

export interface CardProps {
    title: string,
    icon?: React.ReactNode,
    value: string | number
}