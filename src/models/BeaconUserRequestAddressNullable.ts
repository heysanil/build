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
 * Home address for the associated user. For more context on this field, see [Input Validation by Country](https://plaid.com/docs/identity-verification/hybrid-input-validation/#input-validation-by-country).
 * @export
 * @interface BeaconUserRequestAddressNullable
 */
export interface BeaconUserRequestAddressNullable {
    [key: string]: any | any;
    /**
     * The primary street portion of an address. If an address is provided, this field will always be filled.
     * @type {string}
     * @memberof BeaconUserRequestAddressNullable
     */
    street: string;
    /**
     * Extra street information, like an apartment or suite number.
     * @type {string}
     * @memberof BeaconUserRequestAddressNullable
     */
    street2?: string;
    /**
     * City from the end user's address
     * @type {string}
     * @memberof BeaconUserRequestAddressNullable
     */
    city: string;
    /**
     * An ISO 3166-2 subdivision code. Related terms would be "state", "province", "prefecture", "zone", "subdivision", etc.
     * @type {string}
     * @memberof BeaconUserRequestAddressNullable
     */
    region?: string;
    /**
     * The postal code for the associated address. Between 2 and 10 alphanumeric characters. For US-based addresses this must be 5 numeric digits.
     * @type {string}
     * @memberof BeaconUserRequestAddressNullable
     */
    postal_code?: string;
    /**
     * Valid, capitalized, two-letter ISO code representing the country of this object. Must be in ISO 3166-1 alpha-2 form.
     * @type {string}
     * @memberof BeaconUserRequestAddressNullable
     */
    country: string;
}

/**
 * Check if a given object implements the BeaconUserRequestAddressNullable interface.
 */
export function instanceOfBeaconUserRequestAddressNullable(value: object): boolean {
    if (!('street' in value)) return false;
    if (!('city' in value)) return false;
    if (!('country' in value)) return false;
    return true;
}

export function BeaconUserRequestAddressNullableFromJSON(json: any): BeaconUserRequestAddressNullable {
    return BeaconUserRequestAddressNullableFromJSONTyped(json, false);
}

export function BeaconUserRequestAddressNullableFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconUserRequestAddressNullable {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'street': json['street'],
        'street2': json['street2'] == null ? undefined : json['street2'],
        'city': json['city'],
        'region': json['region'] == null ? undefined : json['region'],
        'postal_code': json['postal_code'] == null ? undefined : json['postal_code'],
        'country': json['country'],
    };
}

export function BeaconUserRequestAddressNullableToJSON(value?: BeaconUserRequestAddressNullable | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'street': value['street'],
        'street2': value['street2'],
        'city': value['city'],
        'region': value['region'],
        'postal_code': value['postal_code'],
        'country': value['country'],
    };
}

