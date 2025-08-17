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
  const [forecast, setForecast] = useState([]);

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

    // const forecastResponse = await fetch(
    //   `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${search}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
    // );
    // const forecastData = await forecastResponse.json();
    // if (!forecastResponse.ok) {
    //   console.error('Error fetching forecast data:', forecastData);
    //   setLoading(false);
    //   return;
    // }
    // setForecast(forecastData);
    // console.log('Forecast data:', forecastData);
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
