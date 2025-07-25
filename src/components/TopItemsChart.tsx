import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const topItemsData = [
  { name: "Tomatoes", sales: 95, revenue: 285 },
  { name: "Potatoes", sales: 88, revenue: 176 },
  { name: "Onions", sales: 75, revenue: 225 },
  { name: "Carrots", sales: 65, revenue: 195 },
  { name: "Peppers", sales: 45, revenue: 180 },
];

export const TopItemsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Selling Items</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={topItemsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={60}
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
            <Bar 
              dataKey="sales" 
              fill="hsl(var(--chart-primary))" 
              radius={[4, 4, 0, 0]}
              name="Units Sold"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};