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
 * Search terms for editing an individual watchlist screening
 * @export
 * @interface UpdateIndividualScreeningRequestSearchTerms
 */
export interface UpdateIndividualScreeningRequestSearchTerms {
    /**
     * ID of the associated program.
     * @type {string}
     * @memberof UpdateIndividualScreeningRequestSearchTerms
     */
    watchlist_program_id?: string;
    /**
     * The legal name of the individual being screened.
     * @type {string}
     * @memberof UpdateIndividualScreeningRequestSearchTerms
     */
    legal_name?: string;
    /**
     * A date in the format YYYY-MM-DD (RFC 3339 Section 5.6).
     * @type {Date}
     * @memberof UpdateIndividualScreeningRequestSearchTerms
     */
    date_of_birth?: Date;
    /**
     * The numeric or alphanumeric identifier associated with this document.
     * @type {string}
     * @memberof UpdateIndividualScreeningRequestSearchTerms
     */
    document_number?: string;
    /**
     * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form.
     * @type {string}
     * @memberof UpdateIndividualScreeningRequestSearchTerms
     */
    country?: string;
}

/**
 * Check if a given object implements the UpdateIndividualScreeningRequestSearchTerms interface.
 */
export function instanceOfUpdateIndividualScreeningRequestSearchTerms(value: object): boolean {
    return true;
}

export function UpdateIndividualScreeningRequestSearchTermsFromJSON(json: any): UpdateIndividualScreeningRequestSearchTerms {
    return UpdateIndividualScreeningRequestSearchTermsFromJSONTyped(json, false);
}

export function UpdateIndividualScreeningRequestSearchTermsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateIndividualScreeningRequestSearchTerms {
    if (json == null) {
        return json;
    }
    return {
        
        'watchlist_program_id': json['watchlist_program_id'] == null ? undefined : json['watchlist_program_id'],
        'legal_name': json['legal_name'] == null ? undefined : json['legal_name'],
        'date_of_birth': json['date_of_birth'] == null ? undefined : (new Date(json['date_of_birth'])),
        'document_number': json['document_number'] == null ? undefined : json['document_number'],
        'country': json['country'] == null ? undefined : json['country'],
    };
}

export function UpdateIndividualScreeningRequestSearchTermsToJSON(value?: UpdateIndividualScreeningRequestSearchTerms | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'watchlist_program_id': value['watchlist_program_id'],
        'legal_name': value['legal_name'],
        'date_of_birth': value['date_of_birth'] == null ? undefined : ((value['date_of_birth']).toISOString().substring(0,10)),
        'document_number': value['document_number'],
        'country': value['country'],
    };
}

