
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExerciseCard from "@/components/ExerciseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const vocabularyExercises = [
  {
    id: 1,
    title: "Common Everyday Phrases",
    description: "Learn phrases used in daily conversations with native speakers.",
    category: "Vocabulary",
    difficulty: "beginner",
    wordCount: 25,
    isCompleted: true,
  },
  {
    id: 2,
    title: "Business English Expressions",
    description: "Professional vocabulary for workplace communication.",
    category: "Vocabulary",
    difficulty: "intermediate",
    wordCount: 30,
    isCompleted: false,
  },
  {
    id: 3,
    title: "Idioms and Slang",
    description: "Common informal expressions used by native speakers.",
    category: "Vocabulary",
    difficulty: "intermediate",
    wordCount: 20,
    isCompleted: false,
  },
  {
    id: 4,
    title: "Academic Vocabulary",
    description: "Words and phrases commonly used in academic settings.",
    category: "Vocabulary",
    difficulty: "advanced",
    wordCount: 35,
    isCompleted: false,
  },
];

const pronunciationExercises = [
  {
    id: 5,
    title: "Vowel Sounds Practice",
    description: "Master the pronunciation of English vowel sounds.",
    category: "Pronunciation",
    difficulty: "beginner",
    wordCount: 15,
    isCompleted: true,
  },
  {
    id: 6,
    title: "Consonant Clusters",
    description: "Practice difficult consonant combinations in English.",
    category: "Pronunciation",
    difficulty: "intermediate",
    wordCount: 18,
    isCompleted: false,
  },
  {
    id: 7,
    title: "Intonation Patterns",
    description: "Learn the natural rhythm and melody of English speech.",
    category: "Pronunciation",
    difficulty: "intermediate",
    wordCount: 12,
    isCompleted: false,
  },
  {
    id: 8,
    title: "Difficult Sounds for Non-Natives",
    description: "Focus on sounds that are challenging for most English learners.",
    category: "Pronunciation",
    difficulty: "advanced",
    wordCount: 22,
    isCompleted: false,
  },
];

const Vocabulary = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const filterExercises = (exercises) => {
    if (!searchQuery.trim()) return exercises;
    const query = searchQuery.toLowerCase();
    return exercises.filter(
      exercise => 
        exercise.title.toLowerCase().includes(query) || 
        exercise.description.toLowerCase().includes(query) ||
        exercise.category.toLowerCase().includes(query) ||
        exercise.difficulty.toLowerCase().includes(query)
    );
  };
  
  const handleExerciseClick = (id) => {
    // In a real app, navigate to the specific exercise
    navigate("/practice");
  };

  const filteredVocabulary = filterExercises(vocabularyExercises);
  const filteredPronunciation = filterExercises(pronunciationExercises);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Vocabulary & Pronunciation</h1>
            <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Enhance your English skills with focused exercises on vocabulary and pronunciation
            </p>
          </div>
          
          <div className="relative mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10 rounded-full bg-accent/50"
              placeholder="Search exercises..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="all" className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Exercises</TabsTrigger>
              <TabsTrigger value="vocabulary">Vocabulary</TabsTrigger>
              <TabsTrigger value="pronunciation">Pronunciation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {filterExercises([...vocabularyExercises, ...pronunciationExercises]).map(exercise => (
                  <ExerciseCard
                    key={exercise.id}
                    title={exercise.title}
                    description={exercise.description}
                    category={exercise.category}
                    difficulty={exercise.difficulty}
                    wordCount={exercise.wordCount}
                    isCompleted={exercise.isCompleted}
                    onClick={() => handleExerciseClick(exercise.id)}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="vocabulary" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredVocabulary.map(exercise => (
                  <ExerciseCard
                    key={exercise.id}
                    title={exercise.title}
                    description={exercise.description}
                    category={exercise.category}
                    difficulty={exercise.difficulty}
                    wordCount={exercise.wordCount}
                    isCompleted={exercise.isCompleted}
                    onClick={() => handleExerciseClick(exercise.id)}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="pronunciation" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPronunciation.map(exercise => (
                  <ExerciseCard
                    key={exercise.id}
                    title={exercise.title}
                    description={exercise.description}
                    category={exercise.category}
                    difficulty={exercise.difficulty}
                    wordCount={exercise.wordCount}
                    isCompleted={exercise.isCompleted}
                    onClick={() => handleExerciseClick(exercise.id)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vocabulary;
