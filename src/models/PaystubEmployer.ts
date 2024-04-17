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
import type { PaystubAddress } from './PaystubAddress';
import {
    PaystubAddressFromJSON,
    PaystubAddressFromJSONTyped,
    PaystubAddressToJSON,
} from './PaystubAddress';

/**
 * Information about the employer on the paystub
 * @export
 * @interface PaystubEmployer
 */
export interface PaystubEmployer {
    [key: string]: any | any;
    /**
     * 
     * @type {PaystubAddress}
     * @memberof PaystubEmployer
     */
    address?: PaystubAddress;
    /**
     * The name of the employer on the paystub.
     * @type {string}
     * @memberof PaystubEmployer
     */
    name: string | null;
}

/**
 * Check if a given object implements the PaystubEmployer interface.
 */
export function instanceOfPaystubEmployer(value: object): boolean {
    if (!('name' in value)) return false;
    return true;
}

export function PaystubEmployerFromJSON(json: any): PaystubEmployer {
    return PaystubEmployerFromJSONTyped(json, false);
}

export function PaystubEmployerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaystubEmployer {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'address': json['address'] == null ? undefined : PaystubAddressFromJSON(json['address']),
        'name': json['name'],
    };
}

export function PaystubEmployerToJSON(value?: PaystubEmployer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'address': PaystubAddressToJSON(value['address']),
        'name': value['name'],
    };
}

