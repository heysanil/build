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
import type { CreditPayStubAddress } from './CreditPayStubAddress';
import {
    CreditPayStubAddressFromJSON,
    CreditPayStubAddressFromJSONTyped,
    CreditPayStubAddressToJSON,
} from './CreditPayStubAddress';
import type { PayStubTaxpayerID } from './PayStubTaxpayerID';
import {
    PayStubTaxpayerIDFromJSON,
    PayStubTaxpayerIDFromJSONTyped,
    PayStubTaxpayerIDToJSON,
} from './PayStubTaxpayerID';

/**
 * Data about the employee.
 * @export
 * @interface CreditPayStubEmployee
 */
export interface CreditPayStubEmployee {
    [key: string]: any | any;
    /**
     * 
     * @type {CreditPayStubAddress}
     * @memberof CreditPayStubEmployee
     */
    address: CreditPayStubAddress;
    /**
     * The name of the employee.
     * @type {string}
     * @memberof CreditPayStubEmployee
     */
    name: string | null;
    /**
     * Marital status of the employee - either `SINGLE` or `MARRIED` or `NOT LISTED`.
     * @type {string}
     * @memberof CreditPayStubEmployee
     */
    marital_status: string | null;
    /**
     * 
     * @type {PayStubTaxpayerID}
     * @memberof CreditPayStubEmployee
     */
    taxpayer_id: PayStubTaxpayerID;
}

/**
 * Check if a given object implements the CreditPayStubEmployee interface.
 */
export function instanceOfCreditPayStubEmployee(value: object): boolean {
    if (!('address' in value)) return false;
    if (!('name' in value)) return false;
    if (!('marital_status' in value)) return false;
    if (!('taxpayer_id' in value)) return false;
    return true;
}

export function CreditPayStubEmployeeFromJSON(json: any): CreditPayStubEmployee {
    return CreditPayStubEmployeeFromJSONTyped(json, false);
}

export function CreditPayStubEmployeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditPayStubEmployee {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'address': CreditPayStubAddressFromJSON(json['address']),
        'name': json['name'],
        'marital_status': json['marital_status'],
        'taxpayer_id': PayStubTaxpayerIDFromJSON(json['taxpayer_id']),
    };
}

export function CreditPayStubEmployeeToJSON(value?: CreditPayStubEmployee | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'address': CreditPayStubAddressToJSON(value['address']),
        'name': value['name'],
        'marital_status': value['marital_status'],
        'taxpayer_id': PayStubTaxpayerIDToJSON(value['taxpayer_id']),
    };
}

