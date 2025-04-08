import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function TraineeQuizzesPage() {
  return (
    <DashboardLayout role="trainee">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Quizzes</h1>
          <p className="text-muted-foreground">Take assessments to test your knowledge</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <QuizCard
            title="MPAS Basic Operations"
            description="Test your knowledge of MPAS fundamentals"
            questions={10}
            timeLimit={15}
            status="completed"
            score={90}
          />
          <QuizCard
            title="Safety Procedures"
            description="Verify your understanding of safety protocols"
            questions={15}
            timeLimit={20}
            status="completed"
            score={85}
          />
          <QuizCard
            title="Assembly Line Protocols"
            description="Test your knowledge of assembly procedures"
            questions={12}
            timeLimit={18}
            status="available"
          />
          <QuizCard
            title="Quality Control"
            description="Assessment on quality inspection techniques"
            questions={15}
            timeLimit={20}
            status="locked"
            requiredModule="Complete Quality Control module first"
          />
          <QuizCard
            title="Advanced Troubleshooting"
            description="Test your problem-solving skills"
            questions={20}
            timeLimit={30}
            status="locked"
            requiredModule="Complete Advanced Troubleshooting module first"
          />
        </div>
      </div>
    </DashboardLayout>
  )
}

function QuizCard({
  title,
  description,
  questions,
  timeLimit,
  status,
  score,
  requiredModule,
}: {
  title: string
  description: string
  questions: number
  timeLimit: number
  status: "locked" | "available" | "completed"
  score?: number
  requiredModule?: string
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge variant={status === "completed" ? "default" : status === "available" ? "outline" : "secondary"}>
            {status === "completed" ? "Completed" : status === "available" ? "Available" : "Locked"}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <div>
              <span className="text-muted-foreground">Questions: </span>
              <span className="font-medium">{questions}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Time Limit: </span>
              <span className="font-medium">{timeLimit} min</span>
            </div>
          </div>

          {status === "completed" && score !== undefined && (
            <div className="mt-4 p-3 bg-primary/10 rounded-md">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Your Score</span>
                <span className="text-lg font-bold">{score}%</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">Passing score: 70%</div>
            </div>
          )}

          {status === "locked" && requiredModule && (
            <div className="mt-2 text-sm text-muted-foreground">
              <span className="text-yellow-500">⚠️</span> {requiredModule}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          asChild={status !== "locked"}
          className="w-full"
          variant={status === "completed" ? "outline" : "default"}
          disabled={status === "locked"}
        >
          {status !== "locked" ? (
            <Link
              href={
                status === "completed"
                  ? `/trainee/quizzes/${title.toLowerCase().replace(/\s+/g, "-")}/results`
                  : `/trainee/quizzes/${title.toLowerCase().replace(/\s+/g, "-")}`
              }
            >
              {status === "completed" ? "View Results" : "Start Quiz"}
            </Link>
          ) : (
            <span>Locked</span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
