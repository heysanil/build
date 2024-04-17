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
 * Identifying information for transferring money to or from a UK bank account via BACS.
 * @export
 * @interface NumbersBACS
 */
export interface NumbersBACS {
    [key: string]: any | any;
    /**
     * The Plaid account ID associated with the account numbers
     * @type {string}
     * @memberof NumbersBACS
     */
    account_id: string;
    /**
     * The BACS account number for the account
     * @type {string}
     * @memberof NumbersBACS
     */
    account: string;
    /**
     * The BACS sort code for the account
     * @type {string}
     * @memberof NumbersBACS
     */
    sort_code: string;
}

/**
 * Check if a given object implements the NumbersBACS interface.
 */
export function instanceOfNumbersBACS(value: object): boolean {
    if (!('account_id' in value)) return false;
    if (!('account' in value)) return false;
    if (!('sort_code' in value)) return false;
    return true;
}

export function NumbersBACSFromJSON(json: any): NumbersBACS {
    return NumbersBACSFromJSONTyped(json, false);
}

export function NumbersBACSFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumbersBACS {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'account_id': json['account_id'],
        'account': json['account'],
        'sort_code': json['sort_code'],
    };
}

export function NumbersBACSToJSON(value?: NumbersBACS | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'account_id': value['account_id'],
        'account': value['account'],
        'sort_code': value['sort_code'],
    };
}
