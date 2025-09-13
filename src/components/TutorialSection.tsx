import { useState } from "react";
import { ChevronRight, Play, CheckCircle, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const tutorials = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Learn the basics of JavaScript including variables, functions, and control structures",
    duration: "30 min",
    difficulty: "Beginner",
    progress: 75,
    completed: false,
    steps: [
      { title: "Variables and Data Types", completed: true },
      { title: "Functions and Scope", completed: true },
      { title: "Control Structures", completed: true },
      { title: "Arrays and Objects", completed: false },
      { title: "Practice Exercises", completed: false }
    ]
  },
  {
    id: 2,
    title: "DOM Manipulation",
    description: "Master DOM manipulation techniques for interactive web development",
    duration: "45 min",
    difficulty: "Intermediate",
    progress: 25,
    completed: false,
    steps: [
      { title: "Selecting Elements", completed: true },
      { title: "Modifying Content", completed: false },
      { title: "Event Handling", completed: false },
      { title: "Dynamic Styling", completed: false },
      { title: "Advanced Techniques", completed: false }
    ]
  },
  {
    id: 3,
    title: "Async JavaScript",
    description: "Understanding promises, async/await, and handling asynchronous operations",
    duration: "60 min",
    difficulty: "Advanced",
    progress: 0,
    completed: false,
    steps: [
      { title: "Callbacks and Promises", completed: false },
      { title: "Async/Await Syntax", completed: false },
      { title: "Error Handling", completed: false },
      { title: "Fetch API", completed: false },
      { title: "Real-world Examples", completed: false }
    ]
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-accent text-primary-foreground";
    case "Intermediate": return "bg-primary text-primary-foreground";
    case "Advanced": return "bg-destructive text-destructive-foreground";
    default: return "bg-secondary text-secondary-foreground";
  }
};

export function TutorialSection() {
  const [selectedTutorial, setSelectedTutorial] = useState(tutorials[0]);

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Tutorial List */}
      <div className="lg:col-span-1 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Interactive Tutorials</h2>
        {tutorials.map((tutorial) => (
          <Card 
            key={tutorial.id} 
            className={`cursor-pointer transition-all duration-200 hover:shadow-elevated ${
              selectedTutorial.id === tutorial.id ? 'ring-2 ring-primary shadow-glow' : ''
            }`}
            onClick={() => setSelectedTutorial(tutorial)}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-sm">{tutorial.title}</h3>
                <Badge className={getDifficultyColor(tutorial.difficulty)}>
                  {tutorial.difficulty}
                </Badge>
              </div>
              
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                {tutorial.description}
              </p>
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {tutorial.duration}
                </div>
                <span className="text-xs font-medium">{tutorial.progress}%</span>
              </div>
              
              <Progress value={tutorial.progress} className="h-1" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tutorial Content */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  {selectedTutorial.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedTutorial.description}
                </p>
              </div>
              <Button variant="hero" className="gap-2">
                <Play className="w-4 h-4" />
                Continue Learning
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-6">
              <Badge className={getDifficultyColor(selectedTutorial.difficulty)}>
                {selectedTutorial.difficulty}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {selectedTutorial.duration}
              </div>
              <div className="flex items-center gap-1 text-sm">
                <span>Progress: {selectedTutorial.progress}%</span>
              </div>
            </div>
            
            <Progress value={selectedTutorial.progress} className="mb-6" />
          </CardContent>
        </Card>

        {/* Tutorial Steps */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Path</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedTutorial.steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                    step.completed 
                      ? 'bg-accent/10 border border-accent/20' 
                      : 'bg-secondary/50 hover:bg-secondary/80 cursor-pointer'
                  }`}
                >
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full ${
                    step.completed 
                      ? 'bg-accent text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.completed ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <span className="text-xs font-medium">{index + 1}</span>
                    )}
                  </div>
                  
                  <span className={`flex-1 ${
                    step.completed ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </span>
                  
                  {!step.completed && (
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interactive Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Try It Yourself</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-code-bg rounded-lg p-4 mb-4">
              <pre className="text-sm font-mono text-code-variable">
{`// Practice: Create a function that calculates the area of a rectangle
function calculateArea(length, width) {
  // Your code here
  
}

// Test your function
console.log(calculateArea(5, 3)); // Should output: 15`}
              </pre>
            </div>
            
            <div className="flex gap-2">
              <Button variant="accent" size="sm">
                <Play className="w-4 h-4" />
                Run Code
              </Button>
              <Button variant="outline" size="sm">
                Get Hint
              </Button>
              <Button variant="outline" size="sm">
                Show Solution
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}