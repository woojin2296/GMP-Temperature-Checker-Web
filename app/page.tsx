"use client";

import Graph from "@/components/Graph";
import { extractFreezerData, extractRefrigeratorData } from "@/service/DataService";
import { useEffect, useState } from "react";

export default function Home() {
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
    <div>
      <Graph className="m-4" isFreezer={true} chartData={refrigeratorData} />
      <Graph className="mx-4" isFreezer={false} chartData={freezerData} />
    </div>
  );
}