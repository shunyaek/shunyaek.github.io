# Contact Form GitHub Integration Setup

The contact form is designed to create GitHub issues when submissions are received. This provides a centralized way to track and manage all customer inquiries.

## Required Environment Variables

Add these to your `.env.local` file:

```bash
# GitHub Personal Access Token (with repo access)
GITHUB_TOKEN=your_github_token_here

# GitHub repository details
GITHUB_OWNER=shunyaek
GITHUB_REPO=shunyaek.github.io
```

## GitHub Token Setup

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token (classic)
3. Select the following scopes:
   - `repo` (Full control of private repositories)
   - `public_repo` (Access public repositories)
4. Copy the token and add it to your environment variables

## How It Works

When a user submits the contact form:

1. **Form Validation**: The submission is validated using Zod schemas
2. **GitHub Issue Creation**: A new issue is created with:
   - **Title**: "New Contact Form Submission: [Name] from [Company]"
   - **Body**: Formatted markdown with all form data
   - **Labels**: Automatically tagged as contact-form
3. **Response**: User receives confirmation message
4. **Notifications**: GitHub will notify you via your notification preferences

## Issue Format

Each issue will contain:

- Contact information (name, e-mail, company, role)
- Full message content
- Additional metadata (how they heard about you, newsletter signup)
- Timestamp

## Labels

Issues are automatically labeled for easy filtering:

- `contact-form` (all submissions)

## Fallback Behavior

If the GitHub token is not configured:
- Form submissions will still be accepted
- Data will be logged to console (development only)
- Users will receive success confirmation
- No issues will be created

## Benefits

1. **Centralized Tracking**: All inquiries in one place
2. **Team Collaboration**: Multiple team members can see and respond
3. **Search & Filter**: Use GitHub's powerful search and label filtering
4. **Automation**: Can trigger GitHub Actions for follow-up workflows
5. **History**: Complete audit trail of all customer interactions
6. **Integration**: Links naturally with your development workflow

## Privacy Considerations

- Form data is transmitted securely via HTTPS
- GitHub issues are private to your repository (if private repo)
- Consider data retention policies for customer information
- Users explicitly consent to data processing via privacy checkbox

## Testing

To test the integration:

1. Set up the environment variables
2. Submit a test form on your site
3. Check your GitHub repository for the new issue
4. Verify all form data is properly formatted in the issue body 