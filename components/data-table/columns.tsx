"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ThermoHygrometer } from "@/lib/DataType"
export const columns: ColumnDef<ThermoHygrometer>[] = [
  {
    accessorKey: "timestamp",
    header: "Timestamp",
  },
  {
    accessorKey: "refrigeratorTemp",
    header: "Refrigerator Temperature",
  },
  {
    accessorKey: "refrigeratorHumid",
    header: "Refrigerator Humidity",
  },
  {
    accessorKey: "freezerTemp",
    header: "Freezer Temperature",
  },
  {
    accessorKey: "freezerHumid",
    header: "Freezer Humidity",
  },
]
