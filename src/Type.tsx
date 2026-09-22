import type { ReactNode } from "react";

export interface Tech{
        id: number,
        name: string,
        icon: ReactNode,
        description: string,
        category: string,
        level: string,
        rating: number,
        badge: string,
        badgeColor: string,
}