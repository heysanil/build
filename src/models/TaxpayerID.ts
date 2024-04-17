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
 * @interface TaxpayerID
 */
export interface TaxpayerID {
    [key: string]: any | any;
    /**
     * Type of ID, e.g. 'SSN'
     * @type {string}
     * @memberof TaxpayerID
     */
    id_type?: string;
    /**
     * ID mask; i.e. last 4 digits of the taxpayer ID
     * @type {string}
     * @memberof TaxpayerID
     */
    id_mask?: string;
    /**
     * Last 4 digits of unique number of ID.
     * @type {string}
     * @memberof TaxpayerID
     * @deprecated
     */
    last_4_digits?: string;
}

/**
 * Check if a given object implements the TaxpayerID interface.
 */
export function instanceOfTaxpayerID(value: object): boolean {
    return true;
}

export function TaxpayerIDFromJSON(json: any): TaxpayerID {
    return TaxpayerIDFromJSONTyped(json, false);
}

export function TaxpayerIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxpayerID {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'id_type': json['id_type'] == null ? undefined : json['id_type'],
        'id_mask': json['id_mask'] == null ? undefined : json['id_mask'],
        'last_4_digits': json['last_4_digits'] == null ? undefined : json['last_4_digits'],
    };
}

export function TaxpayerIDToJSON(value?: TaxpayerID | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'id_type': value['id_type'],
        'id_mask': value['id_mask'],
        'last_4_digits': value['last_4_digits'],
    };
}
