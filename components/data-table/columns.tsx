"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ThermoHygrometer } from "@/api/DataType"
export const columns: ColumnDef<ThermoHygrometer>[] = [
  {
    accessorKey: "timestamp",
    header: "Timestamp",
  },
  {
    accessorKey: "refrigerator_temp",
    header: "Refrigerator Temperature",
  },
  {
    accessorKey: "refrigerator_humid",
    header: "Refrigerator Humidity",
  },
  {
    accessorKey: "freezer_temp",
    header: "Freezer Temperature",
  },
  {
    accessorKey: "freezer_humid",
    header: "Freezer Humidity",
  },
]
