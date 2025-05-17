"use client"

import { useState } from "react"
import { format } from "date-fns"
import { motion } from "framer-motion"
import { Flag, MessageSquare, Send, ThumbsDown, ThumbsUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

interface ScamCommentsProps {
  scamId: string
}

// Mock comments data
const mockComments = [
  {
    id: "comment-1",
    userId: "user-1",
    userName: "Sarah Johnson",
    userAvatar: "/placeholder-user.jpg",
    content:
      "I received this exact scam email yesterday! The sender was trying to impersonate my bank and asked for my login credentials. Thankfully I recognized it as a scam right away.",
    date: "2024-05-01T14:30:00Z",
    likes: 12,
    dislikes: 0,
  },
  {
    id: "comment-2",
    userId: "user-2",
    userName: "Michael Chen",
    userAvatar: "/placeholder-user.jpg",
    content:
      "The domain they used was very similar to the legitimate bank website, just one letter off. Always check the URL carefully before entering any personal information.",
    date: "2024-05-01T16:45:00Z",
    likes: 8,
    dislikes: 1,
  },
  {
    id: "comment-3",
    userId: "user-3",
    userName: "Priya Patel",
    userAvatar: "/placeholder-user.jpg",
    content:
      "I've noticed these scams tend to increase around tax season and holidays. Be extra vigilant during these times.",
    date: "2024-05-02T09:15:00Z",
    likes: 5,
    dislikes: 0,
  },
]

export function ScamComments({ scamId }: ScamCommentsProps) {
  const { toast } = useToast()
  const [comments, setComments] = useState(mockComments)
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitComment = async () => {
    if (!newComment.trim()) return

    setIsSubmitting(true)

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const newCommentObj = {
        id: `comment-${comments.length + 1}`,
        userId: "current-user",
        userName: "John Doe",
        userAvatar: "/placeholder-user.jpg",
        content: newComment,
        date: new Date().toISOString(),
        likes: 0,
        dislikes: 0,
      }

      setComments([...comments, newCommentObj])
      setNewComment("")

      toast({
        title: "Comment posted",
        description: "Your comment has been added to the discussion",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to post comment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLike = (commentId: string) => {
    setComments(
      comments.map((comment) => (comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment)),
    )
  }

  const handleDislike = (commentId: string) => {
    setComments(
      comments.map((comment) => (comment.id === commentId ? { ...comment, dislikes: comment.dislikes + 1 } : comment)),
    )
  }

  const handleReport = (commentId: string) => {
    toast({
      title: "Comment reported",
      description: "Thank you for reporting this comment. Our team will review it.",
    })
  }

  return (
    <div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Discussion
        </CardTitle>
        <CardDescription>Share your experiences and insights about this scam</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No comments yet. Be the first to share your insights!
          </div>
        ) : (
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className={index !== comments.length - 1 ? "pb-6 border-b" : ""}
              >
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={comment.userAvatar || "/placeholder.svg"} alt={comment.userName} />
                    <AvatarFallback>{comment.userName.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">{comment.userName}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {format(new Date(comment.date), "MMM d, yyyy 'at' h:mm a")}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm">{comment.content}</p>

                    <div className="flex items-center gap-4 pt-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 text-muted-foreground hover:text-foreground"
                        onClick={() => handleLike(comment.id)}
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span className="text-xs">{comment.likes}</span>
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 text-muted-foreground hover:text-foreground"
                        onClick={() => handleDislike(comment.id)}
                      >
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        <span className="text-xs">{comment.dislikes}</span>
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 text-muted-foreground hover:text-foreground"
                        onClick={() => handleReport(comment.id)}
                      >
                        <Flag className="h-4 w-4 mr-1" />
                        <span className="text-xs">Report</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col space-y-4 pt-4 border-t">
        <div className="flex w-full gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder-user.jpg" alt="Your Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <Textarea
              placeholder="Share your experience or insights about this scam..."
              className="min-h-[100px] resize-none"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />

            <div className="flex justify-end">
              <Button onClick={handleSubmitComment} disabled={!newComment.trim() || isSubmitting} className="gap-2">
                {isSubmitting ? (
                  <>Posting...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Post Comment
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </CardFooter>
    </div>
  )
}
