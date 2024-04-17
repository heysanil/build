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
 * Search terms for creating an individual watchlist screening
 * @export
 * @interface WatchlistScreeningSearchTerms
 */
export interface WatchlistScreeningSearchTerms {
    [key: string]: any | any;
    /**
     * ID of the associated program.
     * @type {string}
     * @memberof WatchlistScreeningSearchTerms
     */
    watchlist_program_id: string;
    /**
     * The legal name of the individual being screened.
     * @type {string}
     * @memberof WatchlistScreeningSearchTerms
     */
    legal_name: string;
    /**
     * A date in the format YYYY-MM-DD (RFC 3339 Section 5.6).
     * @type {Date}
     * @memberof WatchlistScreeningSearchTerms
     */
    date_of_birth: Date | null;
    /**
     * The numeric or alphanumeric identifier associated with this document.
     * @type {string}
     * @memberof WatchlistScreeningSearchTerms
     */
    document_number: string | null;
    /**
     * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form.
     * @type {string}
     * @memberof WatchlistScreeningSearchTerms
     */
    country: string | null;
    /**
     * The current version of the search terms. Starts at `1` and increments with each edit to `search_terms`.
     * @type {number}
     * @memberof WatchlistScreeningSearchTerms
     */
    version: number;
}

/**
 * Check if a given object implements the WatchlistScreeningSearchTerms interface.
 */
export function instanceOfWatchlistScreeningSearchTerms(value: object): boolean {
    if (!('watchlist_program_id' in value)) return false;
    if (!('legal_name' in value)) return false;
    if (!('date_of_birth' in value)) return false;
    if (!('document_number' in value)) return false;
    if (!('country' in value)) return false;
    if (!('version' in value)) return false;
    return true;
}

export function WatchlistScreeningSearchTermsFromJSON(json: any): WatchlistScreeningSearchTerms {
    return WatchlistScreeningSearchTermsFromJSONTyped(json, false);
}

export function WatchlistScreeningSearchTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningSearchTerms {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'watchlist_program_id': json['watchlist_program_id'],
        'legal_name': json['legal_name'],
        'date_of_birth': (json['date_of_birth'] == null ? null : new Date(json['date_of_birth'])),
        'document_number': json['document_number'],
        'country': json['country'],
        'version': json['version'],
    };
}

export function WatchlistScreeningSearchTermsToJSON(value?: WatchlistScreeningSearchTerms | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'watchlist_program_id': value['watchlist_program_id'],
        'legal_name': value['legal_name'],
        'date_of_birth': (value['date_of_birth'] == null ? null : (value['date_of_birth'] as any).toISOString().substring(0,10)),
        'document_number': value['document_number'],
        'country': value['country'],
        'version': value['version'],
    };
}

