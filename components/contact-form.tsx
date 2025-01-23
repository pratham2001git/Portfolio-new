"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    // Reset form
    event.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input type="text" placeholder="Name" required className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
      </div>
      <div>
        <Input type="email" placeholder="Email" required className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
      </div>
      <div>
        <Textarea placeholder="Message" required className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
      </div>
      <Button type="submit" disabled={isSubmitting} className="place-content-center w-full bg-white/20 hover:bg-white/30 text-white">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

