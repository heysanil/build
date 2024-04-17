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
import type { CreditBankIncomeErrorType } from './CreditBankIncomeErrorType';
import {
    CreditBankIncomeErrorTypeFromJSON,
    CreditBankIncomeErrorTypeFromJSONTyped,
    CreditBankIncomeErrorTypeToJSON,
} from './CreditBankIncomeErrorType';

/**
 * An error object and associated `item_id` used to identify a specific Item and error when a batch operation operating on multiple Items has encountered an error in one of the Items.
 * @export
 * @interface CreditBankIncomeCause
 */
export interface CreditBankIncomeCause {
    /**
     * 
     * @type {CreditBankIncomeErrorType}
     * @memberof CreditBankIncomeCause
     */
    error_type: CreditBankIncomeErrorType;
    /**
     * We use standard HTTP response codes for success and failure notifications, and our errors are further classified by `error_type`. In general, 200 HTTP codes correspond to success, 40X codes are for developer- or user-related failures, and 50X codes are for Plaid-related issues. Error fields will be `null` if no error has occurred.
     * @type {string}
     * @memberof CreditBankIncomeCause
     */
    error_code: string;
    /**
     * A developer-friendly representation of the error code. This may change over time and is not safe for programmatic use.
     * @type {string}
     * @memberof CreditBankIncomeCause
     */
    error_message: string;
    /**
     * A user-friendly representation of the error code. null if the error is not related to user action.
     * This may change over time and is not safe for programmatic use.
     * @type {string}
     * @memberof CreditBankIncomeCause
     */
    display_message: string;
    /**
     * The `item_id` of the Item associated with this warning.
     * @type {string}
     * @memberof CreditBankIncomeCause
     */
    item_id: string;
}

/**
 * Check if a given object implements the CreditBankIncomeCause interface.
 */
export function instanceOfCreditBankIncomeCause(value: object): boolean {
    if (!('error_type' in value)) return false;
    if (!('error_code' in value)) return false;
    if (!('error_message' in value)) return false;
    if (!('display_message' in value)) return false;
    if (!('item_id' in value)) return false;
    return true;
}

export function CreditBankIncomeCauseFromJSON(json: any): CreditBankIncomeCause {
    return CreditBankIncomeCauseFromJSONTyped(json, false);
}

export function CreditBankIncomeCauseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankIncomeCause {
    if (json == null) {
        return json;
    }
    return {
        
        'error_type': CreditBankIncomeErrorTypeFromJSON(json['error_type']),
        'error_code': json['error_code'],
        'error_message': json['error_message'],
        'display_message': json['display_message'],
        'item_id': json['item_id'],
    };
}

export function CreditBankIncomeCauseToJSON(value?: CreditBankIncomeCause | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'error_type': CreditBankIncomeErrorTypeToJSON(value['error_type']),
        'error_code': value['error_code'],
        'error_message': value['error_message'],
        'display_message': value['display_message'],
        'item_id': value['item_id'],
    };
}

