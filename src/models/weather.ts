//creating nested interfaces to get to properties.periods.dataArray
export interface WeatherResponse {
    properties: Properties;
}

export interface Properties {
    periods: Period[];
}

export interface Period {
    name: string;
    isDayTime: boolean;
    temperature: number;
    temperatureUnit: string;
    icon: string;
    shortForcast: string;
    detailedForecast: string;

}