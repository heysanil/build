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

import { mapValues } from '../runtime';
/**
 * Request input for creating a review for an entity screening
 * @export
 * @interface WatchlistScreeningEntityReviewCreateRequest
 */
export interface WatchlistScreeningEntityReviewCreateRequest {
    /**
     * Hits to mark as a true positive after thorough manual review. These hits will never recur or be updated once dismissed. In most cases, confirmed hits indicate that the customer should be rejected.
     * @type {Array<string>}
     * @memberof WatchlistScreeningEntityReviewCreateRequest
     */
    confirmed_hits: Array<string>;
    /**
     * Hits to mark as a false positive after thorough manual review. These hits will never recur or be updated once dismissed.
     * @type {Array<string>}
     * @memberof WatchlistScreeningEntityReviewCreateRequest
     */
    dismissed_hits: Array<string>;
    /**
     * A comment submitted by a team member as part of reviewing a watchlist screening.
     * @type {string}
     * @memberof WatchlistScreeningEntityReviewCreateRequest
     */
    comment?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningEntityReviewCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningEntityReviewCreateRequest
     */
    secret?: string;
    /**
     * ID of the associated entity screening.
     * @type {string}
     * @memberof WatchlistScreeningEntityReviewCreateRequest
     */
    entity_watchlist_screening_id: string;
}

/**
 * Check if a given object implements the WatchlistScreeningEntityReviewCreateRequest interface.
 */
export function instanceOfWatchlistScreeningEntityReviewCreateRequest(value: object): boolean {
    if (!('confirmed_hits' in value)) return false;
    if (!('dismissed_hits' in value)) return false;
    if (!('entity_watchlist_screening_id' in value)) return false;
    return true;
}

export function WatchlistScreeningEntityReviewCreateRequestFromJSON(json: any): WatchlistScreeningEntityReviewCreateRequest {
    return WatchlistScreeningEntityReviewCreateRequestFromJSONTyped(json, false);
}

export function WatchlistScreeningEntityReviewCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningEntityReviewCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'confirmed_hits': json['confirmed_hits'],
        'dismissed_hits': json['dismissed_hits'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'entity_watchlist_screening_id': json['entity_watchlist_screening_id'],
    };
}

export function WatchlistScreeningEntityReviewCreateRequestToJSON(value?: WatchlistScreeningEntityReviewCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'confirmed_hits': value['confirmed_hits'],
        'dismissed_hits': value['dismissed_hits'],
        'comment': value['comment'],
        'client_id': value['client_id'],
        'secret': value['secret'],
        'entity_watchlist_screening_id': value['entity_watchlist_screening_id'],
    };
}

