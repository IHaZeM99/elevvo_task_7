import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  // const [location, setLocation] = useState("Cairo, Egypt");
  const [weather, setWeather] = useState({
    coord: {
      lon: 31.2497,
      lat: 30.0626,
    },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 33.42,
      feels_like: 34.46,
      temp_min: 33.42,
      temp_max: 33.42,
      pressure: 1008,
      humidity: 40,
      sea_level: 1008,
      grnd_level: 1002,
    },
    visibility: 10000,
    wind: {
      speed: 5.66,
      deg: 350,
    },
    clouds: {
      all: 75,
    },
    dt: 1755442012,
    sys: {
      type: 1,
      id: 2514,
      country: "EG",
      sunrise: 1755401014,
      sunset: 1755448494,
    },
    timezone: 10800,
    id: 360630,
    name: "Cairo",
    cod: 200,
  });
  const [forecast, setForecast] = useState({
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1755594000,
            "main": {
                "temp": 37.42,
                "feels_like": 35.23,
                "temp_min": 36.27,
                "temp_max": 37.42,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1002,
                "humidity": 16,
                "temp_kf": 1.15
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.7,
                "deg": 22,
                "gust": 3.42
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-19 09:00:00"
        },
        {
            "dt": 1755604800,
            "main": {
                "temp": 36.78,
                "feels_like": 34.65,
                "temp_min": 35.49,
                "temp_max": 36.78,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1000,
                "humidity": 17,
                "temp_kf": 1.29
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.98,
                "deg": 17,
                "gust": 4.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-19 12:00:00"
        },
        {
            "dt": 1755615600,
            "main": {
                "temp": 37.64,
                "feels_like": 35.32,
                "temp_min": 37.64,
                "temp_max": 37.75,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 999,
                "humidity": 15,
                "temp_kf": -0.11
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.94,
                "deg": 299,
                "gust": 4.8
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-19 15:00:00"
        },
        {
            "dt": 1755626400,
            "main": {
                "temp": 31.44,
                "feels_like": 30.65,
                "temp_min": 31.44,
                "temp_max": 31.44,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1001,
                "humidity": 34,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 10.07,
                "deg": 27,
                "gust": 12.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-19 18:00:00"
        },
        {
            "dt": 1755637200,
            "main": {
                "temp": 28.6,
                "feels_like": 28.74,
                "temp_min": 28.6,
                "temp_max": 28.6,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1002,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.83,
                "deg": 3,
                "gust": 8.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-19 21:00:00"
        },
        {
            "dt": 1755648000,
            "main": {
                "temp": 26.72,
                "feels_like": 27.61,
                "temp_min": 26.72,
                "temp_max": 26.72,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1002,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 6.11,
                "deg": 359,
                "gust": 8.05
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-20 00:00:00"
        },
        {
            "dt": 1755658800,
            "main": {
                "temp": 26.35,
                "feels_like": 26.35,
                "temp_min": 26.35,
                "temp_max": 26.35,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1002,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.16,
                "deg": 357,
                "gust": 7.05
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-20 03:00:00"
        },
        {
            "dt": 1755669600,
            "main": {
                "temp": 28.05,
                "feels_like": 28.69,
                "temp_min": 28.05,
                "temp_max": 28.05,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1003,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.39,
                "deg": 9,
                "gust": 5.12
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-20 06:00:00"
        },
        {
            "dt": 1755680400,
            "main": {
                "temp": 33.28,
                "feels_like": 32.2,
                "temp_min": 33.28,
                "temp_max": 33.28,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1002,
                "humidity": 29,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.36,
                "deg": 352,
                "gust": 3.62
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-20 09:00:00"
        },
        {
            "dt": 1755691200,
            "main": {
                "temp": 37.59,
                "feels_like": 35.75,
                "temp_min": 37.59,
                "temp_max": 37.59,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1000,
                "humidity": 18,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.78,
                "deg": 308,
                "gust": 4.26
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-20 12:00:00"
        },
        {
            "dt": 1755702000,
            "main": {
                "temp": 37.97,
                "feels_like": 36.21,
                "temp_min": 37.97,
                "temp_max": 37.97,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 999,
                "humidity": 18,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.67,
                "deg": 327,
                "gust": 5.99
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-20 15:00:00"
        },
        {
            "dt": 1755712800,
            "main": {
                "temp": 30.78,
                "feels_like": 30.63,
                "temp_min": 30.78,
                "temp_max": 30.78,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1002,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 8.4,
                "deg": 343,
                "gust": 9.59
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-20 18:00:00"
        },
        {
            "dt": 1755723600,
            "main": {
                "temp": 27.79,
                "feels_like": 28.75,
                "temp_min": 27.79,
                "temp_max": 27.79,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1003,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.69,
                "deg": 350,
                "gust": 8.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-20 21:00:00"
        },
        {
            "dt": 1755734400,
            "main": {
                "temp": 26.51,
                "feels_like": 26.51,
                "temp_min": 26.51,
                "temp_max": 26.51,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1003,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.26,
                "deg": 346,
                "gust": 6.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-21 00:00:00"
        },
        {
            "dt": 1755745200,
            "main": {
                "temp": 25.71,
                "feels_like": 26.03,
                "temp_min": 25.71,
                "temp_max": 25.71,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1003,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.78,
                "deg": 336,
                "gust": 5.73
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-21 03:00:00"
        },
        {
            "dt": 1755756000,
            "main": {
                "temp": 27.7,
                "feels_like": 28.64,
                "temp_min": 27.7,
                "temp_max": 27.7,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1003,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.07,
                "deg": 342,
                "gust": 5.42
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-21 06:00:00"
        },
        {
            "dt": 1755766800,
            "main": {
                "temp": 33.24,
                "feels_like": 32.45,
                "temp_min": 33.24,
                "temp_max": 33.24,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1002,
                "humidity": 31,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.69,
                "deg": 325,
                "gust": 4.6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-21 09:00:00"
        },
        {
            "dt": 1755777600,
            "main": {
                "temp": 37.68,
                "feels_like": 36.05,
                "temp_min": 37.68,
                "temp_max": 37.68,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1000,
                "humidity": 19,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.74,
                "deg": 309,
                "gust": 4.72
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-21 12:00:00"
        },
        {
            "dt": 1755788400,
            "main": {
                "temp": 38.09,
                "feels_like": 36.56,
                "temp_min": 38.09,
                "temp_max": 38.09,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 999,
                "humidity": 19,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.84,
                "deg": 322,
                "gust": 6.11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-21 15:00:00"
        },
        {
            "dt": 1755799200,
            "main": {
                "temp": 31.08,
                "feels_like": 31.02,
                "temp_min": 31.08,
                "temp_max": 31.08,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1003,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.51,
                "deg": 344,
                "gust": 8.64
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-21 18:00:00"
        },
        {
            "dt": 1755810000,
            "main": {
                "temp": 27.68,
                "feels_like": 28.8,
                "temp_min": 27.68,
                "temp_max": 27.68,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1003,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 5.51,
                "deg": 341,
                "gust": 6.85
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-21 21:00:00"
        },
        {
            "dt": 1755820800,
            "main": {
                "temp": 26,
                "feels_like": 26,
                "temp_min": 26,
                "temp_max": 26,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1002,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 4.47,
                "deg": 343,
                "gust": 6.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-22 00:00:00"
        },
        {
            "dt": 1755831600,
            "main": {
                "temp": 24.91,
                "feels_like": 25.39,
                "temp_min": 24.91,
                "temp_max": 24.91,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1003,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 63
            },
            "wind": {
                "speed": 3.68,
                "deg": 340,
                "gust": 5.02
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-22 03:00:00"
        },
        {
            "dt": 1755842400,
            "main": {
                "temp": 26.97,
                "feels_like": 28.26,
                "temp_min": 26.97,
                "temp_max": 26.97,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 1003,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 3.9,
                "deg": 347,
                "gust": 4.86
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-22 06:00:00"
        },
        {
            "dt": 1755853200,
            "main": {
                "temp": 33.17,
                "feels_like": 32.86,
                "temp_min": 33.17,
                "temp_max": 33.17,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 1002,
                "humidity": 34,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 3.13,
                "deg": 352,
                "gust": 4.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-22 09:00:00"
        },
        {
            "dt": 1755864000,
            "main": {
                "temp": 38.14,
                "feels_like": 37.07,
                "temp_min": 38.14,
                "temp_max": 38.14,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 999,
                "humidity": 21,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 2.57,
                "deg": 13,
                "gust": 4.55
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-22 12:00:00"
        },
        {
            "dt": 1755874800,
            "main": {
                "temp": 39.89,
                "feels_like": 38.64,
                "temp_min": 39.89,
                "temp_max": 39.89,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 998,
                "humidity": 18,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.75,
                "deg": 357,
                "gust": 5.78
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-22 15:00:00"
        },
        {
            "dt": 1755885600,
            "main": {
                "temp": 32.07,
                "feels_like": 31.56,
                "temp_min": 32.07,
                "temp_max": 32.07,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1001,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 8.15,
                "deg": 359,
                "gust": 9.64
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-22 18:00:00"
        },
        {
            "dt": 1755896400,
            "main": {
                "temp": 28.35,
                "feels_like": 29.38,
                "temp_min": 28.35,
                "temp_max": 28.35,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1002,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.85,
                "deg": 0,
                "gust": 7.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-22 21:00:00"
        },
        {
            "dt": 1755907200,
            "main": {
                "temp": 26.59,
                "feels_like": 26.59,
                "temp_min": 26.59,
                "temp_max": 26.59,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1001,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.3,
                "deg": 359,
                "gust": 5.75
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-23 00:00:00"
        },
        {
            "dt": 1755918000,
            "main": {
                "temp": 25.75,
                "feels_like": 26.18,
                "temp_min": 25.75,
                "temp_max": 25.75,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1001,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.68,
                "deg": 5,
                "gust": 4.97
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-23 03:00:00"
        },
        {
            "dt": 1755928800,
            "main": {
                "temp": 27.99,
                "feels_like": 29.01,
                "temp_min": 27.99,
                "temp_max": 27.99,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1002,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.46,
                "deg": 5,
                "gust": 4.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-23 06:00:00"
        },
        {
            "dt": 1755939600,
            "main": {
                "temp": 34.35,
                "feels_like": 33.58,
                "temp_min": 34.35,
                "temp_max": 34.35,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1001,
                "humidity": 29,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.93,
                "deg": 10,
                "gust": 3.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-23 09:00:00"
        },
        {
            "dt": 1755950400,
            "main": {
                "temp": 38.87,
                "feels_like": 36.89,
                "temp_min": 38.87,
                "temp_max": 38.87,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 999,
                "humidity": 16,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.45,
                "deg": 14,
                "gust": 3.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-23 12:00:00"
        },
        {
            "dt": 1755961200,
            "main": {
                "temp": 40.99,
                "feels_like": 38.42,
                "temp_min": 40.99,
                "temp_max": 40.99,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 997,
                "humidity": 12,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.5,
                "deg": 335,
                "gust": 5.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-23 15:00:00"
        },
        {
            "dt": 1755972000,
            "main": {
                "temp": 33.73,
                "feels_like": 32.2,
                "temp_min": 33.73,
                "temp_max": 33.73,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1001,
                "humidity": 25,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.29,
                "deg": 7,
                "gust": 9.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-23 18:00:00"
        },
        {
            "dt": 1755982800,
            "main": {
                "temp": 29.69,
                "feels_like": 29.45,
                "temp_min": 29.69,
                "temp_max": 29.69,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1001,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.65,
                "deg": 10,
                "gust": 5.55
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-23 21:00:00"
        },
        {
            "dt": 1755993600,
            "main": {
                "temp": 27.61,
                "feels_like": 28.18,
                "temp_min": 27.61,
                "temp_max": 27.61,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1000,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 3.49,
                "deg": 2,
                "gust": 4.54
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-24 00:00:00"
        },
        {
            "dt": 1756004400,
            "main": {
                "temp": 26.38,
                "feels_like": 26.38,
                "temp_min": 26.38,
                "temp_max": 26.38,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1001,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 2.95,
                "deg": 354,
                "gust": 3.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-08-24 03:00:00"
        },
        {
            "dt": 1756015200,
            "main": {
                "temp": 28.2,
                "feels_like": 29.52,
                "temp_min": 28.2,
                "temp_max": 28.2,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1002,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 2.73,
                "deg": 343,
                "gust": 3.26
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-08-24 06:00:00"
        }
    ],
    "city": {
        "id": 360630,
        "name": "Cairo",
        "coord": {
            "lat": 30.0626,
            "lon": 31.2497
        },
        "country": "EG",
        "population": 7734614,
        "timezone": 10800,
        "sunrise": 1755573884,
        "sunset": 1755621172
    }
});

  const fetchWeather = async () => {
    console.log(import.meta.env.VITE_API_KEY);
    setLoading(true);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
    );
    const data = await response.json();
    if (!response.ok) {
      setLoading(false);
      alert('Error fetching weather data:');
      return;
    }
    setWeather(data);

    console.log('Weather data:', data);

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
    );
    const forecastData = await forecastResponse.json();
    if (!forecastResponse.ok) {
      console.error('Error fetching forecast data:', forecastData);
      setLoading(false);
      return;
    }
    setForecast(forecastData);
    console.log('Forecast data:', forecastData);
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) {
      alert("Please enter a location");
      return;
    }
    fetchWeather();
  };

  // Function to get the next three days' names
  const getNextThreeDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 1; i <= 3; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      const dayName = nextDay.toLocaleDateString('en-US', { weekday: 'short' });
      days.push(dayName);
    }
    
    return days;
  };

  const nextDays = getNextThreeDays();
  console.log('Next three days:', nextDays);

  return (
    <div className="h-screen bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center">
      <div className="bg-gradient-to-b from-cyan-500 to-blue-500 px-10 py-5 rounded-lg shadow-lg flex flex-col justify-center items-center">
        {/* search bar*/}
        <div className="w-full  mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-6 py-3 rounded-3xl border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="ml-4 px-3 py-3 bg-white text-gray-700 rounded-full shadow hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#525f7f"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </button>
        </div>

        {/* weather status icon */}
        {loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            <div className="w-full flex justify-center items-center mt-5">
              {weather.weather[0].main === "Clear" && (
                <img src="/sun.png" alt="sunny" className="w-48 h-48" />
              )}
              {weather.weather[0].main === "Clouds" && (
                <img src="/cloud.png" alt="cloudy" className="w-48 h-48" />
              )}
              {weather.weather[0].main === "Rain" && (
                <img src="/rain.png" alt="rainy" className="w-48 h-48" />
              )}
            </div>

            {/** weather status text */}
            <div className="w-full flex justify-center items-center mt-2">
              <p className="text-white text-2xl">
                {weather.weather[0].description}, {weather.main.temp}°C
              </p>
            </div>

            {/** location text */}
            <div className="w-full flex justify-center items-center mt-2">
              <p className="text-white text-xl">
                {weather.name}, {weather.sys.country}
              </p>
            </div>

            {/** forecast 3 days  */}

            <div className="w-full flex justify-between items-center mt-5">
              <div className="flex flex-col items-center">
                <p className="text-white">{nextDays[0]}</p>
                {forecast.list[0].weather[0].main === "Clear" && (
                  <img src="/sun.png" alt="sunny" className="w-12 h-12" />
                )}
                {forecast.list[0].weather[0].main === "Clouds" && (
                  <img src="/cloud.png" alt="cloudy" className="w-12 h-12" />
                )}
              {forecast.list[0].weather[0].main === "Rain" && (
                <img src="/rain.png" alt="rainy" className="w-12 h-12" />
              )}
                <p className="text-white">{forecast.list[0].main.temp}°C</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-white">{nextDays[1]}</p>
                {forecast.list[1].weather[0].main === "Clear" && (
                  <img src="/sun.png" alt="sunny" className="w-12 h-12" />
                )}
                {forecast.list[1].weather[0].main === "Clouds" && (
                  <img src="/cloud.png" alt="cloudy" className="w-12 h-12" />
                )}
                {forecast.list[1].weather[0].main === "Rain" && (
                  <img src="/rain.png" alt="rainy" className="w-12 h-12" />
                )}
                <p className="text-white">{forecast.list[1].main.temp}°C</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-white">{nextDays[2]}</p>
                {forecast.list[2].weather[0].main === "Clear" && (
                  <img src="/sun.png" alt="sunny" className="w-12 h-12" />
                )}
                {forecast.list[2].weather[0].main === "Clouds" && (
                  <img src="/cloud.png" alt="cloudy" className="w-12 h-12" />
                )}
                {forecast.list[2].weather[0].main === "Rain" && (
                  <img src="/rain.png" alt="rainy" className="w-12 h-12" />
                )}
                <p className="text-white">{forecast.list[2].main.temp}°C</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
