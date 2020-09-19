interface appeal {
  mcpdAppealId: string;
  mcpdHeaderId: string;
  planCode: string;
  cin: string;
  appealId: string;
  recordType: string;
  parentGrievanceId: string;
  parentAppealId: string;
  appealReceivedDate: string;
  noticeOfActionDate: string;
  appealType: string;
  benefitType: string;
  appealResolutionStatusIndicator: string;
  appealResolutionDate: string;
  partiallyOverturnIndicator: string;
  expeditedIndicator: string;
  tradingPartnerCode: string;
  errorMessage: string;
  dataSource: string;
  caseNumber: string;
  caseStatus: string;
}
interface grievance {
  mcpdGrievanceId: string;
  mcpdHeaderId: string;
  planCode: string;
  cin: string;
  grievanceId: string;
  recordType: string;
  parentGrievanceId: string;
  grievanceReceivedDate: string;
  grievanceType: string;
  benefitType: string;
  exemptIndicator: string;
  tradingPartnerCode: string;
  errorMessage: string;
  dataSource: string;
  caseNumber: string;
  caseStatus: string;
}
interface coc {
  mcpdContinuityOfCareId: string;
  mcpdHeaderId: string;
  planCode: string;
  cin: string;
  cocId: string;
  recordType: string;
  parentCocId: string;
  cocReceivedDate: string;
  cocType: string;
  benefitType: string;
  cocDispositionIndicator: string;
  cocExpirationDate: string;
  cocDenialReasonIndicator: string;
  submittingProviderNpi: string;
  cocProviderNpi: string;
  providerTaxonomy: string;
  merExemptionId: string;
  exemptionToEnrollmentDenialCode: string;
  exemptionToEnrollmentDenialDate: string;
  merCocDispositionIndicator: string;
  merCocDispositionDate: string;
  reasonMerCocNotMetIndicator: string;
  tradingPartnerCode: string;
  errorMessage: string;
  dataSource: string;
  caseNumber: string;
  caseStatus: string;
}
interface oon {
  mcpdOutOfNetworkId: string;
  mcpdHeaderId: string;
  planCode: string;
  cin: string;
  oonIdstring;
  recordType: string;
  parentOonId: string;
  oonRequestReceivedDate: string;
  referralRequestReasonIndicator: string;
  oonResolutionStatusIndicator: string;
  oonRequestResolvedDate: string;
  partialApprovalExplanation: string;
  specialistProviderNpi: string;
  providerTaxonomy: string;
  serviceLocationAddressLine1: string;
  serviceLocationAddressLine2: string;
  serviceLocationCity: string;
  serviceLocationState: string;
  serviceLocationZip: string;
  serviceLocationCountry: string;
  tradingPartnerCode: string;
  errorMessage: string;
  dataSource: string;
  caseNumber: string;
  caseStatus: string;
}
interface pcpa {
  pcpAssignmentId: string;
  pcpHeaderId: string;
  planCode: string;
  cin: string;
  npi: string;
  tradingPartnerCode: string;
  errorMessage: string;
  dataSource: string;
}

