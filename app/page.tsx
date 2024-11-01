"use client";

import { useEffect, useState } from "react";
import { DashboardCardBig } from "@/components/DashboardCardBig";
import { DashboardCardSmall } from "@/components/DashboardCardSmall";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {
      fetch(process.env.NEXT_PUBLIC_API_URL + "/live-data")
      .then((response) => response.text())
      .then((result) => setData(JSON.parse(result)))
      .catch((error) => console.error(error));
      console.log("Data fetched");
  }

  return (
    <div className="bg-customDarkBg h-[calc(100vh-3.5rem)] p-2">
      <div className="flex h-2/6">
        <DashboardCardBig 
              title="Freezer" 
              description="Current temperature and humidity of freezer."
              temperature={ data == null ? 0 : data.current.freezerTemp}
              humidity={ data == null ? 0 : data.current.freezerHumid} />
        <DashboardCardBig 
              title="Refrigerator" 
              description="Current temperature and humidity of refrigerator."
              temperature={ data == null ? 0 : data.current.refrigeratorTemp}
              humidity={ data == null ? 0 : data.current.refrigeratorHumid} />
      </div>
      <div className="flex h-2/6">
        <DashboardCardSmall 
              title="One hour" 
              description="Data from one hour ago."
              temperature={ data == null ? 0 : data.pastOneHour.freezerTemp}
              humidity={ data == null ? 0 : data.pastOneHour.freezerHumid} />
        <DashboardCardSmall 
              title="Difference" 
              description="Difference from previous data."
              temperature={ data == null ? 0 : data.current.freezerTemp - data.pastOneHour.freezerTemp}
              humidity={ data == null ? 0 : data.current.freezerHumid - data.pastOneHour.freezerHumid} />
        <DashboardCardSmall 
              title="One hour" 
              description="Data from one hour ago."
              temperature={ data == null ? 0 : data.pastOneHour.refrigeratorTemp}
              humidity={ data == null ? 0 : data.pastOneHour.refrigeratorHumid} />
        <DashboardCardSmall 
              title="Difference" 
              description="Difference from previous data."
              temperature={ data == null ? 0 : data.current.refrigeratorTemp - data.pastOneHour.refrigeratorTemp}
              humidity={ data == null ? 0 : data.current.refrigeratorHumid - data.pastOneHour.refrigeratorHumid} />
      </div>
      <div className="flex h-2/6">
        <DashboardCardBig 
              title="Average(24 hour)" 
              description="Average temperature over the past 24 hours."
              temperature={ data == null ? 0 : data.pastOneDayAverage.freezerTemp}
              humidity={ data == null ? 0 : data.pastOneDayAverage.freezerHumid} />
        <DashboardCardBig 
              title="Average(24 hour)" 
              description="Average temperature over the past 24 hours."
              temperature={ data == null ? 0 : data.pastOneDayAverage.refrigeratorTemp}
              humidity={ data == null ? 0 : data.pastOneDayAverage.refrigeratorHumid} />
      </div>
    </div>
  );
}