import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function TraineeCertificatesPage() {
  return (
    <DashboardLayout role="trainee">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Certificates</h1>
          <p className="text-muted-foreground">View and download your earned certificates</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <CertificateCard
            title="MPAS Basic Operations"
            issueDate="March 15, 2025"
            completionDate="March 14, 2025"
            score={90}
          />
          <CertificateCard
            title="Safety Procedures"
            issueDate="March 22, 2025"
            completionDate="March 21, 2025"
            score={85}
          />
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Certificates</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Assembly Line Protocols</CardTitle>
                <CardDescription>Complete the module and pass the quiz to earn this certificate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Module Progress:</span>
                    <span className="font-medium">75% Complete</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Quiz Status:</span>
                    <span className="font-medium">Not Taken</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quality Control</CardTitle>
                <CardDescription>Complete the module and pass the quiz to earn this certificate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Module Progress:</span>
                    <span className="font-medium">25% Complete</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Quiz Status:</span>
                    <span className="font-medium">Locked</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

function CertificateCard({
  title,
  issueDate,
  completionDate,
  score,
}: {
  title: string
  issueDate: string
  completionDate: string
  score: number
}) {
  return (
    <Card className="overflow-hidden">
      <div className="bg-primary/10 p-6 border-b">
        <div className="text-center space-y-2">
          <div className="text-4xl mb-2">🎓</div>
          <h2 className="text-2xl font-bold">Certificate of Completion</h2>
          <p className="text-lg font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">
            This certifies that <span className="font-medium">Trainee User</span> has successfully completed the
            training
          </p>
        </div>
      </div>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Issue Date</p>
              <p className="font-medium">{issueDate}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Completion Date</p>
              <p className="font-medium">{completionDate}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Certificate ID</p>
              <p className="font-medium">MPAS-{Math.floor(10000 + Math.random() * 90000)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Final Score</p>
              <p className="font-medium">{score}%</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4" /> Download Certificate
        </Button>
      </CardFooter>
    </Card>
  )
}
