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
 * @interface AddressDataNotRequired
 */
export interface AddressDataNotRequired {
    [key: string]: any | any;
    /**
     * The full city name
     * @type {string}
     * @memberof AddressDataNotRequired
     */
    city?: string;
    /**
     * The region or state. In API versions 2018-05-22 and earlier, this field is called `state`.
     * Example: `"NC"`
     * @type {string}
     * @memberof AddressDataNotRequired
     */
    region?: string;
    /**
     * The full street address
     * Example: `"564 Main Street, APT 15"`
     * @type {string}
     * @memberof AddressDataNotRequired
     */
    street?: string;
    /**
     * The postal code. In API versions 2018-05-22 and earlier, this field is called `zip`.
     * @type {string}
     * @memberof AddressDataNotRequired
     */
    postal_code?: string;
    /**
     * The ISO 3166-1 alpha-2 country code
     * @type {string}
     * @memberof AddressDataNotRequired
     */
    country?: string;
}

/**
 * Check if a given object implements the AddressDataNotRequired interface.
 */
export function instanceOfAddressDataNotRequired(value: object): boolean {
    return true;
}

export function AddressDataNotRequiredFromJSON(json: any): AddressDataNotRequired {
    return AddressDataNotRequiredFromJSONTyped(json, false);
}

export function AddressDataNotRequiredFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressDataNotRequired {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'city': json['city'] == null ? undefined : json['city'],
        'region': json['region'] == null ? undefined : json['region'],
        'street': json['street'] == null ? undefined : json['street'],
        'postal_code': json['postal_code'] == null ? undefined : json['postal_code'],
        'country': json['country'] == null ? undefined : json['country'],
    };
}

export function AddressDataNotRequiredToJSON(value?: AddressDataNotRequired | null): any {
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

