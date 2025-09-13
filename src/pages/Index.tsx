import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { CodeEditor } from "@/components/CodeEditor";
import { AIAnalysis } from "@/components/AIAnalysis";
import { TutorialSection } from "@/components/TutorialSection";
import { ExerciseGenerator } from "@/components/ExerciseGenerator";
import { Code, Brain, BookOpen, Dumbbell, Play, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-coding.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("editor");

  const features = [
    {
      icon: Code,
      title: "Smart Code Editor",
      description: "Write, run, and debug code with intelligent syntax highlighting and real-time error detection."
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Get instant code reviews, suggestions, and explanations from our advanced AI system."
    },
    {
      icon: BookOpen,
      title: "Interactive Tutorials",
      description: "Learn programming concepts through hands-on tutorials with step-by-step guidance."
    },
    {
      icon: Dumbbell,
      title: "Coding Exercises",
      description: "Practice your skills with auto-generated exercises tailored to your skill level."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Master Programming with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered Learning
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Accelerate your coding journey with intelligent code analysis, interactive tutorials, 
              and personalized learning experiences powered by advanced AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="gap-2 animate-pulse-glow">
                <Play className="w-5 h-5" />
                Start Learning Now
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Users className="w-5 h-5" />
                Join 50K+ Learners
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Learn Coding</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform combines cutting-edge AI with proven educational methodologies 
              to help you become a better programmer faster.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm hover:shadow-elevated transition-all duration-300 animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Application */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Start Your Coding Journey</h2>
            <p className="text-muted-foreground">
              Choose your learning path and begin coding with AI-powered assistance
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="editor" className="gap-2">
                <Code className="w-4 h-4" />
                Code Editor
              </TabsTrigger>
              <TabsTrigger value="analysis" className="gap-2">
                <Brain className="w-4 h-4" />
                AI Analysis
              </TabsTrigger>
              <TabsTrigger value="tutorials" className="gap-2">
                <BookOpen className="w-4 h-4" />
                Tutorials
              </TabsTrigger>
              <TabsTrigger value="exercises" className="gap-2">
                <Dumbbell className="w-4 h-4" />
                Exercises
              </TabsTrigger>
            </TabsList>

            <TabsContent value="editor" className="space-y-6">
              <CodeEditor />
            </TabsContent>

            <TabsContent value="analysis" className="space-y-6">
              <AIAnalysis />
            </TabsContent>

            <TabsContent value="tutorials" className="space-y-6">
              <TutorialSection />
            </TabsContent>

            <TabsContent value="exercises" className="space-y-6">
              <ExerciseGenerator />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-background/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center text-primary-foreground">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-foreground/80">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-primary-foreground/80">Code Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Tutorials</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Coding Skills?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already learning faster and coding better with AI assistance.
          </p>
          <Button variant="hero" size="lg" className="gap-2">
            <Zap className="w-5 h-5" />
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;