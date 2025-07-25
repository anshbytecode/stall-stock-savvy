import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

const inventoryData = [
  {
    item: "Tomatoes",
    current: 45,
    suggested: 60,
    status: "low",
    trend: "up",
    dailyUsage: 15
  },
  {
    item: "Onions", 
    current: 80,
    suggested: 75,
    status: "optimal",
    trend: "stable",
    dailyUsage: 12
  },
  {
    item: "Potatoes",
    current: 120,
    suggested: 90,
    status: "excess",
    trend: "down", 
    dailyUsage: 18
  },
  {
    item: "Carrots",
    current: 25,
    suggested: 50,
    status: "critical",
    trend: "up",
    dailyUsage: 8
  }
];

export const InventoryTable = () => {
  const getStatusBadge = (status: string) => {
    const variants = {
      critical: "destructive",
      low: "warning", 
      optimal: "success",
      excess: "secondary"
    } as const;
    
    return <Badge variant={variants[status as keyof typeof variants] || "secondary"}>{status}</Badge>;
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-success" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-destructive" />;
    return <div className="h-4 w-4" />;
  };

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Inventory Status & Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inventoryData.map((item) => (
            <div key={item.item} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-medium">{item.item}</h4>
                  <p className="text-sm text-muted-foreground">Daily usage: {item.dailyUsage} units</p>
                </div>
                {getTrendIcon(item.trend)}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">Current: {item.current}</p>
                  <p className="text-sm text-muted-foreground">Suggested: {item.suggested}</p>
                </div>
                {getStatusBadge(item.status)}
                {item.status === "critical" || item.status === "low" ? (
                  <Button size="sm" className="bg-primary">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Reorder
                  </Button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};