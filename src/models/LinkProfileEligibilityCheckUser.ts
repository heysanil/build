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
 * An object specifying information about the end user who will be sharing their profile in this Link session
 * 
 * @export
 * @interface LinkProfileEligibilityCheckUser
 */
export interface LinkProfileEligibilityCheckUser {
    [key: string]: any | any;
    /**
     * The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format
     * @type {string}
     * @memberof LinkProfileEligibilityCheckUser
     */
    phone_number: string;
}

/**
 * Check if a given object implements the LinkProfileEligibilityCheckUser interface.
 */
export function instanceOfLinkProfileEligibilityCheckUser(value: object): boolean {
    if (!('phone_number' in value)) return false;
    return true;
}

export function LinkProfileEligibilityCheckUserFromJSON(json: any): LinkProfileEligibilityCheckUser {
    return LinkProfileEligibilityCheckUserFromJSONTyped(json, false);
}

export function LinkProfileEligibilityCheckUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkProfileEligibilityCheckUser {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'phone_number': json['phone_number'],
    };
}

export function LinkProfileEligibilityCheckUserToJSON(value?: LinkProfileEligibilityCheckUser | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'phone_number': value['phone_number'],
    };
}

