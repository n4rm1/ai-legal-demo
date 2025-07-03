# 🧠 AI Legal Assistant 

An intelligent legal contract analyzer that extracts key information from legal documents using AI. Built with Next.js and OpenAI's GPT-4o model.

> 🇪🇸 **[Versión en Español disponible abajo](#-asistente-legal-con-ia)** | 🇺🇸 **English version above**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/n4rm1/ai-legal-demo)

## 🌐 Live Demo

> **Note**: https://ai-legal-demo.vercel.app/

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

## 🧪 Parte 5: Prueba Práctica - Implementación Detallada

### 🎯 Demo Funcional Completa
Este proyecto implementa una **demo funcional completa** (frontend + backend) que simula exactamente cómo usar IA para extraer información de contratos legales.

### 🤖 Cómo Uso IA para Obtener Datos Clave

**1. Integración con OpenAI GPT-4o**
```typescript
// app/api/extract/route.ts
const { object } = await generateObject({
  model: openai("gpt-4o"),
  schema: extractionSchema,
  prompt: `
    Analyze the following legal contract and extract key information. 
    The contract may be written in Spanish or English - handle both languages accurately.
    Always return extracted information in English for consistency.
    
    Contract text: ${contractText}
  `,
})
```

**2. Extracción Estructurada con Zod**
```typescript
const extractionSchema = z.object({
  signingParties: z.array(z.string()).describe("Names of all parties signing the contract"),
  startDate: z.string().describe("Contract start date or effective date"),
  endDate: z.string().describe("Contract end date or expiration date"),
  duration: z.string().describe("Contract duration or term length"),
  penalties: z.array(z.string()).describe("Penalties, fines, or consequences"),
  contractPurpose: z.string().describe("Main purpose or objective of the contract"),
  keyClauses: z.array(z.string()).describe("Important clauses, terms, or conditions"),
})
```

### 🔗 Conexión de Lógica IA con la Aplicación

**Frontend → API → IA → Dashboard**

1. **Frontend (page.tsx)**: Usuario pega texto del contrato
2. **API Route (/api/extract)**: Procesa el texto con IA
3. **IA Processing**: GPT-4o extrae datos estructurados
4. **Dashboard**: Muestra información organizada en tarjetas

```typescript
// Conexión Frontend-Backend
const response = await fetch("/api/extract", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ contractText }),
})
const extractedData = await response.json()
```

### 🛠️ Qué Hice Manualmente vs Con IA

#### ✋ **Desarrollo Manual (Control Total)**
- **Arquitectura del Sistema**: Decidí usar Next.js App Router para simplicidad
- **Prompt Engineering**: Diseñé el prompt específico para contratos legales bilingües
- **Validación de Datos**: Implementé Zod schema para garantizar estructura correcta
- **Manejo de Errores**: Lógica de try/catch y respuestas de error estructuradas
- **Seguridad**: Variables de entorno, no almacenamiento persistente
- **Tipos TypeScript**: Interfaces para type safety completa
- **Lógica de Negocio**: Flujo de procesamiento y transformación de datos

#### 🤖 **Desarrollo Asistido por IA**
- **UI Components**: Generé el frontend inicial con v0.dev
- **Componentes shadcn/ui**: Instalación y configuración automática
- **Código Boilerplate**: Estructura inicial de archivos y imports
- **Documentación**: Mejoras en README y comentarios
- **Estilos CSS**: Refinamiento de la interfaz visual

#### 🎯 **Decisiones de Control**
```typescript
// MANUAL: Lógica crítica de negocio
export async function POST(request: Request) {
  try {
    const { contractText } = await request.json()
    
    // Validación manual
    if (!contractText || typeof contractText !== "string") {
      return Response.json({ error: "Contract text is required" }, { status: 400 })
    }
    
    // Procesamiento con IA (controlado)
    const { object } = await generateObject({
      model: openai("gpt-4o"),
      schema: extractionSchema, // Schema definido manualmente
      prompt: customPrompt,     // Prompt diseñado manualmente
    })
    
    return Response.json(object)
  } catch (error) {
    // Manejo de errores manual
    return Response.json({ error: "Failed to extract" }, { status: 500 })
  }
}
```

### 📊 **Demostración Práctica**

**Puedes probar la demo con contratos reales:**
1. Ve a: https://ai-legal-demo.vercel.app/
2. Pega un contrato en español o inglés
3. Ve cómo la IA extrae automáticamente:
   - Partes firmantes
   - Fechas de inicio/fin
   - Duración del contrato
   - Penalizaciones
   - Propósito del contrato
   - Cláusulas clave

**Contratos de ejemplo incluidos en el README para testing inmediato.**

### 🔍 **Repositorio Comentado**
- **Código fuente**: https://github.com/n4rm1/ai-legal-demo
- **Commits detallados**: Cada feature con descripción clara
- **Documentación completa**: README con explicaciones técnicas
- **Estructura clara**: Archivos organizados por funcionalidad

**Esta implementación demuestra dominio completo del flujo IA → Aplicación → Usuario para procesamiento de documentos legales.**

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

---

# 🧠 Asistente Legal con IA

Un analizador inteligente de contratos legales que extrae información clave de documentos legales usando IA. Construido con Next.js y el modelo GPT-4o de OpenAI.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/n4rm1/ai-legal-demo)

## 🌐 Demo en Vivo

> **Nota**: https://ai-legal-demo.vercel.app/

## ✨ Características

- **Análisis de Contratos**: Pega cualquier contrato legal y extrae información estructurada
- **Soporte Multiidioma**: Maneja contratos en español e inglés
- **Impulsado por IA**: Usa GPT-4o de OpenAI para análisis preciso de documentos
- **Interfaz Moderna**: Interfaz limpia y responsiva construida con shadcn/ui
- **Procesamiento en Tiempo Real**: Análisis instantáneo y visualización de resultados
- **Salida Estructurada**: Extracción organizada de elementos clave del contrato

## 🔍 Información Extraída

La IA analiza contratos y extrae:

- **Partes Firmantes**: Todas las partes involucradas en el contrato
- **Fecha de Inicio**: Fecha efectiva del contrato
- **Fecha de Fin**: Fecha de expiración del contrato
- **Duración**: Duración del término del contrato
- **Penalizaciones**: Multas, tarifas o consecuencias mencionadas
- **Propósito del Contrato**: Objetivo principal del acuerdo
- **Cláusulas Clave**: Términos y condiciones importantes

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 15](https://nextjs.org/) con App Router
- **IA**: [OpenAI GPT-4o](https://platform.openai.com/) vía AI SDK
- **UI**: [shadcn/ui](https://ui.shadcn.com/) + [Tailwind CSS](https://tailwindcss.com/)
- **Validación de Esquemas**: [Zod](https://zod.dev/)
- **TypeScript**: Seguridad de tipos completa
- **Despliegue**: [Vercel](https://vercel.com/)

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- Clave API de OpenAI

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/n4rm1/ai-legal-demo.git
   cd ai-legal-demo
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crear un archivo `.env` en el directorio raíz:
   ```env
   OPENAI_API_KEY=tu_clave_api_openai_aqui
   ```

4. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir tu navegador**
   
   Navegar a [http://localhost:3000](http://localhost:3000)

## 📖 Uso

1. **Pegar Contrato**: Copia y pega el texto de tu contrato legal en el área de entrada (soporta español e inglés)
2. **Analizar**: Haz clic en "Extract Key Info" para procesar el documento
3. **Revisar Resultados**: Ve la información estructurada en tarjetas organizadas (siempre se muestra en inglés)
4. **Exportar**: Usa los datos extraídos para tus necesidades empresariales

## 🏗️ Estructura del Proyecto

```
ai-legal-demo/
├── app/
│   ├── api/
│   │   └── extract/
│   │       └── route.ts          # Integración API OpenAI
│   ├── types/
│   │   └── contract.ts           # Interfaces TypeScript
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout de la app
│   └── page.tsx                  # Componente UI principal
├── components/
│   └── ui/                       # Componentes shadcn/ui
├── lib/
│   └── utils.ts                  # Funciones utilitarias
└── public/                       # Recursos estáticos
```

## 🤖 Referencia de API

### POST `/api/extract`

Extrae información de un contrato legal.

**Cuerpo de la Petición:**
```json
{
  "contractText": "Tu texto de contrato legal aquí..."
}
```

**Respuesta:**
```json
{
  "signingParties": ["Parte A", "Parte B"],
  "startDate": "2024-01-01",
  "endDate": "2024-12-31",
  "duration": "1 año",
  "penalties": ["Multa por pago tardío de $100"],
  "contractPurpose": "Acuerdo de licencia de software",
  "keyClauses": ["Términos de pago", "Propiedad intelectual", "Terminación"]
}
```

## 📋 Contratos de Ejemplo

Prueba la aplicación con estos contratos de ejemplo:

### Contrato en Inglés
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

### Contrato en Español
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

## 🔒 Seguridad

- Variables de entorno se usan para claves API
- No se almacenan datos de contratos permanentemente
- Todo el procesamiento ocurre en tiempo real
- Los datos sensibles de contratos no se registran ni almacenan en caché
- Cifrado HTTPS para todas las comunicaciones API

## 🏗️ Arquitectura Técnica y Decisiones de Diseño

### Flujo Técnico Completo
```
Entrada del Usuario → Frontend (React/Next.js) → Ruta API (/api/extract) → Procesamiento IA (OpenAI GPT-4o) → Respuesta Estructurada → Visualización Dashboard
```

**Componentes:**
- **Frontend**: Next.js 15 con App Router, componentes shadcn/ui
- **Backend**: Rutas API Next.js para procesamiento serverless
- **Integración IA**: OpenAI GPT-4o vía AI SDK con generación estructurada
- **Almacenamiento**: Sin almacenamiento persistente (solo procesamiento en tiempo real)
- **Validación**: Esquema Zod para estructura de datos garantizada

### Estrategia de Integración IA

**Elección del Modelo**: OpenAI GPT-4o seleccionado por:
- Capacidades multiidioma superiores (español/inglés)
- Excelente generación de salida estructurada
- Comprensión de documentos legales
- Confiabilidad consistente de API

**Ingeniería de Prompts**:
```typescript
// Soporte multiidioma explícito con salida estructurada
const prompt = `
  Analiza el siguiente contrato legal y extrae información clave. 
  El contrato puede estar escrito en español o inglés - maneja ambos idiomas con precisión.
  Siempre devuelve la información extraída en inglés para consistencia.
  
  Texto del contrato: ${contractText}
`;
```

**Aseguramiento de Precisión de Datos**:
- Validación de esquema Zod asegura estructura de salida
- `generateObject` del AI SDK previene errores de análisis JSON
- Instrucciones explícitas de prompt para consistencia
- Interfaces TypeScript con seguridad de tipos
- Manejo de errores para respuestas inválidas

### Dashboard y Visualización

**Filosofía de Diseño UI**:
- Interfaz profesional con tema oscuro
- Layout basado en tarjetas para fácil escaneo
- Secciones codificadas por colores (partes, fechas, penalizaciones)
- Diseño responsivo para móvil/escritorio
- Tipografía e iconografía clara

**Presentación de Datos**:
- **Partes Firmantes**: Componentes badge para fácil identificación
- **Fechas y Duración**: Layout de grid con iconos de calendario
- **Propósito del Contrato**: Visualización de texto completo con énfasis
- **Penalizaciones**: Lista con viñetas con iconos de advertencia
- **Cláusulas Clave**: Formato de lista organizada

### Medidas de Seguridad

**Protección de Datos Sensibles**:
- Sin almacenamiento en base de datos (procesamiento efímero)
- Variables de entorno para claves API
- Sin exposición de clave API en el lado del cliente
- Procesamiento en tiempo real sin registro
- Comunicación solo HTTPS

### Enfoque de Desarrollo: IA vs Manual

**Desarrollo Asistido por IA**:
- ✅ Generación de componentes UI (v0.dev)
- ✅ Código base y plantillas
- ✅ Mejora de documentación
- ✅ Patrones de integración API

**Desarrollo Manual**:
- ✅ Decisiones de arquitectura y diseño de flujo
- ✅ Ingeniería de prompts y testing
- ✅ Manejo de errores y casos límite
- ✅ Seguridad de tipos y lógica de validación
- ✅ Implementación de seguridad
- ✅ Optimización de rendimiento

**Razonamiento**: La lógica crítica del negocio, seguridad y arquitectura requieren supervisión humana, mientras que UI y código plantilla se benefician de la aceleración IA.

## 🧪 Parte 5: Prueba Práctica - Implementación Detallada

### 🎯 Demo Funcional Completa
Este proyecto implementa una **demo funcional completa** (frontend + backend) que simula exactamente cómo usar IA para extraer información de contratos legales.

### 🤖 Cómo Uso IA para Obtener Datos Clave

**1. Integración con OpenAI GPT-4o**
```typescript
// app/api/extract/route.ts
const { object } = await generateObject({
  model: openai("gpt-4o"),
  schema: extractionSchema,
  prompt: `
    Analyze the following legal contract and extract key information. 
    The contract may be written in Spanish or English - handle both languages accurately.
    Always return extracted information in English for consistency.
    
    Contract text: ${contractText}
  `,
})
```

**2. Extracción Estructurada con Zod**
```typescript
const extractionSchema = z.object({
  signingParties: z.array(z.string()).describe("Names of all parties signing the contract"),
  startDate: z.string().describe("Contract start date or effective date"),
  endDate: z.string().describe("Contract end date or expiration date"),
  duration: z.string().describe("Contract duration or term length"),
  penalties: z.array(z.string()).describe("Penalties, fines, or consequences"),
  contractPurpose: z.string().describe("Main purpose or objective of the contract"),
  keyClauses: z.array(z.string()).describe("Important clauses, terms, or conditions"),
})
```

### 🔗 Conexión de Lógica IA con la Aplicación

**Frontend → API → IA → Dashboard**

1. **Frontend (page.tsx)**: Usuario pega texto del contrato
2. **API Route (/api/extract)**: Procesa el texto con IA
3. **IA Processing**: GPT-4o extrae datos estructurados
4. **Dashboard**: Muestra información organizada en tarjetas

```typescript
// Conexión Frontend-Backend
const response = await fetch("/api/extract", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ contractText }),
})
const extractedData = await response.json()
```

### 🛠️ Qué Hice Manualmente vs Con IA

#### ✋ **Desarrollo Manual (Control Total)**
- **Arquitectura del Sistema**: Decidí usar Next.js App Router para simplicidad
- **Prompt Engineering**: Diseñé el prompt específico para contratos legales bilingües
- **Validación de Datos**: Implementé Zod schema para garantizar estructura correcta
- **Manejo de Errores**: Lógica de try/catch y respuestas de error estructuradas
- **Seguridad**: Variables de entorno, no almacenamiento persistente
- **Tipos TypeScript**: Interfaces para type safety completa
- **Lógica de Negocio**: Flujo de procesamiento y transformación de datos

#### 🤖 **Desarrollo Asistido por IA**
- **UI Components**: Generé el frontend inicial con v0.dev
- **Componentes shadcn/ui**: Instalación y configuración automática
- **Código Boilerplate**: Estructura inicial de archivos e imports
- **Documentación**: Mejoras en README y comentarios
- **Estilos CSS**: Refinamiento de la interfaz visual

#### 🎯 **Decisiones de Control**
```typescript
// MANUAL: Lógica crítica de negocio
export async function POST(request: Request) {
  try {
    const { contractText } = await request.json()
    
    // Validación manual
    if (!contractText || typeof contractText !== "string") {
      return Response.json({ error: "Contract text is required" }, { status: 400 })
    }
    
    // Procesamiento con IA (controlado)
    const { object } = await generateObject({
      model: openai("gpt-4o"),
      schema: extractionSchema, // Schema definido manualmente
      prompt: customPrompt,     // Prompt diseñado manualmente
    })
    
    return Response.json(object)
  } catch (error) {
    // Manejo de errores manual
    return Response.json({ error: "Failed to extract" }, { status: 500 })
  }
}
```

### 📊 **Demostración Práctica**

**Puedes probar la demo con contratos reales:**
1. Ve a: https://ai-legal-demo.vercel.app/
2. Pega un contrato en español o inglés
3. Ve cómo la IA extrae automáticamente:
   - Partes firmantes
   - Fechas de inicio/fin
   - Duración del contrato
   - Penalizaciones
   - Propósito del contrato
   - Cláusulas clave

**Contratos de ejemplo incluidos en el README para testing inmediato.**

### 🔍 **Repositorio Comentado**
- **Código fuente**: https://github.com/n4rm1/ai-legal-demo
- **Commits detallados**: Cada feature con descripción clara
- **Documentación completa**: README con explicaciones técnicas
- **Estructura clara**: Archivos organizados por funcionalidad

**Esta implementación demuestra dominio completo del flujo IA → Aplicación → Usuario para procesamiento de documentos legales.**

## 🎯 Cumplimiento de Prueba Técnica

Este proyecto demuestra:
- **Flujo técnico completo** desde entrada hasta visualización
- **Integración IA** con OpenAI para procesamiento de documentos legales
- **Extracción de datos estructurados** usando ingeniería de prompts avanzada
- **Tecnologías web modernas** (Next.js, TypeScript, shadcn/ui)
- **Mejores prácticas de seguridad** para datos legales sensibles
- **Soporte bilingüe** para contratos en español e inglés
- **Procesamiento en tiempo real** sin almacenamiento persistente
- **Interfaz dashboard profesional** para uso empresarial

## 🤝 Contribuir

1. Haz fork del repositorio
2. Crea una rama de feature
3. Haz tus cambios
4. Envía un pull request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT.

## 🙋‍♂️ Soporte

Para preguntas o problemas, por favor abre un issue en el repositorio.

---

**Construido con ❤️ usando Next.js y OpenAI**
