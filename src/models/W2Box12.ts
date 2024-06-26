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
 * Data on the W2 Box 12
 * @export
 * @interface W2Box12
 */
export interface W2Box12 {
    [key: string]: any | any;
    /**
     * W2 Box 12 code.
     * @type {string}
     * @memberof W2Box12
     */
    code?: string;
    /**
     * W2 Box 12 amount.
     * @type {string}
     * @memberof W2Box12
     */
    amount?: string;
}

/**
 * Check if a given object implements the W2Box12 interface.
 */
export function instanceOfW2Box12(value: object): boolean {
    return true;
}

export function W2Box12FromJSON(json: any): W2Box12 {
    return W2Box12FromJSONTyped(json, false);
}

export function W2Box12FromJSONTyped(json: any, ignoreDiscriminator: boolean): W2Box12 {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'code': json['code'] == null ? undefined : json['code'],
        'amount': json['amount'] == null ? undefined : json['amount'],
    };
}

export function W2Box12ToJSON(value?: W2Box12 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'code': value['code'],
        'amount': value['amount'],
    };
}

