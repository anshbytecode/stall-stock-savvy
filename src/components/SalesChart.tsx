import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { date: "Mon", sales: 65, prediction: 70 },
  { date: "Tue", sales: 78, prediction: 75 },
  { date: "Wed", sales: 82, prediction: 80 },
  { date: "Thu", sales: 74, prediction: 85 },
  { date: "Fri", sales: 95, prediction: 90 },
  { date: "Sat", sales: 108, prediction: 100 },
  { date: "Sun", sales: 88, prediction: 95 },
];

export const SalesChart = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Sales Trends & Predictions</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="hsl(var(--chart-primary))" 
              strokeWidth={2}
              dot={{ fill: "hsl(var(--chart-primary))", strokeWidth: 2, r: 4 }}
              name="Actual Sales"
            />
            <Line 
              type="monotone" 
              dataKey="prediction" 
              stroke="hsl(var(--chart-secondary))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: "hsl(var(--chart-secondary))", strokeWidth: 2, r: 4 }}
              name="Predicted Sales"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};