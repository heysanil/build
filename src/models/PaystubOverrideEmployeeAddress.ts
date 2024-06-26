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
 * The address of the employee.
 * @export
 * @interface PaystubOverrideEmployeeAddress
 */
export interface PaystubOverrideEmployeeAddress {
    /**
     * The full city name.
     * @type {string}
     * @memberof PaystubOverrideEmployeeAddress
     */
    city?: string;
    /**
     * The region or state
     * Example: `"NC"`
     * @type {string}
     * @memberof PaystubOverrideEmployeeAddress
     */
    region?: string;
    /**
     * The full street address
     * Example: `"564 Main Street, APT 15"`
     * @type {string}
     * @memberof PaystubOverrideEmployeeAddress
     */
    street?: string;
    /**
     * 5 digit postal code.
     * @type {string}
     * @memberof PaystubOverrideEmployeeAddress
     */
    postal_code?: string;
    /**
     * The country of the address.
     * @type {string}
     * @memberof PaystubOverrideEmployeeAddress
     */
    country?: string;
}

/**
 * Check if a given object implements the PaystubOverrideEmployeeAddress interface.
 */
export function instanceOfPaystubOverrideEmployeeAddress(value: object): boolean {
    return true;
}

export function PaystubOverrideEmployeeAddressFromJSON(json: any): PaystubOverrideEmployeeAddress {
    return PaystubOverrideEmployeeAddressFromJSONTyped(json, false);
}

export function PaystubOverrideEmployeeAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaystubOverrideEmployeeAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'city': json['city'] == null ? undefined : json['city'],
        'region': json['region'] == null ? undefined : json['region'],
        'street': json['street'] == null ? undefined : json['street'],
        'postal_code': json['postal_code'] == null ? undefined : json['postal_code'],
        'country': json['country'] == null ? undefined : json['country'],
    };
}

export function PaystubOverrideEmployeeAddressToJSON(value?: PaystubOverrideEmployeeAddress | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'city': value['city'],
        'region': value['region'],
        'street': value['street'],
        'postal_code': value['postal_code'],
        'country': value['country'],
    };
}

