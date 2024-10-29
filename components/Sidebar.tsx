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
    <div className='flex flex-col h-screen min-w-[260px] bg-customDark'>

        <Link href="/" className="flex h-14 text-white items-center px-4 font-semibold bg-customBlue">
            GMP Temparature Dashboard
        </Link>

        <nav className="flex flex-col px-2 text-sm font-medium">
            <Link href="/" className="flex text-white  items-center gap-3 rounded-lg px-3 py-5 text-muted-foreground transition-all hover:text-blue-300">
                <Home className="h-4 w-4" /> Home
            </Link>

            <Link href="/data" className="flex text-white items-center gap-3 rounded-lg px-3 py-5 text-muted-foreground transition-all hover:text-blue-300">
                <Database className="h-4 w-4" /> Data
            </Link>
        </nav>

    </div>
  )
}
