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
 * Allow the application to access specific products on this account
 * @export
 * @interface AccountProductAccess
 */
export interface AccountProductAccess {
    /**
     * Allow the application to access account data. Only used by certain partners. If relevant to the partner and unset, defaults to `true`.
     * @type {boolean}
     * @memberof AccountProductAccess
     */
    account_data?: boolean;
    /**
     * Allow the application to access bank statements. Only used by certain partners. If relevant to the partner and unset, defaults to `true`.
     * @type {boolean}
     * @memberof AccountProductAccess
     */
    statements?: boolean;
    /**
     * Allow the application to access tax documents. Only used by certain partners. If relevant to the partner and unset, defaults to `true`.
     * @type {boolean}
     * @memberof AccountProductAccess
     */
    tax_documents?: boolean;
}

/**
 * Check if a given object implements the AccountProductAccess interface.
 */
export function instanceOfAccountProductAccess(value: object): boolean {
    return true;
}

export function AccountProductAccessFromJSON(json: any): AccountProductAccess {
    return AccountProductAccessFromJSONTyped(json, false);
}

export function AccountProductAccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountProductAccess {
    if (json == null) {
        return json;
    }
    return {
        
        'account_data': json['account_data'] == null ? undefined : json['account_data'],
        'statements': json['statements'] == null ? undefined : json['statements'],
        'tax_documents': json['tax_documents'] == null ? undefined : json['tax_documents'],
    };
}

export function AccountProductAccessToJSON(value?: AccountProductAccess | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_data': value['account_data'],
        'statements': value['statements'],
        'tax_documents': value['tax_documents'],
    };
}

