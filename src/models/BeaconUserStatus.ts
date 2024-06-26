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
 * A status of a Beacon User.
 * 
 * `rejected`: The Beacon User has been rejected for fraud. Users can be automatically or manually rejected.
 * 
 * `pending_review`: The Beacon User has been marked for review.
 * 
 * `cleared`: The Beacon User has been cleared of fraud.
 * @export
 */
export const BeaconUserStatus = {
    Rejected: 'rejected',
    PendingReview: 'pending_review',
    Cleared: 'cleared'
} as const;
export type BeaconUserStatus = typeof BeaconUserStatus[keyof typeof BeaconUserStatus];


export function BeaconUserStatusFromJSON(json: any): BeaconUserStatus {
    return BeaconUserStatusFromJSONTyped(json, false);
}

export function BeaconUserStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconUserStatus {
    return json as BeaconUserStatus;
}

export function BeaconUserStatusToJSON(value?: BeaconUserStatus | null): any {
    return value as any;
}

