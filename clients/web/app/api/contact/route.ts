import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Form validation schema (should match the frontend)
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

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'shunyaek'
const GITHUB_REPO = process.env.GITHUB_REPO || 'shunyaek.github.io'

async function createGitHubIssue(data: ContactFormData) {
  const {
    name,
    email,
    company,
    role,
    message,
    hearAboutUs,
    newsletter
  } = data

  // Format the issue title
  const title = `connect: ${name}${company ? ` from ${company}` : ''}`

  // Format the issue body
  const body = `
## contact information
- **name**: ${name}
- **e-mail**: ${email}
${company ? `- **company**: ${company}` : ''}
${role ? `- **role**: ${role}` : ''}

## message
${message}

## additional information
${hearAboutUs ? `- **how they heard about us**: ${hearAboutUs}` : ''}
- **newsletter sign-up**: ${newsletter ? 'yes' : 'no'}

---
*submitted via website contact form on ${new Date().toISOString()}*
`

  // Create labels for better organization
  const labels = ['contact-form', 'shunyaek.se']

  const issueData = {
    title,
    body,
    labels
  }

  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/issues`,
    {
      method: 'POST',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issueData),
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`GitHub API Error: ${response.status} ${errorText}`)
  }

  return response.json()
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()

    // Validate the form data
    const validatedData = contactFormSchema.parse(body)

    // Check if GitHub integration is configured
    if (!GITHUB_TOKEN) {
      console.error('GitHub token not configured')
      // For development, you might want to just log the data
      console.log('Contact form submission (GitHub not configured):', validatedData)
      return NextResponse.json({ success: true, message: 'Form submitted successfully' })
    }

    // Create GitHub issue
    const issue = await createGitHubIssue(validatedData)

    console.log(`Contact form submission created GitHub issue #${issue.number}`)

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'thank you for your message! We will get back to you soon.',
      issueNumber: issue.number
    })

  } catch (error) {
    console.error('Error processing contact form:', error)

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors
        },
        { status: 400 }
      )
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request. Please try again later.'
      },
      { status: 500 }
    )
  }
} 