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
 * Taxpayer ID of the individual receiving the paystub.
 * @export
 * @interface PayStubTaxpayerID
 */
export interface PayStubTaxpayerID {
    [key: string]: any | any;
    /**
     * Type of ID, e.g. 'SSN'.
     * @type {string}
     * @memberof PayStubTaxpayerID
     */
    id_type: string | null;
    /**
     * ID mask; i.e. last 4 digits of the taxpayer ID.
     * @type {string}
     * @memberof PayStubTaxpayerID
     */
    id_mask: string | null;
}

/**
 * Check if a given object implements the PayStubTaxpayerID interface.
 */
export function instanceOfPayStubTaxpayerID(value: object): boolean {
    if (!('id_type' in value)) return false;
    if (!('id_mask' in value)) return false;
    return true;
}

export function PayStubTaxpayerIDFromJSON(json: any): PayStubTaxpayerID {
    return PayStubTaxpayerIDFromJSONTyped(json, false);
}

export function PayStubTaxpayerIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayStubTaxpayerID {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'id_type': json['id_type'],
        'id_mask': json['id_mask'],
    };
}

export function PayStubTaxpayerIDToJSON(value?: PayStubTaxpayerID | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'id_type': value['id_type'],
        'id_mask': value['id_mask'],
    };
}
