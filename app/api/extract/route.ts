import { generateObject } from "ai"
import { openai } from "@ai-sdk/openai"
import { z } from "zod"

const extractionSchema = z.object({
  signingParties: z.array(z.string()).describe("Names of all parties signing the contract"),
  startDate: z.string().describe("Contract start date or effective date"),
  endDate: z.string().describe("Contract end date or expiration date"),
  duration: z.string().describe("Contract duration or term length"),
  penalties: z.array(z.string()).describe("Penalties, fines, or consequences mentioned in the contract"),
  contractPurpose: z.string().describe("Main purpose or objective of the contract"),
  keyClauses: z.array(z.string()).describe("Important clauses, terms, or conditions in the contract"),
})

export async function POST(request: Request) {
  try {
    const { contractText } = await request.json()

    if (!contractText || typeof contractText !== "string") {
      return Response.json({ error: "Contract text is required" }, { status: 400 })
    }

    const { object } = await generateObject({
      model: openai("gpt-4o"),
      schema: extractionSchema,
      prompt: `
        Analyze the following legal contract and extract the key information. 
        The contract may be written in Spanish or English - handle both languages accurately.
        Be thorough and accurate in your analysis. If information is not available, 
        return empty strings or empty arrays as appropriate.
        
        Always return the extracted information in English for consistency, even if the original contract is in Spanish.

        Contract text:
        ${contractText}
      `,
    })

    return Response.json(object)
  } catch (error) {
    console.error("Error extracting contract information:", error)
    return Response.json({ error: "Failed to extract contract information" }, { status: 500 })
  }
} 