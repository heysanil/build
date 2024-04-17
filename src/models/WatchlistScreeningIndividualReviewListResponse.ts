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
import type { WatchlistScreeningReview } from './WatchlistScreeningReview';
import {
    WatchlistScreeningReviewFromJSON,
    WatchlistScreeningReviewFromJSONTyped,
    WatchlistScreeningReviewToJSON,
} from './WatchlistScreeningReview';

/**
 * Paginated list of screening reviews
 * @export
 * @interface WatchlistScreeningIndividualReviewListResponse
 */
export interface WatchlistScreeningIndividualReviewListResponse {
    [key: string]: any | any;
    /**
     * List of screening reviews
     * @type {Array<WatchlistScreeningReview>}
     * @memberof WatchlistScreeningIndividualReviewListResponse
     */
    watchlist_screening_reviews: Array<WatchlistScreeningReview>;
    /**
     * An identifier that determines which page of results you receive.
     * @type {string}
     * @memberof WatchlistScreeningIndividualReviewListResponse
     */
    next_cursor: string | null;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof WatchlistScreeningIndividualReviewListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the WatchlistScreeningIndividualReviewListResponse interface.
 */
export function instanceOfWatchlistScreeningIndividualReviewListResponse(value: object): boolean {
    if (!('watchlist_screening_reviews' in value)) return false;
    if (!('next_cursor' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function WatchlistScreeningIndividualReviewListResponseFromJSON(json: any): WatchlistScreeningIndividualReviewListResponse {
    return WatchlistScreeningIndividualReviewListResponseFromJSONTyped(json, false);
}

export function WatchlistScreeningIndividualReviewListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningIndividualReviewListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'watchlist_screening_reviews': ((json['watchlist_screening_reviews'] as Array<any>).map(WatchlistScreeningReviewFromJSON)),
        'next_cursor': json['next_cursor'],
        'request_id': json['request_id'],
    };
}

export function WatchlistScreeningIndividualReviewListResponseToJSON(value?: WatchlistScreeningIndividualReviewListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'watchlist_screening_reviews': ((value['watchlist_screening_reviews'] as Array<any>).map(WatchlistScreeningReviewToJSON)),
        'next_cursor': value['next_cursor'],
        'request_id': value['request_id'],
    };
}

