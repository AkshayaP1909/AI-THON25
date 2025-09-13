import { useState } from "react";
import { Dumbbell, RefreshCw, Target, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const exerciseTemplates = {
  beginner: [
    {
      title: "Variable Declaration",
      description: "Create variables of different types and print their values",
      task: "Declare a string variable with your name, a number variable with your age, and a boolean variable indicating if you like coding. Print all three variables.",
      solution: `let name = "Alice";\nlet age = 25;\nlet likesCoding = true;\n\nconsole.log("Name:", name);\nconsole.log("Age:", age);\nconsole.log("Likes coding:", likesCoding);`,
      hints: ["Use let or const to declare variables", "Remember to use quotes for strings", "Boolean values are true or false"]
    },
    {
      title: "Simple Function",
      description: "Write a function that greets a user by name",
      task: "Create a function called 'greetUser' that takes a name as parameter and returns a greeting message.",
      solution: `function greetUser(name) {\n  return "Hello, " + name + "! Welcome!";\n}\n\nconsole.log(greetUser("Alice"));`,
      hints: ["Functions use the 'function' keyword", "Use 'return' to send back a value", "Parameters go inside parentheses"]
    }
  ],
  intermediate: [
    {
      title: "Array Manipulation",
      description: "Filter and transform array data using built-in methods",
      task: "Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], create a new array containing only even numbers, then double each even number.",
      solution: `let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nlet evenNumbers = numbers.filter(n => n % 2 === 0);\nlet doubledEvens = evenNumbers.map(n => n * 2);\n\nconsole.log("Even numbers:", evenNumbers);\nconsole.log("Doubled evens:", doubledEvens);`,
      hints: ["Use filter() to select elements", "Use map() to transform elements", "Modulo operator % checks for even numbers"]
    },
    {
      title: "Object Methods",
      description: "Create an object with methods to calculate area and perimeter",
      task: "Create a 'rectangle' object with width and height properties, and methods to calculate area and perimeter.",
      solution: `let rectangle = {\n  width: 5,\n  height: 3,\n  calculateArea() {\n    return this.width * this.height;\n  },\n  calculatePerimeter() {\n    return 2 * (this.width + this.height);\n  }\n};\n\nconsole.log("Area:", rectangle.calculateArea());\nconsole.log("Perimeter:", rectangle.calculatePerimeter());`,
      hints: ["Objects use curly braces {}", "Methods are functions inside objects", "Use 'this' to access object properties"]
    }
  ],
  advanced: [
    {
      title: "Async Data Processing",
      description: "Handle asynchronous operations with promises and async/await",
      task: "Create an async function that simulates fetching user data with a 2-second delay, then processes and returns the data.",
      solution: `async function fetchUserData(userId) {\n  console.log("Fetching user data...");\n  \n  // Simulate API delay\n  await new Promise(resolve => setTimeout(resolve, 2000));\n  \n  let userData = {\n    id: userId,\n    name: "Alice Smith",\n    email: "alice@example.com"\n  };\n  \n  return userData;\n}\n\n// Usage\nfetchUserData(123).then(data => {\n  console.log("User data:", data);\n});`,
      hints: ["Use 'async' keyword before function", "Use 'await' for promises", "setTimeout can simulate delays"]
    }
  ]
};

export function ExerciseGenerator() {
  const [difficulty, setDifficulty] = useState("beginner");
  const [currentExercise, setCurrentExercise] = useState(exerciseTemplates.beginner[0]);
  const [showSolution, setShowSolution] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [score, setScore] = useState(0);

  const generateNewExercise = () => {
    const exercises = exerciseTemplates[difficulty as keyof typeof exerciseTemplates];
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
    setCurrentExercise(randomExercise);
    setShowSolution(false);
    setCurrentHintIndex(0);
  };

  const showNextHint = () => {
    if (currentHintIndex < currentExercise.hints.length - 1) {
      setCurrentHintIndex(currentHintIndex + 1);
    }
  };

  const completeExercise = () => {
    setScore(score + (difficulty === "beginner" ? 10 : difficulty === "intermediate" ? 20 : 30));
    setShowSolution(true);
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-primary" />
              Coding Exercises
            </CardTitle>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Score: {score}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span className="text-sm">Difficulty:</span>
            </div>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={generateNewExercise} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              New Exercise
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Current Exercise */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{currentExercise.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {currentExercise.description}
              </p>
            </div>
            <Badge 
              className={
                difficulty === "beginner" ? "bg-accent text-primary-foreground" :
                difficulty === "intermediate" ? "bg-primary text-primary-foreground" :
                "bg-destructive text-destructive-foreground"
              }
            >
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-secondary/50 rounded-lg p-4 mb-4">
            <h4 className="font-medium mb-2">Task:</h4>
            <p className="text-sm text-muted-foreground">{currentExercise.task}</p>
          </div>

          <div className="flex gap-2 mb-4">
            <Button variant="hero" onClick={completeExercise}>
              Submit Solution
            </Button>
            <Button variant="outline" onClick={showNextHint} disabled={currentHintIndex >= currentExercise.hints.length - 1}>
              Get Hint ({currentHintIndex + 1}/{currentExercise.hints.length})
            </Button>
            <Button variant="ghost" onClick={() => setShowSolution(!showSolution)}>
              {showSolution ? "Hide" : "Show"} Solution
            </Button>
          </div>

          {/* Hints */}
          {currentHintIndex >= 0 && (
            <Card className="mb-4 bg-accent/10 border-accent/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-accent mb-1">Hint {currentHintIndex + 1}:</p>
                    <p className="text-sm">{currentExercise.hints[currentHintIndex]}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Solution */}
          {showSolution && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-code-bg rounded-lg p-4">
                  <pre className="text-sm font-mono text-code-variable whitespace-pre-wrap">
                    {currentExercise.solution}
                  </pre>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Progress Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold">{score}</div>
            <div className="text-sm text-muted-foreground">Total Score</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-muted-foreground">Exercises Completed</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Dumbbell className="w-8 h-8 text-destructive mx-auto mb-2" />
            <div className="text-2xl font-bold">{difficulty}</div>
            <div className="text-sm text-muted-foreground">Current Level</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}