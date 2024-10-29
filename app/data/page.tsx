"use client"

import React, { useState, useEffect } from "react"
import { columns } from "@/components/data-table/columns"
import { DataTable } from "@/components/data-table/DataTable"
import { DateRangePicker } from "@/components/DateRangePicker"
import { DateRange } from "react-day-picker"
import { parseData } from "@/service/DataService"
import { ThermoHygrometer } from "@/lib/DataType"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Data() {

  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(new Date().setDate(new Date().getDate() - 7)),
    to: new Date(),
  });
  const [filteredData, setFilteredData] = useState<ThermoHygrometer[]>([]);

  function fetchData({ from, to }: { from: Date; to: Date }) {
    const formatDate = (date: Date) => {
      return date.toISOString().split('T')[0];
    };
    const fromString = formatDate(from);
    const toString = formatDate(to);
    
    const url = `https://01a73788-3342-4b8a-a42f-08bbfe6e6407.mock.pstmn.io/past-data?from=${fromString}&to=${toString}&interval=0`;
  
    // fetch 요청에 URL에 파라미터 포함
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFilteredData(parseData(data["pastData"]));
      })
      .catch((error) => {
        console.error("데이터 가져오기 오류:", error);
      });
  }

  return (
    <div className="bg-customDarkBg p-4 h-[calc(100vh-3.5rem)]">
      <Card className="flex items-center bg-customDark h-16 p-4 mb-4">
        <DateRangePicker date={dateRange} setDate={setDateRange} />
        <Button className="bg-white mx-4 text-black"
                onClick={() => {
                  if (dateRange.from && dateRange.to) {
                    fetchData({ from: dateRange.from, to: dateRange.to });
                  }
                }}>
                  SUBMIT
        </Button>
      </Card>
      
      <DataTable columns={columns} data={filteredData} />
    </div>
  );
}