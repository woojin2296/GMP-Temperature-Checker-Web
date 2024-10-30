"use client"

import { Droplets, ThermometerSnowflake } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export function DashboardCardBig({
    title,
    description,
    temperature,
    humidity
  }:{
    title: string,
    description: string,
    temperature: number,
    humidity: number
  }) {
    return (
        <Card className="flex flex-col bg-customDark w-1/2 m-2">
          <CardHeader>
            <CardTitle className="text-white">{title}</CardTitle>
            <CardDescription className="text-white">{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
            <div className="flex flex-grow justify-center items-center text-5xl text-white">
              <ThermometerSnowflake className="h-12 w-12 mx-4"/> {temperature.toFixed(1)}°C
            </div>
            <div className="flex flex-grow justify-center items-center text-5xl text-white">
              <Droplets className="h-12 w-12 mx-4"/> {humidity.toFixed(1)}%
            </div>
          </CardContent>
        </Card>
    )
}
