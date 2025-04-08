import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Plus, Upload } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AdminContentPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
            <p className="text-muted-foreground">Manage training materials and resources</p>
          </div>
          <div className="flex gap-2">
            <Button>
              <Upload className="mr-2 h-4 w-4" /> Upload Content
            </Button>
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" /> Create Module
            </Button>
          </div>
        </div>

        <Tabs defaultValue="modules">
          <TabsList>
            <TabsTrigger value="modules">Training Modules</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="modules" className="mt-6">
            <div className="grid gap-6">
              <ModuleCard
                title="MPAS Basic Operations"
                description="Fundamentals of operating the MPAS system"
                sections={4}
                resources={6}
                status="published"
                lastUpdated="March 10, 2025"
              />
              <ModuleCard
                title="Safety Procedures"
                description="Essential safety protocols for factory operations"
                sections={5}
                resources={8}
                status="published"
                lastUpdated="March 15, 2025"
              />
              <ModuleCard
                title="Assembly Line Protocols"
                description="Standard procedures for assembly line operations"
                sections={4}
                resources={5}
                status="published"
                lastUpdated="March 20, 2025"
              />
              <ModuleCard
                title="Quality Control"
                description="Ensuring product quality through inspection techniques"
                sections={3}
                resources={4}
                status="published"
                lastUpdated="April 1, 2025"
              />
              <ModuleCard
                title="Advanced Troubleshooting"
                description="Solving complex issues in the MPAS system"
                sections={6}
                resources={10}
                status="draft"
                lastUpdated="April 5, 2025"
              />
            </div>
          </TabsContent>
          <TabsContent value="resources" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="MPAS User Manual"
                type="PDF"
                size="4.2 MB"
                module="MPAS Basic Operations"
                uploadDate="March 5, 2025"
              />
              <ResourceCard
                title="Assembly Line Diagram"
                type="Image"
                size="2.8 MB"
                module="Assembly Line Protocols"
                uploadDate="March 12, 2025"
              />
              <ResourceCard
                title="Safety Procedures Handbook"
                type="PDF"
                size="3.5 MB"
                module="Safety Procedures"
                uploadDate="March 8, 2025"
              />
              <ResourceCard
                title="Troubleshooting Guide"
                type="PDF"
                size="2.1 MB"
                module="Advanced Troubleshooting"
                uploadDate="April 2, 2025"
              />
              <ResourceCard
                title="Quality Control Checklist"
                type="PDF"
                size="1.2 MB"
                module="Quality Control"
                uploadDate="March 30, 2025"
              />
              <ResourceCard
                title="MPAS Maintenance Video"
                type="Video"
                size="85 MB"
                module="MPAS Basic Operations"
                uploadDate="March 18, 2025"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

function ModuleCard({
  title,
  description,
  sections,
  resources,
  status,
  lastUpdated,
}: {
  title: string
  description: string
  sections: number
  resources: number
  status: "published" | "draft"
  lastUpdated: string
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="flex items-center gap-2">
            {title}
            <Badge variant={status === "published" ? "default" : "secondary"}>
              {status === "published" ? "Published" : "Draft"}
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
            <DropdownMenuItem>Edit Module</DropdownMenuItem>
            <DropdownMenuItem>Add Section</DropdownMenuItem>
            <DropdownMenuItem>Upload Resource</DropdownMenuItem>
            {status === "draft" ? (
              <DropdownMenuItem>Publish</DropdownMenuItem>
            ) : (
              <DropdownMenuItem>Unpublish</DropdownMenuItem>
            )}
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Sections</p>
            <p className="text-lg font-medium">{sections}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Resources</p>
            <p className="text-lg font-medium">{resources}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Last Updated</p>
            <p className="text-sm">{lastUpdated}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Completion Rate</p>
            <p className="text-sm">{status === "published" ? `${Math.floor(Math.random() * 30) + 70}%` : "N/A"}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ResourceCard({
  title,
  type,
  size,
  module,
  uploadDate,
}: {
  title: string
  type: "PDF" | "Image" | "Video"
  size: string
  module: string
  uploadDate: string
}) {
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
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div className="flex items-start gap-3">
          <div className="text-3xl">{getIcon(type)}</div>
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <CardDescription className="mt-1">
              {type} • {size}
            </CardDescription>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Resource</DropdownMenuItem>
            <DropdownMenuItem>Replace File</DropdownMenuItem>
            <DropdownMenuItem>Edit Details</DropdownMenuItem>
            <DropdownMenuItem>Move to Module</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Module:</span>
            <span>{module}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Uploaded:</span>
            <span>{uploadDate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
