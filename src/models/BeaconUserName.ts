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
 * The full name for a given Beacon User.
 * @export
 * @interface BeaconUserName
 */
export interface BeaconUserName {
    [key: string]: any | any;
    /**
     * A string with at least one non-whitespace character, with a max length of 100 characters.
     * @type {string}
     * @memberof BeaconUserName
     */
    given_name: string;
    /**
     * A string with at least one non-whitespace character, with a max length of 100 characters.
     * @type {string}
     * @memberof BeaconUserName
     */
    family_name: string;
}

/**
 * Check if a given object implements the BeaconUserName interface.
 */
export function instanceOfBeaconUserName(value: object): boolean {
    if (!('given_name' in value)) return false;
    if (!('family_name' in value)) return false;
    return true;
}

export function BeaconUserNameFromJSON(json: any): BeaconUserName {
    return BeaconUserNameFromJSONTyped(json, false);
}

export function BeaconUserNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconUserName {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'given_name': json['given_name'],
        'family_name': json['family_name'],
    };
}

export function BeaconUserNameToJSON(value?: BeaconUserName | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'given_name': value['given_name'],
        'family_name': value['family_name'],
    };
}

