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
 * Identifying information for transferring money to or from a Canadian bank account via EFT.
 * @export
 * @interface NumbersEFTNullable
 */
export interface NumbersEFTNullable {
    /**
     * The Plaid account ID associated with the account numbers
     * @type {string}
     * @memberof NumbersEFTNullable
     */
    account_id: string;
    /**
     * The EFT account number for the account
     * @type {string}
     * @memberof NumbersEFTNullable
     */
    account: string;
    /**
     * The EFT institution number for the account
     * @type {string}
     * @memberof NumbersEFTNullable
     */
    institution: string;
    /**
     * The EFT branch number for the account
     * @type {string}
     * @memberof NumbersEFTNullable
     */
    branch: string;
}

/**
 * Check if a given object implements the NumbersEFTNullable interface.
 */
export function instanceOfNumbersEFTNullable(value: object): boolean {
    if (!('account_id' in value)) return false;
    if (!('account' in value)) return false;
    if (!('institution' in value)) return false;
    if (!('branch' in value)) return false;
    return true;
}

export function NumbersEFTNullableFromJSON(json: any): NumbersEFTNullable {
    return NumbersEFTNullableFromJSONTyped(json, false);
}

export function NumbersEFTNullableFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumbersEFTNullable {
    if (json == null) {
        return json;
    }
    return {
        
        'account_id': json['account_id'],
        'account': json['account'],
        'institution': json['institution'],
        'branch': json['branch'],
    };
}

export function NumbersEFTNullableToJSON(value?: NumbersEFTNullable | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_id': value['account_id'],
        'account': value['account'],
        'institution': value['institution'],
        'branch': value['branch'],
    };
}

