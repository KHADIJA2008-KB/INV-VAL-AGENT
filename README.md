# Invoice Desk
### AI-Powered Invoice Validation & Review System

Invoice Desk is an AI-powered invoice validation system designed to streamline finance operations by automating invoice checks, identifying discrepancies, and supporting human review before financial decisions are made.

The system uses **GALAXAI Automation Studio** to orchestrate invoice validation workflows and provides a web-based interface for reviewing invoice cases and their validation results.

## Overview

Manual invoice verification can be time-consuming and prone to errors. Invoice Desk aims to simplify this process by checking invoice information against supplier records, purchase orders, and goods-received notes.

The system identifies inconsistencies, generates validation findings, and provides recommendations to support finance teams in reviewing invoices.

## Key Features

- **Automated Invoice Validation:** Checks invoice information and required fields.
- **Supplier Verification:** Compares supplier information against stored supplier records.
- **Purchase Order Matching:** Validates invoice details against purchase orders.
- **Goods-Received Note Matching:** Checks ordered and received quantities against invoiced quantities.
- **Discrepancy Detection:** Identifies mismatched quantities, pricing, references, and supplier bank details.
- **AI-Generated Recommendations:** Generates explanations and recommendations based on validation results.
- **Human-in-the-Loop Review:** Supports human oversight for invoice exceptions and approval decisions.
- **Web-Based Invoice Desk:** Provides an interface for reviewing invoice cases and validation findings.

## System Architecture

The project consists of three main components:

1. **Frontend:** Invoice Desk web interface for submitting review requests and displaying invoice validation results.
2. **Backend Integration:** Vercel serverless API layer designed to securely communicate with GALAXAI.
3. **AI Workflow:** GALAXAI Automation Studio workflow responsible for invoice validation, reference matching, recommendation generation, and human review.

### Workflow

```text
Invoice Review Request
        |
        v
Invoice Desk Frontend
        |
        v
Vercel API Endpoint
        |
        v
GALAXAI Automation Workflow
        |
        v
Validate Invoice Fields
        |
        v
Verify Supplier Records
        |
        v
Match Purchase Orders
        |
        v
Verify Goods-Received Notes
        |
        v
Identify Discrepancies
        |
        v
Generate Recommendation
        |
        v
Human Review & Decision
```

## Technology Stack

| Component | Technology |
|---|---|
| AI Workflow Automation | GALAXAI Automation Studio |
| Frontend | HTML, CSS, JavaScript |
| API Integration | REST API, JSON |
| Deployment | Vercel |
| Version Control | Git, GitHub |

## API Integration

The application is designed to communicate with the GALAXAI workflow through its execution API.

The API integration uses:

- HTTP POST requests
- JSON request payloads
- API-key authentication
- Invoice information and optional file inputs

For security, the GALAXAI API key should be stored as a Vercel environment variable rather than exposed in frontend JavaScript.

Required environment variable:

```env
GALAXAI_API_KEY=your_api_key
```

Never commit actual API credentials to GitHub.

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/INV-VAL-AGENT.git
```

### 2. Navigate to the project

```bash
cd INV-VAL-AGENT
```

### 3. Install dependencies

If the project contains a `package.json`:

```bash
npm install
```

### 4. Run locally

Follow the development command defined in `package.json`. For example:

```bash
npm run dev
```

### 5. Configure environment variables

Add the required GALAXAI API key to your local environment configuration and to Vercel's Environment Variables settings.

Do not expose the key in client-side code.

## Testing

The workflow can be evaluated using different invoice scenarios:

- Valid invoice with matching supplier and purchase order details.
- Invoice with missing required information.
- Invoice with mismatched quantities or pricing.
- Supplier bank account mismatch.
- Duplicate invoice scenario.
- Cases requiring human review.

Testing should verify both the workflow's validation output and how the frontend displays the returned results.

## Current Development Scope

The current project includes the GALAXAI validation workflow and Invoice Desk frontend.

The following capabilities require further implementation and end-to-end verification:

- Complete frontend-to-GALAXAI API integration.
- PDF invoice upload and processing.
- Automated invoice intake through email.
- End-to-end testing of invoice submission and review.

## Security & Financial Controls

- Store API credentials in server-side environment variables.
- Validate incoming requests and uploaded files.
- Avoid exposing sensitive supplier and invoice information.
- Require appropriate human oversight for financial decisions.
- The system does not execute payments.

## Future Improvements

- Email-based invoice intake using n8n.
- Automated PDF extraction and invoice data processing.
- Invoice history and audit trails.
- Improved exception handling and reporting.
- Role-based access control.
- Enhanced monitoring and error logging.

## Project Purpose

Invoice Desk explores how AI workflow automation and human-in-the-loop systems can improve invoice verification processes, reduce repetitive manual checks, and support more reliable finance operations.

---

**Project:** Invoice Desk  
**Category:** AI Automation / FinTech  
**Status:** Prototype under development
