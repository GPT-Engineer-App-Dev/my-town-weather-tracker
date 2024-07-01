import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function WeatherCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Weather</CardTitle>
        <CardDescription>Town Name</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>Temperature: 25°C</div>
        <div>Condition: Sunny</div>
        <div>Humidity: 60%</div>
        <div>Wind Speed: 10 km/h</div>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;