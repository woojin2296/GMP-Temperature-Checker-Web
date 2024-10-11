"use client";

import Graph from "@/components/Graph";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { extractFreezerData, extractRefrigeratorData } from "@/service/DataService";
import { useEffect, useState } from "react";
import { ThermometerSnowflake, Droplets } from 'lucide-react';

export default function Home() {
  const [data, setData] = useState<any>([]);


  return (
    <div className="bg-customDarkBg h-[calc(100vh-3.5rem)] p-2">
      <div className="flex h-2/6">
        <Card className="flex flex-col bg-customDark w-1/2 m-2">
          <CardHeader>
            <CardTitle className="text-white">Freezer</CardTitle>
            <CardDescription className="text-white">Current temperature and humidity of freezer.</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
            <div className="flex flex-grow justify-center items-center text-6xl text-white">
              <ThermometerSnowflake className="h-12 w-12 mx-4"/> 25°C
            </div>
            <div className="flex flex-grow justify-center items-center text-6xl text-white">
              <Droplets className="h-12 w-12 mx-4"/> 50%
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col bg-customDark w-1/2 m-2">
          <CardHeader className="text-white">
            <CardTitle>Refrigerator</CardTitle>
            <CardDescription className="text-white">Current temperature and humidity of refrigerator.</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
            <div className="flex flex-grow justify-center items-center text-6xl text-white">
              <ThermometerSnowflake className="h-12 w-12 mx-4"/> 25°C
            </div>
            <div className="flex flex-grow justify-center items-center text-6xl text-white">
              <Droplets className="h-12 w-12 mx-4"/> 50%
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex h-2/6">
        <Card className="flex flex-col bg-customDark w-1/4 m-2">
          <CardHeader className="text-white">
            <CardTitle>One hour</CardTitle>
            <CardDescription className="text-white">Data from one hour ago</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
          <div className="flex flex-grow justify-center items-center text-4xl text-white">
              25°C
            </div>
            <div className="flex flex-grow justify-center items-center text-4xl text-white">
              50%
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col bg-customDark w-1/4 m-2">
          <CardHeader className="text-white">
            <CardTitle>Difference</CardTitle>
            <CardDescription className="text-white">Difference from previous data</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
          <div className="flex flex-grow justify-center items-center text-4xl text-white">
              -5°C
            </div>
            <div className="flex flex-grow justify-center items-center text-4xl text-white">
              -2%
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col bg-customDark w-1/4 m-2">
          <CardHeader className="text-white">
            <CardTitle>One hour</CardTitle>
            <CardDescription className="text-white">Data from one hour ago</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
          <div className="flex flex-grow justify-center items-center text-4xl text-white">
              25°C
            </div>
            <div className="flex flex-grow justify-center items-center text-4xl text-white">
              50%
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col bg-customDark w-1/4 m-2">
          <CardHeader className="text-white">
            <CardTitle>Difference</CardTitle>
            <CardDescription className="text-white">Difference from previous data</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
          <div className="flex flex-grow justify-center items-center text-4xl text-white">
              -5°C
            </div>
            <div className="flex flex-grow justify-center items-center text-4xl text-white">
              -2%
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex h-2/6">
        <Card className="flex flex-col bg-customDark w-1/4 m-2">
          <CardHeader className="text-white">
            <CardTitle>Average(24 hour)</CardTitle>
            <CardDescription className="text-white">Average temperature over the past 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
          <div className="flex flex-grow justify-center items-center text-4xl text-white">
              25°C
            </div>
            <div className="flex flex-grow justify-center items-center text-4xl text-white">
              50%
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col bg-customDark w-1/4 m-2">
          <CardHeader className="text-white">
            <CardTitle>Average(1 week)</CardTitle>
            <CardDescription className="text-white">Average temperature over the past 1 week</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
          <div className="flex flex-grow justify-center items-center text-4xl text-white">
              25°C
            </div>
            <div className="flex flex-grow justify-center items-center text-4xl text-white">
              50%
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col bg-customDark w-1/4 m-2">
          <CardHeader className="text-white">
            <CardTitle>Average(24 hour)</CardTitle>
            <CardDescription className="text-white">Average temperature over the past 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
          <div className="flex flex-grow justify-center items-center text-4xl text-white">
              25°C
            </div>
            <div className="flex flex-grow justify-center items-center text-4xl text-white">
              50%
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col bg-customDark w-1/4 m-2">
          <CardHeader className="text-white">
            <CardTitle>Average(1 week)</CardTitle>
            <CardDescription className="text-white">Average temperature over the past 1 week</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
          <div className="flex flex-grow justify-center items-center text-4xl text-white">
              25°C
            </div>
            <div className="flex flex-grow justify-center items-center text-4xl text-white">
              50%
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}