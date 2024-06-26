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
 * A representation of where a transaction took place
 * @export
 * @interface Location
 */
export interface Location {
    [key: string]: any | any;
    /**
     * The street address where the transaction occurred.
     * @type {string}
     * @memberof Location
     */
    address: string | null;
    /**
     * The city where the transaction occurred.
     * @type {string}
     * @memberof Location
     */
    city: string | null;
    /**
     * The region or state where the transaction occurred. In API versions 2018-05-22 and earlier, this field is called `state`.
     * @type {string}
     * @memberof Location
     */
    region: string | null;
    /**
     * The postal code where the transaction occurred. In API versions 2018-05-22 and earlier, this field is called `zip`.
     * @type {string}
     * @memberof Location
     */
    postal_code: string | null;
    /**
     * The ISO 3166-1 alpha-2 country code where the transaction occurred.
     * @type {string}
     * @memberof Location
     */
    country: string | null;
    /**
     * The latitude where the transaction occurred.
     * @type {number}
     * @memberof Location
     */
    lat: number | null;
    /**
     * The longitude where the transaction occurred.
     * @type {number}
     * @memberof Location
     */
    lon: number | null;
    /**
     * The merchant defined store number where the transaction occurred.
     * @type {string}
     * @memberof Location
     */
    store_number: string | null;
}

/**
 * Check if a given object implements the Location interface.
 */
export function instanceOfLocation(value: object): boolean {
    if (!('address' in value)) return false;
    if (!('city' in value)) return false;
    if (!('region' in value)) return false;
    if (!('postal_code' in value)) return false;
    if (!('country' in value)) return false;
    if (!('lat' in value)) return false;
    if (!('lon' in value)) return false;
    if (!('store_number' in value)) return false;
    return true;
}

export function LocationFromJSON(json: any): Location {
    return LocationFromJSONTyped(json, false);
}

export function LocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Location {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'address': json['address'],
        'city': json['city'],
        'region': json['region'],
        'postal_code': json['postal_code'],
        'country': json['country'],
        'lat': json['lat'],
        'lon': json['lon'],
        'store_number': json['store_number'],
    };
}

export function LocationToJSON(value?: Location | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'address': value['address'],
        'city': value['city'],
        'region': value['region'],
        'postal_code': value['postal_code'],
        'country': value['country'],
        'lat': value['lat'],
        'lon': value['lon'],
        'store_number': value['store_number'],
    };
}

