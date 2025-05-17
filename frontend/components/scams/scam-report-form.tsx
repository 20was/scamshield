"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { SCAM_CATEGORIES, SCAM_SEVERITY } from "@/constants/scam-constants"
import { AlertCircle, Camera, FileUp, HelpCircle, Loader2, Upload } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProgressPoints } from "@/components/gamification/progress-points"

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  category: z.string().min(1, { message: "Please select a category" }),
  severity: z.string().min(1, { message: "Please select a severity level" }),
  description: z.string().min(20, { message: "Description must be at least 20 characters" }),
  url: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal("")),
  contactInfo: z.string().optional(),
  evidence: z.string().optional(),
  location: z.string().optional(),
})

export function ScamReportForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [hasEvidence, setHasEvidence] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
      severity: "",
      description: "",
      url: "",
      contactInfo: "",
      evidence: "",
      location: "",
    },
  })

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  const nextStep = () => {
    const fieldsToValidate =
      currentStep === 1 ? ["title", "category", "severity"] : currentStep === 2 ? ["description"] : []

    form.trigger(fieldsToValidate).then((isValid) => {
      if (isValid) {
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
      }
    })
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate successful submission
      toast({
        title: "Scam report submitted",
        description: "Thank you for helping protect the community!",
      })

      // Show points earned
      toast({
        title: "Points earned!",
        description: (
          <div className="flex items-center gap-2">
            <span>
              You earned <span className="font-bold text-primary">50 points</span> for your contribution!
            </span>
            <Badge variant="outline" className="ml-2 bg-primary/10">
              +50
            </Badge>
          </div>
        ),
      })

      router.push("/dashboard/scams")
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/5 border-b">
        <CardTitle>Report a Scam</CardTitle>
        <CardDescription>Help protect others by sharing details about scams you've encountered</CardDescription>
        <div className="mt-4">
          <div className="flex justify-between mb-2 text-sm">
            <span>Progress</span>
            <span>
              {currentStep} of {totalSteps}
            </span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 mb-4 p-3 bg-info/10 text-info rounded-md border border-info/20">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">Start by providing basic information about the scam you encountered.</p>
                </div>

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Scam Title</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" type="button" className="h-6 w-6">
                                <HelpCircle className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Create a clear, descriptive title that summarizes the scam</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <Input placeholder="E.g., Fake Banking Website Phishing Scam" {...field} />
                      </FormControl>
                      <FormDescription>Provide a clear, descriptive title for the scam</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Category</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" type="button" className="h-6 w-6">
                                  <HelpCircle className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>Select the category that best describes this type of scam</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {SCAM_CATEGORIES.map((category) => (
                              <SelectItem key={category.value} value={category.value}>
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>Select the category that best describes this scam</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="severity"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Severity</FormLabel>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" type="button" className="h-6 w-6">
                                  <HelpCircle className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p>Rate how dangerous this scam is based on potential harm</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select severity level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {SCAM_SEVERITY.map((severity) => (
                              <SelectItem key={severity.value} value={severity.value}>
                                {severity.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>How dangerous is this scam?</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Location (Optional)</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" type="button" className="h-6 w-6">
                                <HelpCircle className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Where did you encounter this scam? (City, Country, or Online)</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <Input placeholder="E.g., New York, USA or Online" {...field} />
                      </FormControl>
                      <FormDescription>Helps identify regional scam patterns</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 mb-4 p-3 bg-info/10 text-info rounded-md border border-info/20">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">Provide detailed information about how the scam works.</p>
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Description</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" type="button" className="h-6 w-6">
                                <HelpCircle className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Describe how the scam works, what to look for, and who it targets</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <Textarea
                          placeholder="Provide a detailed description of the scam, how it works, and who it targets..."
                          className="min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Include as much detail as possible about how the scam operates</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>URL (Optional)</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" type="button" className="h-6 w-6">
                                <HelpCircle className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>The website URL associated with the scam (if applicable)</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                      </FormControl>
                      <FormDescription>If applicable, provide the website URL associated with the scam</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactInfo"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Contact Information (Optional)</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" type="button" className="h-6 w-6">
                                <HelpCircle className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Email addresses, phone numbers, or other contact methods used by the scammers</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <Input placeholder="Email addresses, phone numbers, etc." {...field} />
                      </FormControl>
                      <FormDescription>Any contact information used by the scammers</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 mb-4 p-3 bg-info/10 text-info rounded-md border border-info/20">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">Add evidence to strengthen your report (optional but recommended).</p>
                </div>

                <FormField
                  control={form.control}
                  name="evidence"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Evidence (Optional)</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" type="button" className="h-6 w-6">
                                <HelpCircle className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Describe any evidence you have, such as screenshots or message transcripts</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <Textarea
                          placeholder="Provide any additional evidence or details that might help others identify this scam..."
                          className="min-h-[100px] resize-none"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e)
                            setHasEvidence(e.target.value.length > 0)
                          }}
                        />
                      </FormControl>
                      <FormDescription>
                        Include screenshots, message transcripts, or other evidence (describe them here)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Attach Files (Optional)</h3>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" type="button" className="h-6 w-6">
                            <HelpCircle className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>Upload screenshots, emails, or other evidence files</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <Tabs defaultValue="upload">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="upload">Upload Files</TabsTrigger>
                      <TabsTrigger value="screenshot">Take Screenshot</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upload" className="mt-4">
                      <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex flex-col items-center gap-2">
                          <FileUp className="h-8 w-8 text-muted-foreground" />
                          <p className="text-sm font-medium">Drag files here or click to upload</p>
                          <p className="text-xs text-muted-foreground">
                            Support for images, PDFs, and text files up to 10MB
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">
                            <Upload className="h-4 w-4 mr-2" />
                            Select Files
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="screenshot" className="mt-4">
                      <div className="border-2 border-dashed rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="flex flex-col items-center gap-2">
                          <Camera className="h-8 w-8 text-muted-foreground" />
                          <p className="text-sm font-medium">Capture screenshot of evidence</p>
                          <p className="text-xs text-muted-foreground">
                            Take a screenshot of the scam website, email, or message
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">
                            <Camera className="h-4 w-4 mr-2" />
                            Capture Screenshot
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 border">
                  <h3 className="font-medium mb-2">Submission Preview</h3>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Title:</span>
                      <span className="col-span-2 font-medium">{form.getValues("title") || "Not provided"}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="col-span-2 font-medium">
                        {SCAM_CATEGORIES.find((c) => c.value === form.getValues("category"))?.label || "Not selected"}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Severity:</span>
                      <span className="col-span-2 font-medium">
                        {SCAM_SEVERITY.find((s) => s.value === form.getValues("severity"))?.label || "Not selected"}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Evidence:</span>
                      <span className="col-span-2 font-medium">{hasEvidence ? "Provided" : "Not provided"}</span>
                    </div>
                  </div>
                </div>

                <ProgressPoints
                  basePoints={30}
                  bonusPoints={hasEvidence ? 20 : 0}
                  bonusReason={hasEvidence ? "Including evidence" : undefined}
                />
              </motion.div>
            )}
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between border-t p-6 bg-muted/30">
        <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1 || isLoading}>
          Previous
        </Button>
        <div className="flex gap-2">
          {currentStep < totalSteps ? (
            <Button type="button" onClick={nextStep} disabled={isLoading}>
              Next
            </Button>
          ) : (
            <Button onClick={form.handleSubmit(onSubmit)} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Report"
              )}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
