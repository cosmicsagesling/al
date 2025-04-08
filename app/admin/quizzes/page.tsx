import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Plus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AdminQuizzesPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Quiz Management</h1>
            <p className="text-muted-foreground">Create and manage assessment quizzes</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Quiz
          </Button>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Quizzes</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6">
              <QuizCard
                title="MPAS Basic Operations"
                description="Test knowledge of MPAS fundamentals"
                questions={10}
                timeLimit={15}
                passingScore={70}
                status="active"
                attempts={98}
                avgScore={85}
              />
              <QuizCard
                title="Safety Procedures"
                description="Verify understanding of safety protocols"
                questions={15}
                timeLimit={20}
                passingScore={80}
                status="active"
                attempts={92}
                avgScore={82}
              />
              <QuizCard
                title="Assembly Line Protocols"
                description="Test knowledge of assembly procedures"
                questions={12}
                timeLimit={18}
                passingScore={75}
                status="active"
                attempts={45}
                avgScore={79}
              />
              <QuizCard
                title="Quality Control"
                description="Assessment on quality inspection techniques"
                questions={15}
                timeLimit={20}
                passingScore={75}
                status="active"
                attempts={22}
                avgScore={81}
              />
              <QuizCard
                title="Advanced Troubleshooting"
                description="Test problem-solving skills"
                questions={20}
                timeLimit={30}
                passingScore={70}
                status="draft"
                attempts={0}
                avgScore={0}
              />
            </div>
          </TabsContent>
          <TabsContent value="active" className="mt-6">
            <div className="grid gap-6">
              <QuizCard
                title="MPAS Basic Operations"
                description="Test knowledge of MPAS fundamentals"
                questions={10}
                timeLimit={15}
                passingScore={70}
                status="active"
                attempts={98}
                avgScore={85}
              />
              <QuizCard
                title="Safety Procedures"
                description="Verify understanding of safety protocols"
                questions={15}
                timeLimit={20}
                passingScore={80}
                status="active"
                attempts={92}
                avgScore={82}
              />
              <QuizCard
                title="Assembly Line Protocols"
                description="Test knowledge of assembly procedures"
                questions={12}
                timeLimit={18}
                passingScore={75}
                status="active"
                attempts={45}
                avgScore={79}
              />
              <QuizCard
                title="Quality Control"
                description="Assessment on quality inspection techniques"
                questions={15}
                timeLimit={20}
                passingScore={75}
                status="active"
                attempts={22}
                avgScore={81}
              />
            </div>
          </TabsContent>
          <TabsContent value="draft" className="mt-6">
            <div className="grid gap-6">
              <QuizCard
                title="Advanced Troubleshooting"
                description="Test problem-solving skills"
                questions={20}
                timeLimit={30}
                passingScore={70}
                status="draft"
                attempts={0}
                avgScore={0}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

function QuizCard({
  title,
  description,
  questions,
  timeLimit,
  passingScore,
  status,
  attempts,
  avgScore,
}: {
  title: string
  description: string
  questions: number
  timeLimit: number
  passingScore: number
  status: "active" | "draft"
  attempts: number
  avgScore: number
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="flex items-center gap-2">
            {title}
            <Badge variant={status === "active" ? "default" : "secondary"}>
              {status === "active" ? "Active" : "Draft"}
            </Badge>
          </CardTitle>
          <CardDescription className="mt-1">{description}</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit Quiz</DropdownMenuItem>
            <DropdownMenuItem>View Questions</DropdownMenuItem>
            <DropdownMenuItem>View Results</DropdownMenuItem>
            {status === "draft" ? (
              <DropdownMenuItem>Publish Quiz</DropdownMenuItem>
            ) : (
              <DropdownMenuItem>Disable Quiz</DropdownMenuItem>
            )}
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Questions</p>
            <p className="text-lg font-medium">{questions}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Time Limit</p>
            <p className="text-lg font-medium">{timeLimit} min</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Passing Score</p>
            <p className="text-lg font-medium">{passingScore}%</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Related Module</p>
            <p className="text-lg font-medium">{title}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Attempts</p>
            <p className="text-lg font-medium">{attempts}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Avg. Score</p>
            <p className="text-lg font-medium">{avgScore > 0 ? `${avgScore}%` : "N/A"}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Pass Rate</p>
            <p className="text-lg font-medium">
              {status === "active" && attempts > 0 ? `${Math.floor(Math.random() * 20) + 75}%` : "N/A"}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Last Updated</p>
            <p className="text-lg font-medium">{status === "active" ? "Mar 25, 2025" : "Apr 5, 2025"}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
