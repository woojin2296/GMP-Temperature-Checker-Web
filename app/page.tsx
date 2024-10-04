"use client";

import Graph from "@/components/Graph";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { extractFreezerData, extractRefrigeratorData } from "@/service/DataService";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>([]);

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
      });
  }

  return (
    <div className="flex bg-customDarkBg h-[calc(100vh-3.5rem)] p-2">
      <Card className="bg-customDark h-2/6 w-1/2 m-2">
        <CardHeader>
          <CardTitle className="text-white">Freezer</CardTitle>
          <CardDescription className="text-white">Current temperature and humidity of freezer.</CardDescription>
        </CardHeader>
        <CardContent className="flex">
          <div className="flex flex-grow justify-center items-center text-6xl text-white">
            25°C
          </div>
          <div className="flex-grow text-6xl text-white">
            50%
          </div>
        </CardContent>
      </Card>
      <Card className="bg-customDark h-2/6 w-1/2 m-2">
        <CardHeader className="text-white">
          <CardTitle>Refrigerator</CardTitle>
          <CardDescription className="text-white">Current temperature and humidity of refrigerator.</CardDescription>
        </CardHeader>
        <CardContent>test</CardContent>
      </Card>
    </div>
  );
}