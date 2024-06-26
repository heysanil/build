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
import type { AccountProductAccessNullable } from './AccountProductAccessNullable';
import {
    AccountProductAccessNullableFromJSON,
    AccountProductAccessNullableFromJSONTyped,
    AccountProductAccessNullableToJSON,
} from './AccountProductAccessNullable';

/**
 * Allow or disallow product access by account. Unlisted (e.g. missing) accounts will be considered `new_accounts`.
 * @export
 * @interface AccountAccess
 */
export interface AccountAccess {
    /**
     * The unique account identifier for this account. This value must match that returned by the data access API for this account.
     * @type {string}
     * @memberof AccountAccess
     */
    unique_id: string;
    /**
     * Allow the application to see this account (and associated details, including balance) in the list of accounts  If unset, defaults to `true`.
     * @type {boolean}
     * @memberof AccountAccess
     */
    authorized?: boolean;
    /**
     * 
     * @type {AccountProductAccessNullable}
     * @memberof AccountAccess
     */
    account_product_access?: AccountProductAccessNullable;
}

/**
 * Check if a given object implements the AccountAccess interface.
 */
export function instanceOfAccountAccess(value: object): boolean {
    if (!('unique_id' in value)) return false;
    return true;
}

export function AccountAccessFromJSON(json: any): AccountAccess {
    return AccountAccessFromJSONTyped(json, false);
}

export function AccountAccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountAccess {
    if (json == null) {
        return json;
    }
    return {
        
        'unique_id': json['unique_id'],
        'authorized': json['authorized'] == null ? undefined : json['authorized'],
        'account_product_access': json['account_product_access'] == null ? undefined : AccountProductAccessNullableFromJSON(json['account_product_access']),
    };
}

export function AccountAccessToJSON(value?: AccountAccess | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'unique_id': value['unique_id'],
        'authorized': value['authorized'],
        'account_product_access': AccountProductAccessNullableToJSON(value['account_product_access']),
    };
}

