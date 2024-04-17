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
import type { WatchlistScreeningHit } from './WatchlistScreeningHit';
import {
    WatchlistScreeningHitFromJSON,
    WatchlistScreeningHitFromJSONTyped,
    WatchlistScreeningHitToJSON,
} from './WatchlistScreeningHit';

/**
 * Paginated list of individual watchlist screening hits
 * @export
 * @interface WatchlistScreeningIndividualHitListResponse
 */
export interface WatchlistScreeningIndividualHitListResponse {
    [key: string]: any | any;
    /**
     * List of individual watchlist screening hits
     * @type {Array<WatchlistScreeningHit>}
     * @memberof WatchlistScreeningIndividualHitListResponse
     */
    watchlist_screening_hits: Array<WatchlistScreeningHit>;
    /**
     * An identifier that determines which page of results you receive.
     * @type {string}
     * @memberof WatchlistScreeningIndividualHitListResponse
     */
    next_cursor: string | null;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof WatchlistScreeningIndividualHitListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the WatchlistScreeningIndividualHitListResponse interface.
 */
export function instanceOfWatchlistScreeningIndividualHitListResponse(value: object): boolean {
    if (!('watchlist_screening_hits' in value)) return false;
    if (!('next_cursor' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function WatchlistScreeningIndividualHitListResponseFromJSON(json: any): WatchlistScreeningIndividualHitListResponse {
    return WatchlistScreeningIndividualHitListResponseFromJSONTyped(json, false);
}

export function WatchlistScreeningIndividualHitListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningIndividualHitListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'watchlist_screening_hits': ((json['watchlist_screening_hits'] as Array<any>).map(WatchlistScreeningHitFromJSON)),
        'next_cursor': json['next_cursor'],
        'request_id': json['request_id'],
    };
}

export function WatchlistScreeningIndividualHitListResponseToJSON(value?: WatchlistScreeningIndividualHitListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'watchlist_screening_hits': ((value['watchlist_screening_hits'] as Array<any>).map(WatchlistScreeningHitToJSON)),
        'next_cursor': value['next_cursor'],
        'request_id': value['request_id'],
    };
}
