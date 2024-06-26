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
import type { EntityWatchlistScreening } from './EntityWatchlistScreening';
import {
    EntityWatchlistScreeningFromJSON,
    EntityWatchlistScreeningFromJSONTyped,
    EntityWatchlistScreeningToJSON,
} from './EntityWatchlistScreening';

/**
 * Paginated list of entity watchlist screenings
 * @export
 * @interface WatchlistScreeningEntityListResponse
 */
export interface WatchlistScreeningEntityListResponse {
    [key: string]: any | any;
    /**
     * List of entity watchlist screening
     * @type {Array<EntityWatchlistScreening>}
     * @memberof WatchlistScreeningEntityListResponse
     */
    entity_watchlist_screenings: Array<EntityWatchlistScreening>;
    /**
     * An identifier that determines which page of results you receive.
     * @type {string}
     * @memberof WatchlistScreeningEntityListResponse
     */
    next_cursor: string | null;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof WatchlistScreeningEntityListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the WatchlistScreeningEntityListResponse interface.
 */
export function instanceOfWatchlistScreeningEntityListResponse(value: object): boolean {
    if (!('entity_watchlist_screenings' in value)) return false;
    if (!('next_cursor' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function WatchlistScreeningEntityListResponseFromJSON(json: any): WatchlistScreeningEntityListResponse {
    return WatchlistScreeningEntityListResponseFromJSONTyped(json, false);
}

export function WatchlistScreeningEntityListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningEntityListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'entity_watchlist_screenings': ((json['entity_watchlist_screenings'] as Array<any>).map(EntityWatchlistScreeningFromJSON)),
        'next_cursor': json['next_cursor'],
        'request_id': json['request_id'],
    };
}

export function WatchlistScreeningEntityListResponseToJSON(value?: WatchlistScreeningEntityListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'entity_watchlist_screenings': ((value['entity_watchlist_screenings'] as Array<any>).map(EntityWatchlistScreeningToJSON)),
        'next_cursor': value['next_cursor'],
        'request_id': value['request_id'],
    };
}

