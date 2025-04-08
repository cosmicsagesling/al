import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboardPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Overview of training progress and platform statistics</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Trainees" value="124" description="12 new this month" />
          <StatCard title="Active Courses" value="8" description="2 added recently" />
          <StatCard title="Completion Rate" value="76%" description="↑ 12% from last month" />
          <StatCard title="Certificates Issued" value="94" description="23 this month" />
        </div>

        <Tabs defaultValue="progress">
          <TabsList>
            <TabsTrigger value="progress">Training Progress</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="progress" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Training Progress Overview</CardTitle>
                <CardDescription>Track completion rates across all training modules</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <ProgressItem title="MPAS Basic Operations" progress={92} count="114/124" />
                  <ProgressItem title="Safety Procedures" progress={88} count="109/124" />
                  <ProgressItem title="Assembly Line Protocols" progress={76} count="94/124" />
                  <ProgressItem title="Quality Control" progress={64} count="79/124" />
                  <ProgressItem title="Advanced Troubleshooting" progress={45} count="56/124" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recent">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions and events on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ActivityItem
                    user="John Smith"
                    action="completed"
                    item="MPAS Basic Operations Quiz"
                    time="2 hours ago"
                  />
                  <ActivityItem
                    user="Maria Garcia"
                    action="earned"
                    item="Safety Procedures Certificate"
                    time="4 hours ago"
                  />
                  <ActivityItem
                    user="Admin User"
                    action="uploaded"
                    item="new Assembly Line video tutorial"
                    time="Yesterday"
                  />
                  <ActivityItem user="Robert Johnson" action="started" item="Quality Control module" time="Yesterday" />
                  <ActivityItem
                    user="Admin User"
                    action="created"
                    item="new quiz for Troubleshooting module"
                    time="2 days ago"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

function StatCard({ title, value, description }: { title: string; value: string; description: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProgressItem({ title, progress, count }: { title: string; progress: number; count: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{count}</div>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  )
}

function ActivityItem({ user, action, item, time }: { user: string; action: string; item: string; time: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border p-3">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">{user.charAt(0)}</div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">
          <span className="font-semibold">{user}</span> {action} {item}
        </p>
        <p className="text-sm text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}
