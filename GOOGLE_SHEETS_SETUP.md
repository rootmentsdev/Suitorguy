# Google Sheets Integration Setup Guide

## Step 1: Set up Google Apps Script

1. **Open Google Apps Script:**
   - Go to [script.google.com](https://script.google.com)
   - Click "New Project"

2. **Replace the default code:**
   - Delete the default `myFunction()` code
   - Copy and paste the code from `google-apps-script.js` file

3. **Save the project:**
   - Click "Save" (Ctrl+S)
   - Give your project a name like "Contact Form Handler"

## Step 2: Deploy as Web App

1. **Deploy the script:**
   - Click "Deploy" → "New deployment"
   - Click the gear icon next to "Type" and select "Web app"

2. **Configure deployment:**
   - **Description:** "Contact Form Handler v1"
   - **Execute as:** "Me"
   - **Who has access:** "Anyone" (this allows your website to submit data)
   - Click "Deploy"

3. **Authorize permissions:**
   - Click "Review permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to [Project Name] (unsafe)"
   - Click "Allow"

4. **Copy the Web App URL:**
   - Copy the URL that looks like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
   - This is your `GOOGLE_SCRIPT_URL`

## Step 3: Update Your React Component

1. **Replace the placeholder URL:**
   - In `src/components/ContactUs.jsx`
   - Find the line: `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`
   - Replace `YOUR_SCRIPT_ID` with your actual script ID from the deployed URL

## Step 4: Test the Integration

1. **Test the form:**
   - Fill out the contact form on your website
   - Submit the form
   - Check your Google Sheet to see if the data appears

2. **Verify the data:**
   - Open your Google Sheet: https://docs.google.com/spreadsheets/d/1hyvfeUkIJKcx5dwJKvQbKylE95wtAnYpb5JIxHPoCgU/edit
   - Look for new rows with the submitted data
   - Columns should be: Timestamp, Full Name, Email, Phone, Message

## Troubleshooting

### If submissions don't appear in the sheet:
1. Check the Google Apps Script execution logs
2. Verify the Web App URL is correct
3. Ensure the sheet name matches "Enquiry Sheet" or the script will use the active sheet
3. Check browser console for any errors

### If you get CORS errors:
- The current setup uses `mode: 'no-cors'` which is required for Google Apps Script
- This means you won't see the response, but submissions should still work

### If you need to update the script:
1. Make changes in Google Apps Script
2. Click "Deploy" → "Manage deployments"
3. Click the pencil icon to edit
4. Update the version number
5. Click "Deploy"

## Security Notes

- The Web App is set to "Anyone" access, which is required for public websites
- The script only accepts POST requests and validates the data structure
- Consider adding additional validation or rate limiting if needed

## Data Structure

The script will create columns in this order:
1. **Timestamp** - When the enquiry was submitted
2. **Full Name** - User's full name
3. **Email** - User's email address
4. **Phone** - User's phone number
5. **Message** - User's message

All data is stored in your Google Sheet and can be exported or processed as needed.
