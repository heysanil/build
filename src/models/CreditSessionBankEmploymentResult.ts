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
import type { CreditSessionBankEmploymentStatus } from './CreditSessionBankEmploymentStatus';
import {
    CreditSessionBankEmploymentStatusFromJSON,
    CreditSessionBankEmploymentStatusFromJSONTyped,
    CreditSessionBankEmploymentStatusToJSON,
} from './CreditSessionBankEmploymentStatus';

/**
 * The details of a bank employment verification in Link.
 * @export
 * @interface CreditSessionBankEmploymentResult
 */
export interface CreditSessionBankEmploymentResult {
    /**
     * 
     * @type {CreditSessionBankEmploymentStatus}
     * @memberof CreditSessionBankEmploymentResult
     */
    status?: CreditSessionBankEmploymentStatus;
    /**
     * The Plaid Item ID. The `item_id` is always unique; linking the same account at the same institution twice will result in two Items with different `item_id` values. Like all Plaid identifiers, the `item_id` is case-sensitive.
     * @type {string}
     * @memberof CreditSessionBankEmploymentResult
     */
    item_id?: string;
    /**
     * The Plaid Institution ID associated with the Item.
     * @type {string}
     * @memberof CreditSessionBankEmploymentResult
     */
    institution_id?: string;
}

/**
 * Check if a given object implements the CreditSessionBankEmploymentResult interface.
 */
export function instanceOfCreditSessionBankEmploymentResult(value: object): boolean {
    return true;
}

export function CreditSessionBankEmploymentResultFromJSON(json: any): CreditSessionBankEmploymentResult {
    return CreditSessionBankEmploymentResultFromJSONTyped(json, false);
}

export function CreditSessionBankEmploymentResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditSessionBankEmploymentResult {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'] == null ? undefined : CreditSessionBankEmploymentStatusFromJSON(json['status']),
        'item_id': json['item_id'] == null ? undefined : json['item_id'],
        'institution_id': json['institution_id'] == null ? undefined : json['institution_id'],
    };
}

export function CreditSessionBankEmploymentResultToJSON(value?: CreditSessionBankEmploymentResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'status': CreditSessionBankEmploymentStatusToJSON(value['status']),
        'item_id': value['item_id'],
        'institution_id': value['institution_id'],
    };
}

