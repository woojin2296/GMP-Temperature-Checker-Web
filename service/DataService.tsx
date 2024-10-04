import { GraphData, ThermoHygrometer } from "@/lib/DataType"

// 냉동고 데이터 추출 함수
export function extractFreezerData(data: ThermoHygrometer[]): GraphData[] {
    return data.map((item) => ({
        timestamp: item.timestamp,
        temperature: item.freezer_temp,
        humidity: item.freezer_humid,
    }));
}

// 냉장고 데이터 추출 함수
export function extractRefrigeratorData(data: ThermoHygrometer[]): GraphData[] {
    return data.map((item) => ({
        timestamp: item.timestamp,
        temperature: item.refrigerator_temp,
        humidity: item.refrigerator_humid,
    }));
}

export function parseData(data: any): ThermoHygrometer[] {
    return data.map((item: ThermoHygrometer) => ({
        timestamp: item.timestamp,
        refrigerator_temp: item.refrigerator_temp,
        refrigerator_humid: item.refrigerator_humid,
        freezer_temp: item.freezer_temp,
        freezer_humid: item.freezer_humid,
    }));
}