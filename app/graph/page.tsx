"use client";

import Graph from "@/components/Graph";
import { extractFreezerData, extractRefrigeratorData } from "@/service/DataService";
import { useEffect, useState } from "react";

export default function GraphPage() {
  const [refrigeratorData, setRefrigeratorData] = useState<any>([]);
  const [freezerData, setFreezerData] = useState<any>([]);

  useEffect(() => {
    fetchData();

    const updateData = setInterval(async () => {
      fetchData();
    }, 2000);

    return () => {
      clearInterval(updateData);
    };
  }, []);

  function fetchData() {
    fetch("/api/graphdata")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRefrigeratorData(extractRefrigeratorData(data));
        setFreezerData(extractFreezerData(data));
      });
  }

  return (
    <div className="bg-customDarkBg h-[calc(100vh-3.5rem)] p-2">
      <Graph className="bg-customDark m-4 text-white" isFreezer={true} chartData={refrigeratorData} />
      <Graph className="bg-customDark mx-4 text-white" isFreezer={false} chartData={freezerData} />
    </div>
  );
}