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
import type { NumbersInternationalIBAN } from './NumbersInternationalIBAN';
import {
    NumbersInternationalIBANFromJSON,
    NumbersInternationalIBANFromJSONTyped,
    NumbersInternationalIBANToJSON,
} from './NumbersInternationalIBAN';
import type { RecipientBACS } from './RecipientBACS';
import {
    RecipientBACSFromJSON,
    RecipientBACSFromJSONTyped,
    RecipientBACSToJSON,
} from './RecipientBACS';

/**
 * An object representing the e-wallet account numbers
 * @export
 * @interface WalletNumbers
 */
export interface WalletNumbers {
    [key: string]: any | any;
    /**
     * 
     * @type {RecipientBACS}
     * @memberof WalletNumbers
     */
    bacs?: RecipientBACS;
    /**
     * 
     * @type {NumbersInternationalIBAN}
     * @memberof WalletNumbers
     */
    international?: NumbersInternationalIBAN;
}

/**
 * Check if a given object implements the WalletNumbers interface.
 */
export function instanceOfWalletNumbers(value: object): boolean {
    return true;
}

export function WalletNumbersFromJSON(json: any): WalletNumbers {
    return WalletNumbersFromJSONTyped(json, false);
}

export function WalletNumbersFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletNumbers {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'bacs': json['bacs'] == null ? undefined : RecipientBACSFromJSON(json['bacs']),
        'international': json['international'] == null ? undefined : NumbersInternationalIBANFromJSON(json['international']),
    };
}

export function WalletNumbersToJSON(value?: WalletNumbers | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'bacs': RecipientBACSToJSON(value['bacs']),
        'international': NumbersInternationalIBANToJSON(value['international']),
    };
}

