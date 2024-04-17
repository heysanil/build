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
 * An object representing information about the net pay amount on the pay stub.
 * @export
 * @interface CreditPayStubNetPay
 */
export interface CreditPayStubNetPay {
    [key: string]: any | any;
    /**
     * Raw amount of the net pay for the pay period.
     * @type {number}
     * @memberof CreditPayStubNetPay
     */
    current_amount: number | null;
    /**
     * Description of the net pay.
     * @type {string}
     * @memberof CreditPayStubNetPay
     */
    description: string | null;
    /**
     * The ISO-4217 currency code of the net pay. Always `null` if `unofficial_currency_code` is non-null.
     * @type {string}
     * @memberof CreditPayStubNetPay
     */
    iso_currency_code: string | null;
    /**
     * The unofficial currency code associated with the net pay. Always `null` if `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.
     * 
     * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `iso_currency_code`s.
     * @type {string}
     * @memberof CreditPayStubNetPay
     */
    unofficial_currency_code: string | null;
    /**
     * The year-to-date amount of the net pay.
     * @type {number}
     * @memberof CreditPayStubNetPay
     */
    ytd_amount: number | null;
}

/**
 * Check if a given object implements the CreditPayStubNetPay interface.
 */
export function instanceOfCreditPayStubNetPay(value: object): boolean {
    if (!('current_amount' in value)) return false;
    if (!('description' in value)) return false;
    if (!('iso_currency_code' in value)) return false;
    if (!('unofficial_currency_code' in value)) return false;
    if (!('ytd_amount' in value)) return false;
    return true;
}

export function CreditPayStubNetPayFromJSON(json: any): CreditPayStubNetPay {
    return CreditPayStubNetPayFromJSONTyped(json, false);
}

export function CreditPayStubNetPayFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditPayStubNetPay {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'current_amount': json['current_amount'],
        'description': json['description'],
        'iso_currency_code': json['iso_currency_code'],
        'unofficial_currency_code': json['unofficial_currency_code'],
        'ytd_amount': json['ytd_amount'],
    };
}

export function CreditPayStubNetPayToJSON(value?: CreditPayStubNetPay | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'current_amount': value['current_amount'],
        'description': value['description'],
        'iso_currency_code': value['iso_currency_code'],
        'unofficial_currency_code': value['unofficial_currency_code'],
        'ytd_amount': value['ytd_amount'],
    };
}

