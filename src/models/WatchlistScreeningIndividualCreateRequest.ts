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
import type { WatchlistScreeningRequestSearchTerms } from './WatchlistScreeningRequestSearchTerms';
import {
    WatchlistScreeningRequestSearchTermsFromJSON,
    WatchlistScreeningRequestSearchTermsFromJSONTyped,
    WatchlistScreeningRequestSearchTermsToJSON,
} from './WatchlistScreeningRequestSearchTerms';

/**
 * Request input for creating an individual watchlist screening
 * @export
 * @interface WatchlistScreeningIndividualCreateRequest
 */
export interface WatchlistScreeningIndividualCreateRequest {
    /**
     * 
     * @type {WatchlistScreeningRequestSearchTerms}
     * @memberof WatchlistScreeningIndividualCreateRequest
     */
    search_terms: WatchlistScreeningRequestSearchTerms;
    /**
     * A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the `/link/token/create` `client_user_id` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`.
     * @type {string}
     * @memberof WatchlistScreeningIndividualCreateRequest
     */
    client_user_id?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningIndividualCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningIndividualCreateRequest
     */
    secret?: string;
}

/**
 * Check if a given object implements the WatchlistScreeningIndividualCreateRequest interface.
 */
export function instanceOfWatchlistScreeningIndividualCreateRequest(value: object): boolean {
    if (!('search_terms' in value)) return false;
    return true;
}

export function WatchlistScreeningIndividualCreateRequestFromJSON(json: any): WatchlistScreeningIndividualCreateRequest {
    return WatchlistScreeningIndividualCreateRequestFromJSONTyped(json, false);
}

export function WatchlistScreeningIndividualCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningIndividualCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'search_terms': WatchlistScreeningRequestSearchTermsFromJSON(json['search_terms']),
        'client_user_id': json['client_user_id'] == null ? undefined : json['client_user_id'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
    };
}

export function WatchlistScreeningIndividualCreateRequestToJSON(value?: WatchlistScreeningIndividualCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'search_terms': WatchlistScreeningRequestSearchTermsToJSON(value['search_terms']),
        'client_user_id': value['client_user_id'],
        'client_id': value['client_id'],
        'secret': value['secret'],
    };
}

