import Hero from "./components/Hero";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import { WeatherAPIResponse, getWeather } from "./WeatherAPI";
import ContentSection from "./components/ContentSection";
import FormSection from "./components/FormSection";
import WeatherSection from "./components/WeatherSection";

export default function App() {
    const [location, setLocation] = useState("Berlin");
    const [data, setData] = useState<WeatherAPIResponse | undefined>(undefined);

    const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLocation(event.target.value);
        localStorage.setItem("selectedLocation", event.target.value);
    };

    useEffect(() => {
        const savedLocation = localStorage.getItem("selectedLocation");
        if (savedLocation) {
        setLocation(savedLocation);
        }
    }, []);

    useEffect(() => {
        const loadWeather = async () => {
            const weather = await getWeather(location);
            setData(weather);
        };

        loadWeather();
        const timerId = setInterval(loadWeather, 1000 * 30);
        return () => clearInterval(timerId);
    }, [location]);

  return (
    <div className="relative">
      <Header handleLocationChange={handleLocationChange} location={location} />
      <main>
        <Hero />
        <ContentSection />
        <FormSection />
        {data && <WeatherSection data={data} />}
      </main>
    </div>
  )
}
