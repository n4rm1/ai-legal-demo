# 🧠 AI Legal Assistant

An intelligent legal contract analyzer that extracts key information from legal documents using AI. Built with Next.js and OpenAI's GPT-4o model.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/n4rm1/ai-legal-demo)

## 🌐 Live Demo

> **Note**: Add your deployment URL here once deployed to Vercel or other hosting platform

## ✨ Features

- **Contract Analysis**: Paste any legal contract and extract structured information
- **Multilingual Support**: Handles contracts in both Spanish and English
- **AI-Powered**: Uses OpenAI's GPT-4o for accurate document analysis
- **Modern UI**: Clean, responsive interface built with shadcn/ui
- **Real-time Processing**: Instant analysis and results display
- **Structured Output**: Organized extraction of key contract elements

## 🔍 Extracted Information

The AI analyzes contracts and extracts:

- **Signing Parties**: All parties involved in the contract
- **Start Date**: Contract effective date
- **End Date**: Contract expiration date
- **Duration**: Contract term length
- **Penalties**: Fines, fees, or consequences mentioned
- **Contract Purpose**: Main objective of the agreement
- **Key Clauses**: Important terms and conditions

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **AI**: [OpenAI GPT-4o](https://platform.openai.com/) via AI SDK
- **UI**: [shadcn/ui](https://ui.shadcn.com/) + [Tailwind CSS](https://tailwindcss.com/)
- **Schema Validation**: [Zod](https://zod.dev/)
- **TypeScript**: Full type safety
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/n4rm1/ai-legal-demo.git
   cd ai-legal-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

1. **Paste Contract**: Copy and paste your legal contract text into the input area (supports both Spanish and English)
2. **Analyze**: Click "Extract Key Info" to process the document
3. **Review Results**: View the structured information in organized cards (always displayed in English)
4. **Export**: Use the extracted data for your business needs

## 🏗️ Project Structure

```
ai-legal-demo/
├── app/
│   ├── api/
│   │   └── extract/
│   │       └── route.ts          # OpenAI API integration
│   ├── types/
│   │   └── contract.ts           # TypeScript interfaces
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # App layout
│   └── page.tsx                  # Main UI component
├── components/
│   └── ui/                       # shadcn/ui components
├── lib/
│   └── utils.ts                  # Utility functions
└── public/                       # Static assets
```

## 🤖 API Reference

### POST `/api/extract`

Extract information from a legal contract.

**Request Body:**
```json
{
  "contractText": "Your legal contract text here..."
}
```

**Response:**
```json
{
  "signingParties": ["Party A", "Party B"],
  "startDate": "2024-01-01",
  "endDate": "2024-12-31",
  "duration": "1 year",
  "penalties": ["Late payment fee of $100"],
  "contractPurpose": "Software licensing agreement",
  "keyClauses": ["Payment terms", "Intellectual property", "Termination"]
}
```

## 📋 Sample Contracts

Try the app with these sample contracts:

### English Contract
```
SERVICE AGREEMENT

This agreement is entered into on January 15, 2024, between:

- "Tech Solutions Inc.", a corporation registered in Delaware, USA
- "Global Marketing Ltd.", a company incorporated in Ontario, Canada

Purpose: Tech Solutions Inc. will provide software development services to Global Marketing Ltd. for the creation of a customer management system.

Term: This agreement is effective from February 1, 2024, to January 31, 2025, for a period of 12 months.

Penalties: Early termination without cause will result in a penalty of $5,000 USD.

Both parties agree to maintain confidentiality of all shared information during the contract term.

Signed in New York, NY.
```

### Spanish Contract
```
CONTRATO DE SERVICIOS

Este contrato se firma el 15 de enero de 2024 entre:

- "Consultoría Legal S.A.", empresa registrada en España
- "Innovación Verde Ltd.", con sede en México

Objeto del contrato: La empresa Consultoría Legal brindará servicios de asesoría jurídica para Innovación Verde en temas relacionados con propiedad intelectual y cumplimiento normativo.

Duración: Este acuerdo tiene una vigencia de 1 año, desde el 1 de febrero de 2024 hasta el 31 de enero de 2025.

Penalizaciones: La cancelación anticipada sin causa justificada implicará una penalización de $8,000 USD.

Ambas partes acuerdan mantener la confidencialidad de la información compartida durante la vigencia del contrato.

Firmado en Ciudad de México.
```

## 🔒 Security

- Environment variables are used for API keys
- No contract data is stored permanently
- All processing happens in real-time
- Sensitive contract data is not logged or cached
- HTTPS encryption for all API communications

## 🏗️ Technical Architecture & Design Decisions

### Complete Technical Flow
```
User Input → Frontend (React/Next.js) → API Route (/api/extract) → AI Processing (OpenAI GPT-4o) → Structured Response → Dashboard Display
```

**Components:**
- **Frontend**: Next.js 15 with App Router, shadcn/ui components
- **Backend**: Next.js API routes for serverless processing
- **AI Integration**: OpenAI GPT-4o via AI SDK with structured generation
- **Storage**: No persistent storage (real-time processing only)
- **Validation**: Zod schema for guaranteed data structure

### AI Integration Strategy

**Model Choice**: OpenAI GPT-4o selected for:
- Superior multilingual capabilities (Spanish/English)
- Excellent structured output generation
- Legal document comprehension
- Consistent API reliability

**Prompt Engineering**:
```typescript
// Explicit multilingual support with structured output
const prompt = `
  Analyze the following legal contract and extract key information. 
  The contract may be written in Spanish or English - handle both languages accurately.
  Always return extracted information in English for consistency.
  
  Contract text: ${contractText}
`;
```

**Data Accuracy Assurance**:
- Zod schema validation ensures output structure
- AI SDK's `generateObject` prevents JSON parsing errors
- Explicit prompt instructions for consistency
- Type-safe TypeScript interfaces
- Error handling for invalid responses

### Dashboard & Visualization

**UI Design Philosophy**:
- Dark theme professional interface
- Card-based layout for easy scanning
- Color-coded sections (parties, dates, penalties)
- Responsive design for mobile/desktop
- Clear typography and iconography

**Data Presentation**:
- **Signing Parties**: Badge components for easy identification
- **Dates & Duration**: Grid layout with calendar icons
- **Contract Purpose**: Full-text display with emphasis
- **Penalties**: Bulleted list with warning icons
- **Key Clauses**: Organized list format

### Security Measures

**Sensitive Data Protection**:
- No database storage (ephemeral processing)
- Environment variables for API keys
- No client-side API key exposure
- Real-time processing without logging
- HTTPS-only communication

### Development Approach: AI vs Manual

**AI-Assisted Development**:
- ✅ UI component generation (v0.dev)
- ✅ Code scaffolding and boilerplate
- ✅ Documentation enhancement
- ✅ API integration patterns

**Manual Development**:
- ✅ Architecture decisions and flow design
- ✅ Prompt engineering and testing
- ✅ Error handling and edge cases
- ✅ Type safety and validation logic
- ✅ Security implementation
- ✅ Performance optimization

**Reasoning**: Critical business logic, security, and architecture require human oversight, while UI and boilerplate benefit from AI acceleration.

## 🎯 Technical Test Compliance

This project demonstrates:
- **Complete technical flow** from input to visualization
- **AI integration** with OpenAI for legal document processing
- **Structured data extraction** using advanced prompt engineering
- **Modern web technologies** (Next.js, TypeScript, shadcn/ui)
- **Security best practices** for sensitive legal data
- **Bilingual support** for Spanish and English contracts
- **Real-time processing** without persistent storage
- **Professional dashboard** interface for business use

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Support

For questions or issues, please open an issue in the repository.

---

**Built with ❤️ using Next.js and OpenAI**
