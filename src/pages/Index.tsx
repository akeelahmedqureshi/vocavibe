
import React from "react";
import { Link } from "react-router-dom";
import { Motion, Mic, BookOpen, BarChart3, ChevronRight, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Real-time Pronunciation Feedback",
    description: "Get instant AI-powered feedback on your pronunciation, with specific corrections and suggestions.",
    icon: <Mic className="h-5 w-5" />,
  },
  {
    title: "Vocabulary Expansion",
    description: "Enhance your vocabulary with contextual learning and spaced repetition techniques.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Detailed Progress Tracking",
    description: "Monitor your improvement over time with comprehensive analytics and progress charts.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
  {
    title: "Native Speaker Patterns",
    description: "Learn natural speech patterns and colloquialisms used by native English speakers.",
    icon: <Users className="h-5 w-5" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6 animate-fade-in">
                AI-Powered English Practice
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Perfect Your English Pronunciation
                <span className="text-gradient"> with AI</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Enhance your speaking skills with personalized feedback and adaptive exercises designed to help you sound more natural.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/practice">Start Practicing <ChevronRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/vocabulary">Explore Vocabulary</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-2xl blur opacity-30 animate-pulse-light"></div>
                <div className="glass-card p-6 relative">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                      <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-muted-foreground">Speaking Practice</div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-accent/50 rounded-lg">
                      <h3 className="font-medium mb-2">Practice Phrase</h3>
                      <p className="text-foreground/90">"The beautiful mountains in the distance seemed to be calling to me."</p>
                    </div>
                    <div className="p-4 bg-accent/50 rounded-lg">
                      <h3 className="font-medium mb-2">AI Feedback</h3>
                      <div className="flex items-start gap-2 mb-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <p className="text-foreground/90">Great pronunciation of "mountains" and "distance"</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full border-2 border-yellow-500 flex items-center justify-center mt-0.5">
                          <span className="text-yellow-500 text-xs font-bold">!</span>
                        </div>
                        <p className="text-foreground/90">Try slowing down when saying "beautiful" for clearer pronunciation</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Button size="sm" className="rounded-full">Try Again</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex justify-center -mt-6">
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <Motion className="h-4 w-4 animate-spin-slow" />
                  <span className="text-sm font-medium">AI-powered analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive tools to help you speak English naturally and confidently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-6 hover-scale">
                <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-purple-500/50 rounded-2xl blur-xl opacity-30"></div>
            <Card className="glass-card overflow-hidden relative">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-3/5 p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Perfect Your English?</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Start practicing now and receive instant AI feedback on your pronunciation and speech patterns.
                  </p>
                  <Button asChild size="lg" className="rounded-full">
                    <Link to="/practice">Start Practicing <ChevronRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                </div>
                <div className="hidden lg:block lg:w-2/5 bg-gradient-to-br from-primary/20 to-purple-500/20">
                  <div className="h-full flex items-center justify-center">
                    <div className="relative">
                      <Motion className="h-32 w-32 text-primary/20 animate-spin-slow absolute -inset-4 blur-sm" />
                      <Motion className="h-24 w-24 text-primary/90 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
