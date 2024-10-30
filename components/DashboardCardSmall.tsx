"use client"

import { Droplets, ThermometerSnowflake } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export function DashboardCardSmall({
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
        <Card className="flex flex-col bg-customDark w-1/4 m-2">
          <CardHeader>
            <CardTitle className="text-white">{title}</CardTitle>
            <CardDescription className="text-white">{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex felx-row flex-grow">
            <div className="flex flex-grow justify-center items-center text-4xl text-white">
              {temperature.toFixed(1)}°C
            </div>
            <div className="flex flex-grow justify-center items-center text-4xl text-white">
              {humidity.toFixed(1)}%
            </div>
          </CardContent>
        </Card>
    )
}
