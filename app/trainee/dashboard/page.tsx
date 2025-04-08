import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function TraineeDashboardPage() {
  return (
    <DashboardLayout role="trainee" >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome, Trainee</h1>
          <p className="text-muted-foreground">Track your progress and continue your MPAS training</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>Overall completion of your training program</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Overall Progress</div>
                  <div className="text-sm text-muted-foreground">65%</div>
                </div>
                <Progress value={65} className="h-2" />

                <div className="pt-4 space-y-4">
                  <h3 className="font-medium">Module Completion</h3>
                  <ModuleProgress title="MPAS Basic Operations" progress={100} status="Completed" />
                  <ModuleProgress title="Safety Procedures" progress={100} status="Completed" />
                  <ModuleProgress title="Assembly Line Protocols" progress={75} status="In Progress" />
                  <ModuleProgress title="Quality Control" progress={25} status="In Progress" />
                  <ModuleProgress title="Advanced Troubleshooting" progress={0} status="Not Started" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-medium">Assembly Line Protocols</h3>
                  <p className="text-sm text-muted-foreground">
                    You completed 3 of 4 sections. Continue to the next section.
                  </p>
                  <Progress value={75} className="h-2 mt-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/trainee/courses/assembly-line">Continue Learning</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Quiz</CardTitle>
                <CardDescription>Prepare for your next assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-medium">Assembly Line Protocols Quiz</h3>
                  <p className="text-sm text-muted-foreground">Complete this quiz to earn your module certificate</p>
                  <div className="flex items-center mt-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm">Available after completing the module</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" disabled>
                  Take Quiz
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Your Certificates</CardTitle>
              <CardDescription>Certificates you&apos;ve earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <CertificateItem title="MPAS Basic Operations" date="March 15, 2025" />
                <CertificateItem title="Safety Procedures" date="March 22, 2025" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/trainee/certificates">View All Certificates</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Quick access to resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ResourceItem title="MPAS User Manual" type="PDF" />
                <ResourceItem title="Assembly Line Diagram" type="Image" />
                <ResourceItem title="Troubleshooting Guide" type="PDF" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/trainee/knowledge-base">Browse Knowledge Base</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Announcements</CardTitle>
              <CardDescription>Latest updates from administrators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <AnnouncementItem title="New Quality Control Module Added" date="April 5, 2025" />
                <AnnouncementItem title="Maintenance Schedule Update" date="April 2, 2025" />
                <AnnouncementItem title="Safety Procedure Updates" date="March 28, 2025" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

function ModuleProgress({ title, progress, status }: { title: string; progress: number; status: string }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500"
      case "In Progress":
        return "bg-blue-500"
      default:
        return "bg-gray-300"
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">{title}</div>
        <div className="flex items-center">
          <div className={`w-2 h-2 rounded-full ${getStatusColor(status)} mr-2`}></div>
          <span className="text-xs text-muted-foreground">{status}</span>
        </div>
      </div>
      <Progress value={progress} className="h-1.5" />
    </div>
  )
}

function CertificateItem({ title, date }: { title: string; date: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-2xl">🎓</div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">Issued: {date}</p>
      </div>
    </div>
  )
}

function ResourceItem({ title, type }: { title: string; type: string }) {
  const getIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return "📄"
      case "Image":
        return "🖼️"
      case "Video":
        return "🎬"
      default:
        return "📁"
    }
  }

  return (
    <div className="flex items-center gap-3">
      <div className="text-2xl">{getIcon(type)}</div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{type} Document</p>
      </div>
    </div>
  )
}

function AnnouncementItem({ title, date }: { title: string; date: string }) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-muted-foreground">{date}</p>
    </div>
  )
}
