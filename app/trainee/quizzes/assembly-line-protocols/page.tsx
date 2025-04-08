"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"
import { AlertCircle, Clock } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Sample quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "What is the correct sequence for starting the assembly line?",
    options: [
      "Power on, safety check, initialize system, start conveyor",
      "Initialize system, power on, start conveyor, safety check",
      "Safety check, power on, initialize system, start conveyor",
      "Start conveyor, power on, safety check, initialize system",
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "Which component should be inspected first during the daily pre-operation check?",
    options: ["Conveyor belt tension", "Emergency stop buttons", "Control panel", "Product fixtures"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "What is the maximum allowable speed for the MPAS assembly line during normal operation?",
    options: ["15 units per minute", "20 units per minute", "25 units per minute", "30 units per minute"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Which action should be taken if a product jam occurs on the assembly line?",
    options: [
      "Increase conveyor speed to clear the jam",
      "Press the emergency stop button immediately",
      "Press the pause button and notify the supervisor",
      "Manually remove the jammed product while the line is running",
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "How often should the assembly line sensors be calibrated?",
    options: ["Daily", "Weekly", "Monthly", "Quarterly"],
    correctAnswer: 1,
  },
]

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(quizQuestions.length).fill(-1))
  const [timeRemaining, setTimeRemaining] = useState(18 * 60) // 18 minutes in seconds
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setQuizSubmitted(true)
    // Calculate score and redirect after a brief delay
    setTimeout(() => {
      router.push("/trainee/quizzes/assembly-line-protocols/results")
    }, 2000)
  }

  // Format time remaining as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  // Calculate progress percentage
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  // Check if all questions have been answered
  const allQuestionsAnswered = selectedAnswers.every((answer) => answer !== -1)

  return (
    <DashboardLayout role="trainee">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Assembly Line Protocols Quiz</h1>
            <p className="text-muted-foreground">Test your knowledge of assembly line procedures</p>
          </div>
          <div className="flex items-center gap-2 bg-muted p-2 rounded-md">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">{formatTime(timeRemaining)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Question {currentQuestion + 1}</CardTitle>
            <CardDescription className="text-base font-medium pt-2">
              {quizQuestions[currentQuestion].question}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedAnswers[currentQuestion]?.toString() || ""}
              onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
            >
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-md hover:bg-muted">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
              Previous
            </Button>
            <div className="flex gap-2">
              {currentQuestion === quizQuestions.length - 1 ? (
                <Button onClick={handleSubmit} disabled={!allQuestionsAnswered || quizSubmitted}>
                  {quizSubmitted ? "Submitting..." : "Submit Quiz"}
                </Button>
              ) : (
                <Button onClick={handleNext} disabled={selectedAnswers[currentQuestion] === -1}>
                  Next
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>

        <div className="flex flex-wrap gap-2 justify-center">
          {quizQuestions.map((_, index) => (
            <Button
              key={index}
              variant={currentQuestion === index ? "default" : selectedAnswers[index] !== -1 ? "outline" : "ghost"}
              size="icon"
              className="w-10 h-10"
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>

        {!allQuestionsAnswered && currentQuestion === quizQuestions.length - 1 && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Incomplete Quiz</AlertTitle>
            <AlertDescription>Please answer all questions before submitting the quiz.</AlertDescription>
          </Alert>
        )}
      </div>
    </DashboardLayout>
  )
}
