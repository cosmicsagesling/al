"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "admin" | "trainee"
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const adminNavItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: "📊" },
    { name: "Trainees", href: "/admin/trainees", icon: "👥" },
    { name: "Content Management", href: "/admin/content", icon: "📚" },
    { name: "Quiz Management", href: "/admin/quizzes", icon: "🧠" },
    { name: "Certificates", href: "/admin/certificates", icon: "🎓" },
    { name: "Knowledge Base", href: "/admin/knowledge-base", icon: "🏛️" },
    { name: "Settings", href: "/admin/settings", icon: "⚙️" },
  ]

  const traineeNavItems = [
    { name: "Dashboard", href: "/trainee/dashboard", icon: "📊" },
    { name: "My Courses", href: "/trainee/courses", icon: "📚" },
    { name: "My Quizzes", href: "/trainee/quizzes", icon: "🧠" },
    { name: "My Certificates", href: "/trainee/certificates", icon: "🎓" },
    { name: "Knowledge Base", href: "/trainee/knowledge-base", icon: "🏛️" },
    { name: "Profile", href: "/trainee/profile", icon: "👤" },
  ]

  const navItems = role === "admin" ? adminNavItems : traineeNavItems

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar variant="inset" collapsible="icon">
          <SidebarHeader className="flex items-center justify-center p-4">
            <h1 className="text-xl font-bold">MPAS Training</h1>
          </SidebarHeader>
          <SidebarSeparator />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
                        <Link href={item.href}>
                          <span className="mr-2">{item.icon}</span>
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {role === "admin" ? "A" : "T"}
                </div>
                <div>
                  <p className="text-sm font-medium">{role === "admin" ? "Admin User" : "Trainee User"}</p>
                  <p className="text-xs text-muted-foreground">{role === "admin" ? "Administrator" : "Employee"}</p>
                </div>
              </div>
              {mounted && (
                <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                  {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              )}
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex flex-col min-h-screen">
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex h-14 items-center px-4">
                <SidebarTrigger />
                <div className="ml-auto flex items-center space-x-4">
                  <Button variant="outline" asChild>
                    <Link href="/login">Logout</Link>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1 p-6">{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
