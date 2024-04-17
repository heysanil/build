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
 * Indicates an Item's micro-deposit-based verification status.
 * @export
 */
export const LinkDeliveryVerificationStatus = {
    AutomaticallyVerified: 'automatically_verified',
    PendingAutomaticVerification: 'pending_automatic_verification',
    PendingManualVerification: 'pending_manual_verification',
    ManuallyVerified: 'manually_verified',
    VerificationExpired: 'verification_expired',
    VerificationFailed: 'verification_failed',
    DatabaseMatched: 'database_matched',
    DatabaseInsightsPass: 'database_insights_pass',
    DatabaseInsightsPassWithCaution: 'database_insights_pass_with_caution',
    DatabaseInsightsFail: 'database_insights_fail'
} as const;
export type LinkDeliveryVerificationStatus = typeof LinkDeliveryVerificationStatus[keyof typeof LinkDeliveryVerificationStatus];


export function LinkDeliveryVerificationStatusFromJSON(json: any): LinkDeliveryVerificationStatus {
    return LinkDeliveryVerificationStatusFromJSONTyped(json, false);
}

export function LinkDeliveryVerificationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkDeliveryVerificationStatus {
    return json as LinkDeliveryVerificationStatus;
}

export function LinkDeliveryVerificationStatusToJSON(value?: LinkDeliveryVerificationStatus | null): any {
    return value as any;
}
