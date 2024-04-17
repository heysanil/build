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
 * The address extracted from the document. The address must at least contain the following fields to be a valid address: `street`, `city`, `country`. If any are missing or unable to be extracted, the address will be null.
 * 
 * `region`, and `postal_code` may be null based on the addressing system. For example:
 * 
 * Addresses from the United Kingdom will not include a region
 * 
 * Addresses from Hong Kong will not include postal code
 * 
 * Note: Optical Character Recognition (OCR) technology may sometimes extract incorrect data from a document.
 * @export
 * @interface IdentityVerificationDocumentAddressResponse
 */
export interface IdentityVerificationDocumentAddressResponse {
    [key: string]: any | any;
    /**
     * The full street address extracted from the document.
     * @type {string}
     * @memberof IdentityVerificationDocumentAddressResponse
     */
    street: string;
    /**
     * City extracted from the document.
     * @type {string}
     * @memberof IdentityVerificationDocumentAddressResponse
     */
    city: string;
    /**
     * An ISO 3166-2 subdivision code extracted from the document. Related terms would be "state", "province", "prefecture", "zone", "subdivision", etc.
     * @type {string}
     * @memberof IdentityVerificationDocumentAddressResponse
     */
    region: string | null;
    /**
     * The postal code extracted from the document. Between 2 and 10 alphanumeric characters. For US-based addresses this must be 5 numeric digits.
     * @type {string}
     * @memberof IdentityVerificationDocumentAddressResponse
     */
    postal_code: string | null;
    /**
     * Valid, capitalized, two-letter ISO code representing the country extracted from the document. Must be in ISO 3166-1 alpha-2 form.
     * @type {string}
     * @memberof IdentityVerificationDocumentAddressResponse
     */
    country: string;
}

/**
 * Check if a given object implements the IdentityVerificationDocumentAddressResponse interface.
 */
export function instanceOfIdentityVerificationDocumentAddressResponse(value: object): boolean {
    if (!('street' in value)) return false;
    if (!('city' in value)) return false;
    if (!('region' in value)) return false;
    if (!('postal_code' in value)) return false;
    if (!('country' in value)) return false;
    return true;
}

export function IdentityVerificationDocumentAddressResponseFromJSON(json: any): IdentityVerificationDocumentAddressResponse {
    return IdentityVerificationDocumentAddressResponseFromJSONTyped(json, false);
}

export function IdentityVerificationDocumentAddressResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityVerificationDocumentAddressResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'street': json['street'],
        'city': json['city'],
        'region': json['region'],
        'postal_code': json['postal_code'],
        'country': json['country'],
    };
}

export function IdentityVerificationDocumentAddressResponseToJSON(value?: IdentityVerificationDocumentAddressResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'street': value['street'],
        'city': value['city'],
        'region': value['region'],
        'postal_code': value['postal_code'],
        'country': value['country'],
    };
}
