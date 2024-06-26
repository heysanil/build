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
 * Request input for listing changes to entity watchlist screenings
 * @export
 * @interface WatchlistScreeningEntityHistoryListRequest
 */
export interface WatchlistScreeningEntityHistoryListRequest {
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningEntityHistoryListRequest
     */
    secret?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningEntityHistoryListRequest
     */
    client_id?: string;
    /**
     * ID of the associated entity screening.
     * @type {string}
     * @memberof WatchlistScreeningEntityHistoryListRequest
     */
    entity_watchlist_screening_id: string;
    /**
     * An identifier that determines which page of results you receive.
     * @type {string}
     * @memberof WatchlistScreeningEntityHistoryListRequest
     */
    cursor?: string;
}

/**
 * Check if a given object implements the WatchlistScreeningEntityHistoryListRequest interface.
 */
export function instanceOfWatchlistScreeningEntityHistoryListRequest(value: object): boolean {
    if (!('entity_watchlist_screening_id' in value)) return false;
    return true;
}

export function WatchlistScreeningEntityHistoryListRequestFromJSON(json: any): WatchlistScreeningEntityHistoryListRequest {
    return WatchlistScreeningEntityHistoryListRequestFromJSONTyped(json, false);
}

export function WatchlistScreeningEntityHistoryListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningEntityHistoryListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'secret': json['secret'] == null ? undefined : json['secret'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'entity_watchlist_screening_id': json['entity_watchlist_screening_id'],
        'cursor': json['cursor'] == null ? undefined : json['cursor'],
    };
}

export function WatchlistScreeningEntityHistoryListRequestToJSON(value?: WatchlistScreeningEntityHistoryListRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'secret': value['secret'],
        'client_id': value['client_id'],
        'entity_watchlist_screening_id': value['entity_watchlist_screening_id'],
        'cursor': value['cursor'],
    };
}

