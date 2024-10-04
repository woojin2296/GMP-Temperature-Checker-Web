export type ThermoHygrometer = {
    timestamp: string
    refrigerator_temp: number
    refrigerator_humid: number
    freezer_temp: number
    freezer_humid: number
}

export type GraphData = {
    timestamp: string
    temperature: number
    humidity: number
}