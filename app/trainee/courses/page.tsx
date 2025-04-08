import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function TraineeCoursesPage() {
  return (
    <DashboardLayout role="trainee">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
          <p className="text-muted-foreground">Access and manage your training courses</p>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CourseCard
                title="MPAS Basic Operations"
                description="Learn the fundamentals of operating the MPAS system"
                progress={100}
                status="completed"
              />
              <CourseCard
                title="Safety Procedures"
                description="Essential safety protocols for factory operations"
                progress={100}
                status="completed"
              />
              <CourseCard
                title="Assembly Line Protocols"
                description="Standard procedures for assembly line operations"
                progress={75}
                status="in-progress"
              />
              <CourseCard
                title="Quality Control"
                description="Ensuring product quality through inspection techniques"
                progress={25}
                status="in-progress"
              />
              <CourseCard
                title="Advanced Troubleshooting"
                description="Solving complex issues in the MPAS system"
                progress={0}
                status="not-started"
              />
            </div>
          </TabsContent>
          <TabsContent value="in-progress" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CourseCard
                title="Assembly Line Protocols"
                description="Standard procedures for assembly line operations"
                progress={75}
                status="in-progress"
              />
              <CourseCard
                title="Quality Control"
                description="Ensuring product quality through inspection techniques"
                progress={25}
                status="in-progress"
              />
            </div>
          </TabsContent>
          <TabsContent value="completed" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <CourseCard
                title="MPAS Basic Operations"
                description="Learn the fundamentals of operating the MPAS system"
                progress={100}
                status="completed"
              />
              <CourseCard
                title="Safety Procedures"
                description="Essential safety protocols for factory operations"
                progress={100}
                status="completed"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

function CourseCard({
  title,
  description,
  progress,
  status,
}: {
  title: string
  description: string
  progress: number
  status: "not-started" | "in-progress" | "completed"
}) {
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      default:
        return "Not Started"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-blue-500"
      default:
        return "bg-gray-300"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full ${getStatusColor(status)} mr-2`}></div>
            <span className="text-xs text-muted-foreground">{getStatusLabel(status)}</span>
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Progress</span>
            <span className="text-sm font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant={status === "completed" ? "outline" : "default"}>
          <Link href={`/trainee/courses/${title.toLowerCase().replace(/\s+/g, "-")}`}>
            {status === "completed" ? "Review Course" : status === "in-progress" ? "Continue Course" : "Start Course"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
