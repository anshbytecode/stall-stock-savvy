import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useState } from "react";

export const SalesInputForm = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const items = ["Tomatoes", "Onions", "Potatoes", "Carrots", "Peppers", "Cucumbers"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Sale recorded:", { item: selectedItem, quantity });
    setSelectedItem("");
    setQuantity("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Record Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="item">Item</Label>
            <Select value={selectedItem} onValueChange={setSelectedItem}>
              <SelectTrigger>
                <SelectValue placeholder="Select an item" />
              </SelectTrigger>
              <SelectContent>
                {items.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity Sold</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="0"
              step="1"
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={!selectedItem || !quantity}>
            <Plus className="h-4 w-4 mr-2" />
            Record Sale
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};