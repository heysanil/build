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
 * 
 * @export
 * @interface LinkTokenCreateRequestUserName
 */
export interface LinkTokenCreateRequestUserName {
    /**
     * A string with at least one non-whitespace character, with a max length of 100 characters.
     * @type {string}
     * @memberof LinkTokenCreateRequestUserName
     */
    given_name: string;
    /**
     * A string with at least one non-whitespace character, with a max length of 100 characters.
     * @type {string}
     * @memberof LinkTokenCreateRequestUserName
     */
    family_name: string;
}

/**
 * Check if a given object implements the LinkTokenCreateRequestUserName interface.
 */
export function instanceOfLinkTokenCreateRequestUserName(value: object): boolean {
    if (!('given_name' in value)) return false;
    if (!('family_name' in value)) return false;
    return true;
}

export function LinkTokenCreateRequestUserNameFromJSON(json: any): LinkTokenCreateRequestUserName {
    return LinkTokenCreateRequestUserNameFromJSONTyped(json, false);
}

export function LinkTokenCreateRequestUserNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTokenCreateRequestUserName {
    if (json == null) {
        return json;
    }
    return {
        
        'given_name': json['given_name'],
        'family_name': json['family_name'],
    };
}

export function LinkTokenCreateRequestUserNameToJSON(value?: LinkTokenCreateRequestUserName | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'given_name': value['given_name'],
        'family_name': value['family_name'],
    };
}

