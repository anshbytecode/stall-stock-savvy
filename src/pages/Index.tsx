import { MetricCard } from "@/components/MetricCard";
import { SalesChart } from "@/components/SalesChart";
import { InventoryTable } from "@/components/InventoryTable";
import { SalesInputForm } from "@/components/SalesInputForm";
import { TopItemsChart } from "@/components/TopItemsChart";
import { TrendingUp, Package, AlertTriangle, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Smart Stall Stock Tracker
          </h1>
          <p className="text-muted-foreground text-lg">
            Intelligent inventory management for your business
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Revenue"
            value="$2,847"
            change="+12.3% from yesterday"
            changeType="positive"
            icon={DollarSign}
          />
          <MetricCard
            title="Items Sold"
            value="348"
            change="+8.1% from yesterday"
            changeType="positive"
            icon={TrendingUp}
          />
          <MetricCard
            title="Stock Items"
            value="24"
            change="3 items need reordering"
            changeType="neutral"
            icon={Package}
          />
          <MetricCard
            title="Low Stock Alerts"
            value="3"
            change="2 critical items"
            changeType="negative"
            icon={AlertTriangle}
          />
        </div>

        {/* Charts and Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div className="space-y-6">
            <SalesInputForm />
            <TopItemsChart />
          </div>
        </div>

        {/* Inventory Table */}
        <InventoryTable />
      </div>
    </div>
  );
};

export default Index;
