
import React, { useState, useEffect, useRef } from "react";
import { Mic, Square, Play, Volume2, RefreshCw, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type FeedbackType = {
  accuracy: number;
  pronunciation: number;
  fluency: number;
  corrections?: { word: string; suggestion: string }[];
  overall: string;
};

const sampleExercises = [
  {
    id: 1,
    text: "The quick brown fox jumps over the lazy dog.",
    difficulty: "beginner",
  },
  {
    id: 2,
    text: "She sells seashells by the seashore.",
    difficulty: "beginner",
  },
  {
    id: 3,
    text: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    difficulty: "intermediate",
  },
  {
    id: 4,
    text: "Peter Piper picked a peck of pickled peppers.",
    difficulty: "intermediate",
  },
  {
    id: 5,
    text: "I scream, you scream, we all scream for ice cream.",
    difficulty: "beginner",
  },
];

const simulateFeedback = (): FeedbackType => {
  const accuracy = Math.random() * 40 + 60; // 60-100
  const pronunciation = Math.random() * 40 + 60; // 60-100
  const fluency = Math.random() * 40 + 60; // 60-100
  
  const corrections = Math.random() > 0.3 ? [
    { word: sampleExercises[0].text.split(" ")[Math.floor(Math.random() * 5)], suggestion: "better word" },
  ] : [];
  
  const feedback = [
    "Great job! Your pronunciation is improving.",
    "You're doing well! Focus on the rhythm of your speech.",
    "Nice attempt! Try to slow down a bit for clearer pronunciation.",
    "Good effort! Pay attention to the stressed syllables.",
    "Well done! Your intonation is getting better."
  ];
  
  return {
    accuracy,
    pronunciation,
    fluency,
    corrections,
    overall: feedback[Math.floor(Math.random() * feedback.length)]
  };
};

const SpeechPractice = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [exercise, setExercise] = useState(sampleExercises[0]);
  const [feedback, setFeedback] = useState<FeedbackType | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    setFeedback(null);
    setAudioUrl(null);
    // In a real app, you would start actual recording here
    console.log("Started recording");
  };

  const stopRecording = () => {
    setIsRecording(false);
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setFeedback(simulateFeedback());
      // In a real implementation, this would be the actual recording
      setAudioUrl("https://audio-samples.github.io/samples/mp3/blizzard_biased/sample-0.mp3");
    }, 2000);
  };

  const getNextExercise = () => {
    const randomIndex = Math.floor(Math.random() * sampleExercises.length);
    setExercise(sampleExercises[randomIndex]);
    setFeedback(null);
    setAudioUrl(null);
  };

  const playAudio = () => {
    if (audioRef.current && audioUrl) {
      audioRef.current.play();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="mb-12 text-center">
        <div className="inline-block px-4 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-4 animate-fade-in">
          Practice Your Pronunciation
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Speak Naturally with AI Feedback
        </h1>
        <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Record yourself speaking the phrase below and get instant feedback
        </p>
      </div>

      <Card className="glass-card p-6 mb-8 animate-scale-in">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-2">Practice Phrase</h2>
          <p className="text-2xl font-medium p-4 border border-border rounded-lg bg-accent/50">
            {exercise.text}
          </p>
        </div>

        <div className="flex justify-center mb-6">
          {isRecording ? (
            <Button
              variant="outline"
              size="lg"
              onClick={toggleRecording}
              className="rounded-full h-16 w-16 flex items-center justify-center border-red-500 text-red-500 animate-pulse-light"
            >
              <Square className="h-6 w-6" />
            </Button>
          ) : (
            <Button
              onClick={toggleRecording}
              size="lg"
              className="rounded-full h-16 w-16 flex items-center justify-center bg-primary hover:bg-primary/90"
              disabled={isProcessing}
            >
              <Mic className="h-6 w-6" />
            </Button>
          )}
        </div>

        {isRecording && (
          <div className="flex justify-center items-center gap-2 text-red-500 animate-pulse-light">
            <span className="h-2 w-2 bg-red-500 rounded-full"></span>
            Recording...
          </div>
        )}

        {isProcessing && (
          <div className="text-center">
            <RefreshCw className="h-6 w-6 mx-auto animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">Analyzing your speech...</p>
          </div>
        )}

        {audioUrl && (
          <div className="mt-4 flex justify-center">
            <audio ref={audioRef} src={audioUrl} className="hidden" />
            <Button variant="outline" size="sm" onClick={playAudio} className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              <span>Play Recording</span>
            </Button>
          </div>
        )}
      </Card>

      {feedback && (
        <Card className="glass-card p-6 mb-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Feedback</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-accent/50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Accuracy</span>
                <span className="text-sm font-bold">{Math.round(feedback.accuracy)}%</span>
              </div>
              <Progress value={feedback.accuracy} className="h-2" />
            </div>
            
            <div className="p-4 bg-accent/50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Pronunciation</span>
                <span className="text-sm font-bold">{Math.round(feedback.pronunciation)}%</span>
              </div>
              <Progress value={feedback.pronunciation} className="h-2" />
            </div>
            
            <div className="p-4 bg-accent/50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Fluency</span>
                <span className="text-sm font-bold">{Math.round(feedback.fluency)}%</span>
              </div>
              <Progress value={feedback.fluency} className="h-2" />
            </div>
          </div>
          
          <div className="p-4 bg-accent/50 rounded-lg mb-6">
            <h3 className="font-medium mb-2">Overall Feedback</h3>
            <p className="text-foreground/90">{feedback.overall}</p>
          </div>
          
          {feedback.corrections && feedback.corrections.length > 0 && (
            <div className="p-4 bg-accent/50 rounded-lg mb-6">
              <h3 className="font-medium mb-2">Suggested Improvements</h3>
              <ul className="space-y-2">
                {feedback.corrections.map((correction, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="line-through">{correction.word}</p>
                      <p className="text-green-600 font-medium">{correction.suggestion}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex justify-center">
            <Button onClick={getNextExercise} className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              <span>Try Another Phrase</span>
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SpeechPractice;
