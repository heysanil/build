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
 * The full name provided by the user. If the user has not submitted their name, this field will be null. Otherwise, both fields are guaranteed to be filled.
 * @export
 * @interface IdentityVerificationResponseUserName
 */
export interface IdentityVerificationResponseUserName {
    [key: string]: any | any;
    /**
     * A string with at least one non-whitespace character, with a max length of 100 characters.
     * @type {string}
     * @memberof IdentityVerificationResponseUserName
     */
    given_name: string;
    /**
     * A string with at least one non-whitespace character, with a max length of 100 characters.
     * @type {string}
     * @memberof IdentityVerificationResponseUserName
     */
    family_name: string;
}

/**
 * Check if a given object implements the IdentityVerificationResponseUserName interface.
 */
export function instanceOfIdentityVerificationResponseUserName(value: object): boolean {
    if (!('given_name' in value)) return false;
    if (!('family_name' in value)) return false;
    return true;
}

export function IdentityVerificationResponseUserNameFromJSON(json: any): IdentityVerificationResponseUserName {
    return IdentityVerificationResponseUserNameFromJSONTyped(json, false);
}

export function IdentityVerificationResponseUserNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityVerificationResponseUserName {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'given_name': json['given_name'],
        'family_name': json['family_name'],
    };
}

export function IdentityVerificationResponseUserNameToJSON(value?: IdentityVerificationResponseUserName | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'given_name': value['given_name'],
        'family_name': value['family_name'],
    };
}

