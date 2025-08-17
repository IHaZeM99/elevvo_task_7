import { useState } from "react";


function App() {
  const [loading,setLoading] = useState(false);
  const [search, setSearch] = useState("");
  // const [location, setLocation] = useState("Cairo, Egypt");
  const [weather, setWeather] = useState({
    status: "",
    temperature: 0,
  });
  const [forecast, setForecast] = useState([]);

  const fetchWeather = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.API_KEY}&units=metric`
    );
    const data = await response.json();
    setWeather({
      status: data.weather[0].description,
      temperature: data.main.temp,
    });

    const forecastResponse = await fetch(
      `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${search}&appid=${process.env.API_KEY}&units=metric`
    );
    const forecastData = await forecastResponse.json();
    setForecast(forecastData.list);
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
          <button onClick={handleSearch} className="ml-4 px-3 py-3 bg-white text-gray-700 rounded-full shadow hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
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
        <div className="w-full flex justify-center items-center mt-5">
          <img src="/sun.png" alt="sunny"  className="w-48 h-48"/>
        </div>

        {/** weather status text */}
        <div className="w-full flex justify-center items-center mt-2">
          <p className="text-white text-2xl">Sunny, 25°C</p>
        </div>

        {/** location text */}
        <div className="w-full flex justify-center items-center mt-2">
          <p className="text-white text-xl">New York, USA</p>
        </div>

        {/** forecast 3 days  */}

        <div className="w-full flex justify-between items-center mt-5">
          <div className="flex flex-col items-center">
            <p className="text-white">Mon</p>
            <img src="/sun.png" alt="sunny" className="w-12 h-12" />
            <p className="text-white">25°C</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-white">Tue</p>
            <img src="/cloud.png" alt="cloudy" className="w-12 h-12" />
            <p className="text-white">22°C</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-white">Wed</p>
            <img src="/rain.png" alt="rainy" className="w-12 h-12" />
            <p className="text-white">20°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
