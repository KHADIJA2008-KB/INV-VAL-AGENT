# Invoice Desk on Vercel

## What this version does
- Hosts the existing Invoice Desk interface.
- Sends invoice-ID review requests to `/api/review`.
- Keeps the GALAXAI API key on the server in the `GALAXAI_API_KEY` environment variable.
- Sends `input`, `conversationId`, `files`, `invoice_id`, and `test_mode` to the workflow.

This first deployment is for invoice-ID reviews. The current HTML does not yet include an invoice file-upload control, so `files` is sent as an empty array.

## Deploy

1. Upload this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. In the Vercel project, open **Settings → Environment Variables**.
4. Add:
   - Name: `GALAXAI_API_KEY`
   - Value: your GALAXAI API key
   - Environments: Production, Preview, Development (as needed)
5. Deploy or redeploy the project.
6. Open the deployed URL and try `review INV-003`.

Do not put the API key in `public/index.html`, GitHub, or any browser-side JavaScript.

## Local development

Install the Vercel CLI, run `vercel dev`, and add `GALAXAI_API_KEY` to a local `.env` file. Do not commit `.env`.

## Important response note
The workflow screenshot provided so far shows the `Draft Rationale` node output, not the complete HTTP response from **Run workflow**. The proxy currently returns the upstream JSON unchanged. The Invoice Desk response parser may need a small adjustment once the complete API response is available.
