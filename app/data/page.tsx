"use client"

import React, { useState, useEffect } from "react"
import { columns } from "@/components/data-table/columns"
import { DataTable } from "@/components/data-table/DataTable"
import { DateRangePicker } from "@/components/DateRangePicker"
import { DateRange } from "react-day-picker"
import { parseData } from "@/service/DataService"
import { ThermoHygrometer } from "@/lib/DataType"

export default function Data() {

  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(new Date().setDate(new Date().getDate() - 7)),
    to: new Date(),
  });
  const [filteredData, setFilteredData] = useState<ThermoHygrometer[]>([]);

  useEffect(() => {
    console.log("data changed!")
  }, [dateRange]);

  function fetchData({ from, to }: { from: Date; to: Date }) {
    // `from`과 `to`를 ISO 문자열로 변환하여 쿼리 파라미터로 설정
    const fromString = from.toISOString();
    const toString = to.toISOString();
  
    // 쿼리 파라미터로 `from`과 `to`를 포함하여 API 요청
    const url = `/api/tabledata?from=${fromString}&to=${toString}`;
  
    // fetch 요청에 URL에 파라미터 포함
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFilteredData(parseData(data));
      })
      .catch((error) => {
        console.error("데이터 가져오기 오류:", error);
      });
  }

  return (
    <div className="p-4">
      <DateRangePicker date={dateRange} setDate={setDateRange} />
      <DataTable columns={columns} data={filteredData} />
    </div>
  );
}