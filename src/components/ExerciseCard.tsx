
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen, Star, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

type ExerciseCardProps = {
  title: string;
  description: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  wordCount: number;
  isCompleted?: boolean;
  onClick?: () => void;
  className?: string;
};

const ExerciseCard = ({
  title,
  description,
  category,
  difficulty,
  wordCount,
  isCompleted = false,
  onClick,
  className,
}: ExerciseCardProps) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getCategoryIcon = () => {
    if (category.toLowerCase().includes("vocabulary")) {
      return <BookOpen className="h-4 w-4 mr-1" />;
    } else if (category.toLowerCase().includes("pronunciation")) {
      return <Globe className="h-4 w-4 mr-1" />;
    } else {
      return <Star className="h-4 w-4 mr-1" />;
    }
  };

  return (
    <Card 
      className={cn(
        "glass-card overflow-hidden transition-all duration-300 hover:shadow-md", 
        isCompleted ? "border-l-4 border-l-green-500" : "",
        className
      )}
    >
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="outline" className="flex items-center">
            {getCategoryIcon()}
            {category}
          </Badge>
          <Badge className={cn("font-medium", getDifficultyColor())}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
          {isCompleted && (
            <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800">
              Completed
            </Badge>
          )}
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span>{wordCount} words</span>
          </div>
          
          <Button onClick={onClick} variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 -mr-2">
            <span>Practice</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ExerciseCard;
