"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Loader2, FileText, Users, Calendar, Clock, AlertTriangle, Target, FileCheck } from "lucide-react"

interface ExtractedData {
  signingParties: string[]
  startDate: string
  endDate: string
  duration: string
  penalties: string[]
  contractPurpose: string
  keyClauses: string[]
}

export default function LegalAssistant() {
  const [contractText, setContractText] = useState("")
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleExtract = async () => {
    if (!contractText.trim()) {
      setError("Please paste a contract to analyze")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/extract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contractText }),
      })

      if (!response.ok) {
        throw new Error("Failed to extract contract information")
      }

      const data = await response.json()
      setExtractedData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-100">AI Legal Assistant</h1>
          <p className="text-gray-400 text-lg">Extract key information from legal contracts using AI</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-100">
                <FileText className="h-5 w-5" />
                Contract Input
              </CardTitle>
              <CardDescription className="text-gray-400">
                Paste your legal contract text below for analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Paste your legal contract here..."
                value={contractText}
                onChange={(e) => setContractText(e.target.value)}
                className="min-h-[300px] bg-gray-800 border-gray-700 text-gray-100 placeholder:text-gray-500 resize-none"
              />
              <Button
                onClick={handleExtract}
                disabled={isLoading || !contractText.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Extracting Information...
                  </>
                ) : (
                  "Extract Key Info"
                )}
              </Button>
              {error && <p className="text-red-400 text-sm">{error}</p>}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-100">
                <FileCheck className="h-5 w-5" />
                Extracted Information
              </CardTitle>
              <CardDescription className="text-gray-400">Key contract details identified by AI</CardDescription>
            </CardHeader>
            <CardContent>
              {!extractedData ? (
                <div className="flex items-center justify-center h-[300px] text-gray-500">
                  <div className="text-center">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Extract information from a contract to see results here</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Signing Parties */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-4 w-4 text-blue-400" />
                      <h3 className="font-semibold text-gray-100">Signing Parties</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {extractedData.signingParties.map((party, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-200">
                          {party}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  {/* Dates and Duration */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-green-400" />
                        <h3 className="font-semibold text-gray-100 text-sm">Start Date</h3>
                      </div>
                      <p className="text-gray-300 text-sm">{extractedData.startDate || "Not specified"}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-red-400" />
                        <h3 className="font-semibold text-gray-100 text-sm">End Date</h3>
                      </div>
                      <p className="text-gray-300 text-sm">{extractedData.endDate || "Not specified"}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 text-yellow-400" />
                        <h3 className="font-semibold text-gray-100 text-sm">Duration</h3>
                      </div>
                      <p className="text-gray-300 text-sm">{extractedData.duration || "Not specified"}</p>
                    </div>
                  </div>

                  <Separator className="bg-gray-800" />

                  {/* Contract Purpose */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="h-4 w-4 text-purple-400" />
                      <h3 className="font-semibold text-gray-100">Contract Purpose</h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {extractedData.contractPurpose || "Not identified"}
                    </p>
                  </div>

                  <Separator className="bg-gray-800" />

                  {/* Penalties */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-4 w-4 text-orange-400" />
                      <h3 className="font-semibold text-gray-100">Penalties</h3>
                    </div>
                    {extractedData.penalties.length > 0 ? (
                      <ul className="space-y-2">
                        {extractedData.penalties.map((penalty, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-orange-400 mt-1">•</span>
                            {penalty}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-sm">No penalties identified</p>
                    )}
                  </div>

                  <Separator className="bg-gray-800" />

                  {/* Key Clauses */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FileCheck className="h-4 w-4 text-cyan-400" />
                      <h3 className="font-semibold text-gray-100">Key Clauses</h3>
                    </div>
                    {extractedData.keyClauses.length > 0 ? (
                      <ul className="space-y-2">
                        {extractedData.keyClauses.map((clause, index) => (
                          <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            {clause}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-sm">No key clauses identified</p>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
