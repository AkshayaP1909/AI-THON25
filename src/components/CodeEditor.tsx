import { useState } from "react";
import { Play, RotateCcw, Save, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export function CodeEditor() {
  const [code, setCode] = useState(`// Welcome to CodeMaster AI!
// Try writing some JavaScript code below

function greetUser(name) {
  return \`Hello, \${name}! Welcome to coding!\`;
}

// Call the function
console.log(greetUser("Developer"));

// Try modifying the code and see what happens!
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubled);`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // Capture console.log output
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.map(arg => String(arg)).join(' '));
      };

      // Execute the code
      eval(code);
      
      // Restore console.log
      console.log = originalLog;
      
      setOutput(logs.join('\n') || 'Code executed successfully (no output)');
    } catch (error) {
      setOutput(`Error: ${error}`);
    }
  };

  const resetCode = () => {
    setCode(`// Welcome to CodeMaster AI!
// Try writing some JavaScript code below

function greetUser(name) {
  return \`Hello, \${name}! Welcome to coding!\`;
}

// Call the function
console.log(greetUser("Developer"));`);
    setOutput("");
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 h-full">
      {/* Code Editor */}
      <Card className="p-0 overflow-hidden bg-code-bg border-border">
        <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-accent"></div>
            </div>
            <span className="text-sm text-muted-foreground font-mono">main.js</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="code" size="sm" onClick={resetCode}>
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
            <Button variant="code" size="sm">
              <Save className="w-4 h-4" />
              Save
            </Button>
            <Button variant="accent" size="sm" onClick={runCode}>
              <Play className="w-4 h-4" />
              Run Code
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="min-h-[400px] bg-transparent border-none resize-none focus:ring-0 font-mono text-sm text-code-variable"
            placeholder="Write your code here..."
          />
        </div>
      </Card>

      {/* Output Panel */}
      <Card className="p-0 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/50">
          <h3 className="font-semibold">Output</h3>
          <Button variant="ghost" size="sm">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
        
        <div className="p-4">
          <pre className="bg-code-bg rounded-lg p-4 text-sm font-mono text-code-variable min-h-[400px] overflow-auto">
            {output || "Click 'Run Code' to see output here..."}
          </pre>
        </div>
      </Card>
    </div>
  );
}