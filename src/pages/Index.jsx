import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";

function Index() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl text-center">Weather Tracker</h1>
      <WeatherCard />
      <ForecastCard />
    </div>
  );
}

export default Index;