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
 * Account numbers using the International Bank Account Number and BIC/SWIFT code format.
 * @export
 * @interface NumbersInternationalIBAN
 */
export interface NumbersInternationalIBAN {
    [key: string]: any | any;
    /**
     * International Bank Account Number (IBAN).
     * @type {string}
     * @memberof NumbersInternationalIBAN
     */
    iban: string;
    /**
     * The Business Identifier Code, also known as SWIFT code, for this bank account.
     * @type {string}
     * @memberof NumbersInternationalIBAN
     */
    bic: string;
}

/**
 * Check if a given object implements the NumbersInternationalIBAN interface.
 */
export function instanceOfNumbersInternationalIBAN(value: object): boolean {
    if (!('iban' in value)) return false;
    if (!('bic' in value)) return false;
    return true;
}

export function NumbersInternationalIBANFromJSON(json: any): NumbersInternationalIBAN {
    return NumbersInternationalIBANFromJSONTyped(json, false);
}

export function NumbersInternationalIBANFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumbersInternationalIBAN {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'iban': json['iban'],
        'bic': json['bic'],
    };
}

export function NumbersInternationalIBANToJSON(value?: NumbersInternationalIBAN | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'iban': value['iban'],
        'bic': value['bic'],
    };
}

