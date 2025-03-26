
import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, TrendingUp, Clock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

type ProgressCardProps = {
  title: string;
  value: number;
  total?: number;
  subtitle: string;
  icon: "chart" | "trending" | "time" | "award";
  className?: string;
};

const ProgressCard = ({ title, value, total = 100, subtitle, icon, className }: ProgressCardProps) => {
  const percentage = Math.round((value / total) * 100);
  
  const getIcon = () => {
    switch (icon) {
      case "chart":
        return <BarChart className="h-5 w-5" />;
      case "trending":
        return <TrendingUp className="h-5 w-5" />;
      case "time":
        return <Clock className="h-5 w-5" />;
      case "award":
        return <Award className="h-5 w-5" />;
      default:
        return <BarChart className="h-5 w-5" />;
    }
  };

  return (
    <Card className={cn("glass-card p-5 overflow-hidden transition-all duration-300 hover:shadow-md", className)}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        </div>
        <div className="p-2 rounded-full bg-primary/10 text-primary">
          {getIcon()}
        </div>
      </div>
      
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-2xl font-bold">{value}</span>
        {total !== 100 && <span className="text-muted-foreground text-sm">/ {total}</span>}
      </div>
      
      <div className="flex items-center gap-3">
        <Progress value={percentage} className="h-2 flex-grow" />
        <span className="text-sm font-medium whitespace-nowrap">{percentage}%</span>
      </div>
    </Card>
  );
};

export default ProgressCard;
