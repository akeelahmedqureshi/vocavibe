
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgressCard from "@/components/ProgressCard";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts";

const progressData = [
  { name: "Mon", pronunciation: 65, vocabulary: 40 },
  { name: "Tue", pronunciation: 70, vocabulary: 45 },
  { name: "Wed", pronunciation: 72, vocabulary: 50 },
  { name: "Thu", pronunciation: 68, vocabulary: 55 },
  { name: "Fri", pronunciation: 75, vocabulary: 60 },
  { name: "Sat", pronunciation: 78, vocabulary: 62 },
  { name: "Sun", pronunciation: 82, vocabulary: 65 },
];

const activityData = [
  { name: "Week 1", practice: 5, exercises: 8 },
  { name: "Week 2", practice: 7, exercises: 10 },
  { name: "Week 3", practice: 6, exercises: 9 },
  { name: "Week 4", practice: 8, exercises: 12 },
];

const Progress = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Your Progress</h1>
            <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Track your improvement and see how far you've come
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <ProgressCard
              title="Pronunciation Score"
              value={82}
              subtitle="7-day average"
              icon="chart"
            />
            <ProgressCard
              title="Vocabulary Mastered"
              value={65}
              total={100}
              subtitle="Words learned"
              icon="trending"
            />
            <ProgressCard
              title="Practice Sessions"
              value={26}
              subtitle="This month"
              icon="time"
            />
            <ProgressCard
              title="Exercises Completed"
              value={39}
              total={50}
              subtitle="Progress"
              icon="award"
            />
          </div>
          
          <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-6">Weekly Performance</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={progressData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="pronunciation" 
                      name="Pronunciation Score" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2} 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="vocabulary" 
                      name="Vocabulary Score" 
                      stroke="hsl(var(--primary) / 0.5)" 
                      strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Tabs defaultValue="activity">
              <TabsList className="mb-6">
                <TabsTrigger value="activity">Activity Summary</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="activity">
                <Card className="glass-card p-6">
                  <h2 className="text-xl font-bold mb-6">Monthly Activity</h2>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={activityData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar 
                          dataKey="practice" 
                          name="Practice Sessions" 
                          fill="hsl(var(--primary))" 
                          radius={[4, 4, 0, 0]} 
                        />
                        <Bar 
                          dataKey="exercises" 
                          name="Completed Exercises" 
                          fill="hsl(var(--primary) / 0.5)" 
                          radius={[4, 4, 0, 0]} 
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="recommendations">
                <Card className="glass-card p-6">
                  <h2 className="text-xl font-bold mb-6">Personalized Recommendations</h2>
                  <div className="space-y-6">
                    <div className="p-4 bg-accent/50 rounded-lg">
                      <h3 className="font-semibold mb-2">Focus on Vowel Sounds</h3>
                      <p className="text-muted-foreground">Based on your recent practice sessions, we recommend focusing on long vowel sounds which seem to be challenging for you.</p>
                    </div>
                    <div className="p-4 bg-accent/50 rounded-lg">
                      <h3 className="font-semibold mb-2">Vocabulary Expansion</h3>
                      <p className="text-muted-foreground">Try our Business English vocabulary exercises to expand your professional language skills.</p>
                    </div>
                    <div className="p-4 bg-accent/50 rounded-lg">
                      <h3 className="font-semibold mb-2">Daily Practice Goal</h3>
                      <p className="text-muted-foreground">Consider setting a goal of at least one 10-minute practice session each day for optimal improvement.</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Progress;
