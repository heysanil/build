/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.503.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * This enum describes the reason a consumer report is created for
 * 
 * `ACCOUNT_REVIEW_CREDIT`: In connection with a consumer credit transaction for the review or collection of an account pursuant to FCRA Section 604(a)(3)(A).
 * `ACCOUNT_REVIEW_NON_CREDIT`: For a legitimate business need of the information to review a non-credit account provided primarily for personal, family, or household purposes to determine whether the consumer continues to meet the terms of the account pursuant to FCRA Section 604(a)(3)(F)(2).
 * `EMPLOYMENT`: For employment purposes pursuant to FCRA 604(a)(3)(B), including hiring, retention and promotion purposes.
 * `EXTENSION_OF_CREDIT`: In connection with a credit transaction initiated by and involving the consumer pursuant to FCRA Section 604(a)(3)(A).
 * `LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING`: For a legitimate business need in connection with a business transaction initiated by the consumer primarily for personal, family, or household purposes in connection with a property rental assessment pursuant to FCRA Section 604(a)(3)(F)(i).
 * `LEGITIMATE_BUSINESS_NEED_OTHER`: For a legitimate business need in connection with a business transaction made primarily for personal, family, or household initiated by the consumer pursuant to FCRA Section 604(a)(3)(F)(i).
 * `WRITTEN_INSTRUCTION_PREQUALIFICATION`: In accordance with the written instructions of the consumer pursuant to FCRA Section 604(a)(2), to evaluate an application’s profile to make an offer to the consumer.
 * `WRITTEN_INSTRUCTION_OTHER`: In accordance with the written instructions of the consumer pursuant to FCRA Section 604(a)(2), such as when an individual agrees to act as a guarantor or assumes personal liability for a consumer, business, or commercial loan.
 * @export
 */
export const ConsumerReportPermissiblePurpose = {
    AccountReviewCredit: 'ACCOUNT_REVIEW_CREDIT',
    AccountReviewNonCredit: 'ACCOUNT_REVIEW_NON_CREDIT',
    Employment: 'EMPLOYMENT',
    ExtensionOfCredit: 'EXTENSION_OF_CREDIT',
    LegitimateBusinessNeedTenantScreening: 'LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING',
    LegitimateBusinessNeedOther: 'LEGITIMATE_BUSINESS_NEED_OTHER',
    WrittenInstructionPrequalification: 'WRITTEN_INSTRUCTION_PREQUALIFICATION',
    WrittenInstructionOther: 'WRITTEN_INSTRUCTION_OTHER'
} as const;
export type ConsumerReportPermissiblePurpose = typeof ConsumerReportPermissiblePurpose[keyof typeof ConsumerReportPermissiblePurpose];


export function ConsumerReportPermissiblePurposeFromJSON(json: any): ConsumerReportPermissiblePurpose {
    return ConsumerReportPermissiblePurposeFromJSONTyped(json, false);
}

export function ConsumerReportPermissiblePurposeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsumerReportPermissiblePurpose {
    return json as ConsumerReportPermissiblePurpose;
}

export function ConsumerReportPermissiblePurposeToJSON(value?: ConsumerReportPermissiblePurpose | null): any {
    return value as any;
}

