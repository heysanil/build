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
 * The user's address.
 * @export
 * @interface DepositSwitchAddressData
 */
export interface DepositSwitchAddressData {
    [key: string]: any | any;
    /**
     * The full city name
     * @type {string}
     * @memberof DepositSwitchAddressData
     */
    city: string;
    /**
     * The region or state
     * Example: `"NC"`
     * @type {string}
     * @memberof DepositSwitchAddressData
     */
    region: string;
    /**
     * The full street address
     * Example: `"564 Main Street, APT 15"`
     * @type {string}
     * @memberof DepositSwitchAddressData
     */
    street: string;
    /**
     * The postal code
     * @type {string}
     * @memberof DepositSwitchAddressData
     */
    postal_code: string;
    /**
     * The ISO 3166-1 alpha-2 country code
     * @type {string}
     * @memberof DepositSwitchAddressData
     */
    country: string;
}

/**
 * Check if a given object implements the DepositSwitchAddressData interface.
 */
export function instanceOfDepositSwitchAddressData(value: object): boolean {
    if (!('city' in value)) return false;
    if (!('region' in value)) return false;
    if (!('street' in value)) return false;
    if (!('postal_code' in value)) return false;
    if (!('country' in value)) return false;
    return true;
}

export function DepositSwitchAddressDataFromJSON(json: any): DepositSwitchAddressData {
    return DepositSwitchAddressDataFromJSONTyped(json, false);
}

export function DepositSwitchAddressDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositSwitchAddressData {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'city': json['city'],
        'region': json['region'],
        'street': json['street'],
        'postal_code': json['postal_code'],
        'country': json['country'],
    };
}

export function DepositSwitchAddressDataToJSON(value?: DepositSwitchAddressData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'city': value['city'],
        'region': value['region'],
        'street': value['street'],
        'postal_code': value['postal_code'],
        'country': value['country'],
    };
}

