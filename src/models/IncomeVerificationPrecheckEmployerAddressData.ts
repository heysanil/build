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
 * Data about the components comprising an address.
 * @export
 * @interface IncomeVerificationPrecheckEmployerAddressData
 */
export interface IncomeVerificationPrecheckEmployerAddressData {
    [key: string]: any | any;
    /**
     * The full city name
     * @type {string}
     * @memberof IncomeVerificationPrecheckEmployerAddressData
     */
    city?: string;
    /**
     * The ISO 3166-1 alpha-2 country code
     * @type {string}
     * @memberof IncomeVerificationPrecheckEmployerAddressData
     */
    country?: string;
    /**
     * The postal code. In API versions 2018-05-22 and earlier, this field is called `zip`.
     * @type {string}
     * @memberof IncomeVerificationPrecheckEmployerAddressData
     */
    postal_code?: string;
    /**
     * The region or state. In API versions 2018-05-22 and earlier, this field is called `state`.
     * Example: `"NC"`
     * @type {string}
     * @memberof IncomeVerificationPrecheckEmployerAddressData
     */
    region?: string;
    /**
     * The full street address
     * Example: `"564 Main Street, APT 15"`
     * @type {string}
     * @memberof IncomeVerificationPrecheckEmployerAddressData
     */
    street?: string;
}

/**
 * Check if a given object implements the IncomeVerificationPrecheckEmployerAddressData interface.
 */
export function instanceOfIncomeVerificationPrecheckEmployerAddressData(value: object): boolean {
    return true;
}

export function IncomeVerificationPrecheckEmployerAddressDataFromJSON(json: any): IncomeVerificationPrecheckEmployerAddressData {
    return IncomeVerificationPrecheckEmployerAddressDataFromJSONTyped(json, false);
}

export function IncomeVerificationPrecheckEmployerAddressDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomeVerificationPrecheckEmployerAddressData {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'city': json['city'] == null ? undefined : json['city'],
        'country': json['country'] == null ? undefined : json['country'],
        'postal_code': json['postal_code'] == null ? undefined : json['postal_code'],
        'region': json['region'] == null ? undefined : json['region'],
        'street': json['street'] == null ? undefined : json['street'],
    };
}

export function IncomeVerificationPrecheckEmployerAddressDataToJSON(value?: IncomeVerificationPrecheckEmployerAddressData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'city': value['city'],
        'country': value['country'],
        'postal_code': value['postal_code'],
        'region': value['region'],
        'street': value['street'],
    };
}

