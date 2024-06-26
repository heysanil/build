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
 * Identifying information for transferring money to or from an international bank account via wire transfer.
 * @export
 * @interface NumbersInternational
 */
export interface NumbersInternational {
    [key: string]: any | any;
    /**
     * The Plaid account ID associated with the account numbers
     * @type {string}
     * @memberof NumbersInternational
     */
    account_id: string;
    /**
     * The International Bank Account Number (IBAN) for the account
     * @type {string}
     * @memberof NumbersInternational
     */
    iban: string;
    /**
     * The Bank Identifier Code (BIC) for the account
     * @type {string}
     * @memberof NumbersInternational
     */
    bic: string;
}

/**
 * Check if a given object implements the NumbersInternational interface.
 */
export function instanceOfNumbersInternational(value: object): boolean {
    if (!('account_id' in value)) return false;
    if (!('iban' in value)) return false;
    if (!('bic' in value)) return false;
    return true;
}

export function NumbersInternationalFromJSON(json: any): NumbersInternational {
    return NumbersInternationalFromJSONTyped(json, false);
}

export function NumbersInternationalFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumbersInternational {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'account_id': json['account_id'],
        'iban': json['iban'],
        'bic': json['bic'],
    };
}

export function NumbersInternationalToJSON(value?: NumbersInternational | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'account_id': value['account_id'],
        'iban': value['iban'],
        'bic': value['bic'],
    };
}

