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
 * Request input for listing watchlist screening programs for individuals
 * @export
 * @interface WatchlistScreeningIndividualProgramListRequest
 */
export interface WatchlistScreeningIndividualProgramListRequest {
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningIndividualProgramListRequest
     */
    secret?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningIndividualProgramListRequest
     */
    client_id?: string;
    /**
     * An identifier that determines which page of results you receive.
     * @type {string}
     * @memberof WatchlistScreeningIndividualProgramListRequest
     */
    cursor?: string;
}

/**
 * Check if a given object implements the WatchlistScreeningIndividualProgramListRequest interface.
 */
export function instanceOfWatchlistScreeningIndividualProgramListRequest(value: object): boolean {
    return true;
}

export function WatchlistScreeningIndividualProgramListRequestFromJSON(json: any): WatchlistScreeningIndividualProgramListRequest {
    return WatchlistScreeningIndividualProgramListRequestFromJSONTyped(json, false);
}

export function WatchlistScreeningIndividualProgramListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningIndividualProgramListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'secret': json['secret'] == null ? undefined : json['secret'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'cursor': json['cursor'] == null ? undefined : json['cursor'],
    };
}

export function WatchlistScreeningIndividualProgramListRequestToJSON(value?: WatchlistScreeningIndividualProgramListRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'secret': value['secret'],
        'client_id': value['client_id'],
        'cursor': value['cursor'],
    };
}

