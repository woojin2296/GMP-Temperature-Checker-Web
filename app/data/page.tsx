"use client"

import React, { useState, useEffect } from "react"
import { columns } from "@/components/data-table/columns"
import { DataTable } from "@/components/data-table/DataTable"
import { DateRangePicker } from "@/components/DateRangePicker"
import { DateRange } from "react-day-picker"
import { ThermoHygrometer } from "@/lib/DataType"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Data() {

  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(new Date().setDate(new Date().getDate() - 1)),
    to: new Date(),
  });
  const [data, setData] = useState<ThermoHygrometer[]>([]);

  const fetchData = () => {
    const fromString = dateRange.from?.toISOString().split("T")[0] ?? "";
    const toString = dateRange.to?.toISOString().split("T")[0] ?? "";

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/past-data?from=${fromString}&to=${toString}&interval=0`)
    .then((response) => response.text())
    .then((result) => {
      setData(JSON.parse(result).pastData)
    })
    .catch((error) => console.error(error));
  }

  useEffect(() => {
    console.log(data[0]);
  }, [data]);

  return (
    <div className="bg-customDarkBg p-4 h-[calc(100vh-3.5rem)]">
      <Card className="flex items-center bg-customDark h-16 p-4 mb-4">
        <DateRangePicker date={dateRange} setDate={setDateRange} />
        <Button className="bg-white mx-4 text-black"
                onClick={() => {
                  fetchData();
                }}>
                  SUBMIT
        </Button>
      </Card>
      
      <DataTable columns={columns} data={data} />
    </div>
  );
}