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
 * Account and bank identifier number data used to configure the test account. All values are optional.
 * @export
 * @interface Numbers
 */
export interface Numbers {
    [key: string]: any | any;
    /**
     * Will be used for the account number.
     * @type {string}
     * @memberof Numbers
     */
    account?: string;
    /**
     * Must be a valid ACH routing number.
     * @type {string}
     * @memberof Numbers
     */
    ach_routing?: string;
    /**
     * Must be a valid wire transfer routing number.
     * @type {string}
     * @memberof Numbers
     */
    ach_wire_routing?: string;
    /**
     * EFT institution number. Must be specified alongside `eft_branch`.
     * @type {string}
     * @memberof Numbers
     */
    eft_institution?: string;
    /**
     * EFT branch number. Must be specified alongside `eft_institution`.
     * @type {string}
     * @memberof Numbers
     */
    eft_branch?: string;
    /**
     * Bank identifier code (BIC). Must be specified alongside `international_iban`.
     * @type {string}
     * @memberof Numbers
     */
    international_bic?: string;
    /**
     * International bank account number (IBAN). If no account number is specified via `account`, will also be used as the account number by default. Must be specified alongside `international_bic`.
     * @type {string}
     * @memberof Numbers
     */
    international_iban?: string;
    /**
     * BACS sort code
     * @type {string}
     * @memberof Numbers
     */
    bacs_sort_code?: string;
}

/**
 * Check if a given object implements the Numbers interface.
 */
export function instanceOfNumbers(value: object): boolean {
    return true;
}

export function NumbersFromJSON(json: any): Numbers {
    return NumbersFromJSONTyped(json, false);
}

export function NumbersFromJSONTyped(json: any, ignoreDiscriminator: boolean): Numbers {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'account': json['account'] == null ? undefined : json['account'],
        'ach_routing': json['ach_routing'] == null ? undefined : json['ach_routing'],
        'ach_wire_routing': json['ach_wire_routing'] == null ? undefined : json['ach_wire_routing'],
        'eft_institution': json['eft_institution'] == null ? undefined : json['eft_institution'],
        'eft_branch': json['eft_branch'] == null ? undefined : json['eft_branch'],
        'international_bic': json['international_bic'] == null ? undefined : json['international_bic'],
        'international_iban': json['international_iban'] == null ? undefined : json['international_iban'],
        'bacs_sort_code': json['bacs_sort_code'] == null ? undefined : json['bacs_sort_code'],
    };
}

export function NumbersToJSON(value?: Numbers | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'account': value['account'],
        'ach_routing': value['ach_routing'],
        'ach_wire_routing': value['ach_wire_routing'],
        'eft_institution': value['eft_institution'],
        'eft_branch': value['eft_branch'],
        'international_bic': value['international_bic'],
        'international_iban': value['international_iban'],
        'bacs_sort_code': value['bacs_sort_code'],
    };
}

