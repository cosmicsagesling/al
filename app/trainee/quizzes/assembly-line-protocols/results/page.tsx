import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

export default function QuizResultsPage() {
  // Sample quiz results
  const quizResults = {
    title: "Assembly Line Protocols Quiz",
    score: 80,
    passingScore: 70,
    totalQuestions: 5,
    correctAnswers: 4,
    timeSpent: "12:45",
    date: "April 8, 2025",
    questions: [
      {
        question: "What is the correct sequence for starting the assembly line?",
        userAnswer: "Safety check, power on, initialize system, start conveyor",
        correctAnswer: "Safety check, power on, initialize system, start conveyor",
        isCorrect: true,
      },
      {
        question: "Which component should be inspected first during the daily pre-operation check?",
        userAnswer: "Emergency stop buttons",
        correctAnswer: "Emergency stop buttons",
        isCorrect: true,
      },
      {
        question: "What is the maximum allowable speed for the MPAS assembly line during normal operation?",
        userAnswer: "25 units per minute",
        correctAnswer: "25 units per minute",
        isCorrect: true,
      },
      {
        question: "Which action should be taken if a product jam occurs on the assembly line?",
        userAnswer: "Press the emergency stop button immediately",
        correctAnswer: "Press the pause button and notify the supervisor",
        isCorrect: false,
      },
      {
        question: "How often should the assembly line sensors be calibrated?",
        userAnswer: "Weekly",
        correctAnswer: "Weekly",
        isCorrect: true,
      },
    ],
  }

  const isPassed = quizResults.score >= quizResults.passingScore

  return (
    <DashboardLayout role="trainee">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quiz Results</h1>
          <p className="text-muted-foreground">
            {quizResults.title} - Completed on {quizResults.date}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Score</CardTitle>
            <CardDescription>
              {isPassed
                ? "Congratulations! You passed the quiz."
                : "You did not pass the quiz. Please review and try again."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-6">
              <div className="relative flex items-center justify-center">
                <svg className="w-32 h-32">
                  <circle
                    className="text-muted stroke-current"
                    strokeWidth="6"
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className={`${isPassed ? "text-green-500" : "text-red-500"} stroke-current`}
                    strokeWidth="6"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="58"
                    cx="64"
                    cy="64"
                    strokeDasharray="364.4"
                    strokeDashoffset={364.4 - (364.4 * quizResults.score) / 100}
                  />
                </svg>
                <span className="absolute text-3xl font-bold">{quizResults.score}%</span>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-8 text-center">
                <div>
                  <p className="text-sm text-muted-foreground">Passing Score</p>
                  <p className="text-xl font-bold">{quizResults.passingScore}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time Spent</p>
                  <p className="text-xl font-bold">{quizResults.timeSpent}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Questions</p>
                  <p className="text-xl font-bold">{quizResults.totalQuestions}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Correct Answers</p>
                  <p className="text-xl font-bold">
                    {quizResults.correctAnswers}/{quizResults.totalQuestions}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/trainee/courses/assembly-line-protocols">
                {isPassed ? "Continue to Next Module" : "Review Module"}
              </Link>
            </Button>
            {!isPassed && (
              <Button variant="outline" asChild>
                <Link href="/trainee/quizzes/assembly-line-protocols">Retake Quiz</Link>
              </Button>
            )}
          </CardFooter>
        </Card>

        <h2 className="text-xl font-semibold mt-8">Question Review</h2>

        <div className="space-y-4">
          {quizResults.questions.map((question, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-start gap-2">
                  {question.isCorrect ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  )}
                  <CardTitle className="text-base">Question {index + 1}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="font-medium mb-4">{question.question}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Your Answer:</p>
                    <p
                      className={
                        question.isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                      }
                    >
                      {question.userAnswer}
                    </p>
                  </div>
                  {!question.isCorrect && (
                    <div>
                      <p className="text-sm text-muted-foreground">Correct Answer:</p>
                      <p className="text-green-600 dark:text-green-400">{question.correctAnswer}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
