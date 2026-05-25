import { Variants } from "motion";

export const shakeVariants: Variants = {
    initial: { x: 0 },
    shake: {
    x: [0 - 5, 5, -5, 5, 0],
    transition: { duration: 0.4 },
    },
}