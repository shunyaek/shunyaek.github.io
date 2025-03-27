"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import React from "react"

/**
 * Theme provider component
 *
 * Wraps the application with the theme context provider from next-themes
 */
export function ThemeProvider({
    children,
    ...props
}: {
    children: React.ReactNode;
    [key: string]: any;
}) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 