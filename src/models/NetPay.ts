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
import type { Total } from './Total';
import {
    TotalFromJSON,
    TotalFromJSONTyped,
    TotalToJSON,
} from './Total';

/**
 * An object representing information about the net pay amount on the paystub.
 * @export
 * @interface NetPay
 */
export interface NetPay {
    [key: string]: any | any;
    /**
     * Raw amount of the net pay for the pay period
     * @type {number}
     * @memberof NetPay
     */
    current_amount?: number;
    /**
     * Description of the net pay
     * @type {string}
     * @memberof NetPay
     */
    description?: string;
    /**
     * The ISO-4217 currency code of the net pay. Always `null` if `unofficial_currency_code` is non-null.
     * @type {string}
     * @memberof NetPay
     */
    iso_currency_code?: string;
    /**
     * The unofficial currency code associated with the net pay. Always `null` if `iso_currency_code` is non-`null`. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.
     * 
     * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `iso_currency_code`s.
     * @type {string}
     * @memberof NetPay
     */
    unofficial_currency_code?: string;
    /**
     * The year-to-date amount of the net pay
     * @type {number}
     * @memberof NetPay
     */
    ytd_amount?: number;
    /**
     * 
     * @type {Total}
     * @memberof NetPay
     * @deprecated
     */
    total?: Total;
}

/**
 * Check if a given object implements the NetPay interface.
 */
export function instanceOfNetPay(value: object): boolean {
    return true;
}

export function NetPayFromJSON(json: any): NetPay {
    return NetPayFromJSONTyped(json, false);
}

export function NetPayFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetPay {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'current_amount': json['current_amount'] == null ? undefined : json['current_amount'],
        'description': json['description'] == null ? undefined : json['description'],
        'iso_currency_code': json['iso_currency_code'] == null ? undefined : json['iso_currency_code'],
        'unofficial_currency_code': json['unofficial_currency_code'] == null ? undefined : json['unofficial_currency_code'],
        'ytd_amount': json['ytd_amount'] == null ? undefined : json['ytd_amount'],
        'total': json['total'] == null ? undefined : TotalFromJSON(json['total']),
    };
}

export function NetPayToJSON(value?: NetPay | null): any {
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
        'total': TotalToJSON(value['total']),
    };
}

