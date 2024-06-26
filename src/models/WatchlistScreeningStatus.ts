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
 * A status enum indicating whether a screening is still pending review, has been rejected, or has been cleared.
 * @export
 */
export const WatchlistScreeningStatus = {
    Rejected: 'rejected',
    PendingReview: 'pending_review',
    Cleared: 'cleared'
} as const;
export type WatchlistScreeningStatus = typeof WatchlistScreeningStatus[keyof typeof WatchlistScreeningStatus];


export function WatchlistScreeningStatusFromJSON(json: any): WatchlistScreeningStatus {
    return WatchlistScreeningStatusFromJSONTyped(json, false);
}

export function WatchlistScreeningStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningStatus {
    return json as WatchlistScreeningStatus;
}

export function WatchlistScreeningStatusToJSON(value?: WatchlistScreeningStatus | null): any {
    return value as any;
}

