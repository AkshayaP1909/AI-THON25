import { useState } from "react";
import { Brain, Lightbulb, AlertTriangle, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AIAnalysis() {
  const [analysis, setAnalysis] = useState({
    summary: "Your code demonstrates good understanding of JavaScript fundamentals including functions, template literals, and array methods.",
    suggestions: [
      "Consider adding error handling for edge cases",
      "Variable naming could be more descriptive",
      "Consider using const instead of let for variables that don't change"
    ],
    errors: [],
    complexity: "Beginner",
    score: 85
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const runAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis({
        summary: "Your code shows excellent use of modern JavaScript features. The function is well-structured and the array manipulation demonstrates good understanding of functional programming concepts.",
        suggestions: [
          "Consider adding JSDoc comments for better documentation",
          "You could use more descriptive variable names like 'doubledNumbers'",
          "Try using const for variables that don't change their reference"
        ],
        errors: [],
        complexity: "Intermediate",
        score: 92
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Analysis Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              AI Code Analysis
            </CardTitle>
            <Button 
              variant="hero" 
              size="sm" 
              onClick={runAnalysis}
              disabled={isAnalyzing}
              className={isAnalyzing ? "animate-pulse-glow" : ""}
            >
              <Sparkles className="w-4 h-4" />
              {isAnalyzing ? "Analyzing..." : "Analyze Code"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Code Quality Score:</span>
              <Badge variant="secondary" className="bg-gradient-accent text-primary-foreground">
                {analysis.score}/100
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Complexity:</span>
              <Badge variant="outline">{analysis.complexity}</Badge>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{analysis.summary}</p>
        </CardContent>
      </Card>

      {/* Suggestions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-accent" />
            Improvement Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {analysis.suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm">{suggestion}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Errors (if any) */}
      {analysis.errors.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Issues Found
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {analysis.errors.map((error, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              Generate Documentation
            </Button>
            <Button variant="outline" size="sm">
              Add Error Handling
            </Button>
            <Button variant="outline" size="sm">
              Optimize Performance
            </Button>
            <Button variant="outline" size="sm">
              Add Unit Tests
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}