import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ForecastCard() {
  const forecastData = [
    { day: "Monday", condition: "Sunny", temperature: "25°C" },
    { day: "Tuesday", condition: "Cloudy", temperature: "22°C" },
    { day: "Wednesday", condition: "Rainy", temperature: "20°C" },
    { day: "Thursday", condition: "Stormy", temperature: "18°C" },
    { day: "Friday", condition: "Sunny", temperature: "26°C" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>5-Day Forecast</CardTitle>
        <CardDescription>Town Name</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {forecastData.map((day, index) => (
          <div key={index} className="flex justify-between">
            <span>{day.day}</span>
            <span>{day.condition}</span>
            <span>{day.temperature}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default ForecastCard;