"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, AlertCircle, Send } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid e-mail address"),
  company: z.string().optional(),
  role: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  hearAboutUs: z.string().optional(),
  newsletter: z.boolean().default(false),
  privacy: z.boolean().refine(val => val === true, "You must accept the privacy policy")
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ConnectSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      newsletter: false,
      privacy: false
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again or e-mail us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <section className="w-full py-12 md:py-16 lg:py-20 snap-start">
        <div className="container relative z-10 px-4 md:px-6 max-w-2xl mx-auto text-center">
          <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-playfair text-2xl font-bold mb-4">thank you for reaching out!</h2>
            <p className="text-muted-foreground mb-6">
              we've received your message and will get back to you within 24 hours.
              In the meantime, feel free to explore our case studies or connect with us on social media.
            </p>
            <Button onClick={() => setSubmitStatus('idle')} variant="outline">
              send another message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 snap-start">
      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm mb-4 sm:mb-6">
            <span className="font-medium font-urbanist">connect</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground italic font-urbanist hidden sm:inline">no pitch. just conversation</span>
            <span className="text-muted-foreground italic font-urbanist sm:hidden">no pitch. just conversation</span>
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6">
            <span className="brand-gradient-text">let's build something meaningful, together</span>
          </h2>

          <p className="lead-text text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0">
            we don't do hard sells. we don't do bloated decks. and we definitely don't do copy-paste proposals.
            what we do is listen — really listen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Column - Info */}
          <div className="space-y-6 lg:sticky lg:top-20">
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <span className="text-sm">early-stage founder looking for a product-minded engineering partner</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <span className="text-sm">platform team dealing with growing infrastructure complexity</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <span className="text-sm">business leader trying to untangle technical debt</span>
              </div>
            </div>

            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <p className="text-sm font-medium mb-2">we keep things simple:</p>
              <p className="text-sm text-muted-foreground">
                one honest conversation to see if we're a good fit. no buzzwords, no smoke, no mirrors.
                just a clear-headed chat about your goals, challenges, and how we might help.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <p className="text-sm font-medium mb-2">direct contact:</p>
              <p className="text-sm text-muted-foreground mb-2">
                prefer an e-mail? write to us directly at{' '}
                <a href="mailto:01@shunyaek.se" className="text-primary hover:underline">
                  01@shunyaek.se
                </a>
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                prefer a call? call us directly at{' '}
                <a href="tel:+917818888887" className="text-primary hover:underline">
                  +91 781 888 8887
                </a>
              </p>
              <p className="text-xs text-muted-foreground">
                we typically respond within 24 hours
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="bg-background/40 backdrop-blur-sm border h-fit">
            <CardHeader>
              <CardTitle className="font-playfair text-xl">start the conversation</CardTitle>
              <CardDescription>
                tell us about your project and we'll get back to you with thoughtful questions, not a sales pitch.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="your full name"
                      {...register("name")}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      e-mail <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@company.com"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Company and Role Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">company</Label>
                    <Input
                      id="company"
                      placeholder="your company name"
                      {...register("company")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">your role</Label>
                    <Input
                      id="role"
                      placeholder="e.g. cto, founder, product manager"
                      {...register("role")}
                    />
                  </div>
                </div>



                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    tell us about your project <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="what are you trying to build? What challenges are you facing? what does success look like?"
                    rows={4}
                    {...register("message")}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* How did you hear about us */}
                <div className="space-y-2">
                  <Label htmlFor="hearAboutUs">how did you hear about us?</Label>
                  <Select onValueChange={(value: string) => setValue("hearAboutUs", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">google search</SelectItem>
                      <SelectItem value="social-media">social network (instagram, facebook, linkedin, x, bluesky, etc.)</SelectItem>
                      <SelectItem value="referral">referral from colleague</SelectItem>
                      <SelectItem value="github">github</SelectItem>
                      <SelectItem value="blog">blog</SelectItem>
                      <SelectItem value="conference">conference / event</SelectItem>
                      <SelectItem value="other">other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={watch("newsletter")}
                      onCheckedChange={(checked: boolean) => setValue("newsletter", checked)}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      i'd like to receive occasional updates about shunyaek.se insights and case studies
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={watch("privacy")}
                      onCheckedChange={(checked: boolean) => setValue("privacy", checked)}
                      className={errors.privacy ? "border-red-500" : ""}
                    />
                    <Label htmlFor="privacy" className="text-sm">
                      i agree to the{' '}
                      <a href="/privacy" className="text-primary hover:underline">
                        privacy policy
                      </a>{' '}
                      and consent to being contacted about my inquiry <span className="text-red-500">*</span>
                    </Label>
                  </div>
                  {errors.privacy && (
                    <p className="text-sm text-red-500">{errors.privacy.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      sending message...
                    </>
                  ) : (
                    <>
                      send message
                    </>
                  )}
                </Button>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errorMessage}</AlertDescription>
                  </Alert>
                )}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            We respect your privacy. Your information will only be used to respond to your inquiry and,
            if you opt in, to send occasional updates. We never share your data with third parties.
          </p>
        </div>
      </div>
    </section>
  )
} 