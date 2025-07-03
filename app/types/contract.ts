export interface ContractExtraction {
  signingParties: string[];
  startDate: string;
  endDate: string;
  duration: string;
  penalties: string[];
  contractPurpose: string;
  keyClauses: string[];
}

export interface ContractExtractionRequest {
  contractText: string;
}

export interface ContractExtractionResponse {
  success: boolean;
  data?: ContractExtraction;
  error?: string;
} 