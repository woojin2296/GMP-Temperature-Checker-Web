import Link from "next/link"
import {
  Database,
  Home,
  Settings,
} from "lucide-react"

import * as React from "react"
import { Separator } from "@/components/ui/separator"

export default function Sidebar() {
  return (
    <div className={'flex flex-col h-screen border-r min-w-[260px]'}>

        <Link href="/" className="flex h-14 items-center border-b px-4 font-semibold">
            GMP Tempature Dashboard
        </Link>

        <nav className="flex flex-col px-2 text-sm font-medium">
            <Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-5 text-muted-foreground transition-all hover:text-primary">
                <Home className="h-4 w-4" /> Home
            </Link>

            <Separator />

            <Link href="/data" className="flex items-center gap-3 rounded-lg px-3 py-5 text-muted-foreground transition-all hover:text-primary">
                <Database className="h-4 w-4" /> Data
            </Link>

            <Separator />

            <Link href="/setting" className="flex items-center gap-3 rounded-lg px-3 py-5 text-muted-foreground transition-all hover:text-primary">
                <Settings className="h-4 w-4" /> Setting
            </Link>

            <Separator />
        </nav>

    </div>
  )
}
