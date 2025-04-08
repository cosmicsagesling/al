import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"

export default function TraineeKnowledgeBasePage() {
  return (
    <DashboardLayout role="trainee">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Knowledge Base</h1>
          <p className="text-muted-foreground">Access technical documentation and resources</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for resources..." className="pl-10" />
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="manuals">Manuals</TabsTrigger>
            <TabsTrigger value="diagrams">Diagrams</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="MPAS User Manual"
                description="Complete guide to operating the MPAS system"
                type="PDF"
                size="4.2 MB"
                tags={["Manual", "Operations"]}
              />
              <ResourceCard
                title="Assembly Line Diagram"
                description="Technical diagram of the assembly line layout"
                type="Image"
                size="2.8 MB"
                tags={["Diagram", "Assembly"]}
              />
              <ResourceCard
                title="Safety Procedures Handbook"
                description="Comprehensive safety guidelines for factory operations"
                type="PDF"
                size="3.5 MB"
                tags={["Manual", "Safety"]}
              />
              <ResourceCard
                title="Troubleshooting Guide"
                description="Solutions for common MPAS system issues"
                type="PDF"
                size="2.1 MB"
                tags={["Guide", "Troubleshooting"]}
              />
              <ResourceCard
                title="Quality Control Checklist"
                description="Standard checklist for quality inspections"
                type="PDF"
                size="1.2 MB"
                tags={["Checklist", "Quality"]}
              />
              <ResourceCard
                title="MPAS Maintenance Video"
                description="Video tutorial on routine maintenance procedures"
                type="Video"
                size="85 MB"
                tags={["Video", "Maintenance"]}
              />
            </div>
          </TabsContent>
          <TabsContent value="manuals" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="MPAS User Manual"
                description="Complete guide to operating the MPAS system"
                type="PDF"
                size="4.2 MB"
                tags={["Manual", "Operations"]}
              />
              <ResourceCard
                title="Safety Procedures Handbook"
                description="Comprehensive safety guidelines for factory operations"
                type="PDF"
                size="3.5 MB"
                tags={["Manual", "Safety"]}
              />
              <ResourceCard
                title="Troubleshooting Guide"
                description="Solutions for common MPAS system issues"
                type="PDF"
                size="2.1 MB"
                tags={["Guide", "Troubleshooting"]}
              />
            </div>
          </TabsContent>
          <TabsContent value="diagrams" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Assembly Line Diagram"
                description="Technical diagram of the assembly line layout"
                type="Image"
                size="2.8 MB"
                tags={["Diagram", "Assembly"]}
              />
            </div>
          </TabsContent>
          <TabsContent value="videos" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="MPAS Maintenance Video"
                description="Video tutorial on routine maintenance procedures"
                type="Video"
                size="85 MB"
                tags={["Video", "Maintenance"]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

function ResourceCard({
  title,
  description,
  type,
  size,
  tags,
}: {
  title: string
  description: string
  type: "PDF" | "Image" | "Video"
  size: string
  tags: string[]
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
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="text-3xl">{getIcon(type)}</div>
          <div className="flex-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Type: {type}</span>
            <span className="text-muted-foreground">Size: {size}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
