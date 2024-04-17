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
import type { CreditBankStatementUploadObject } from './CreditBankStatementUploadObject';
import {
    CreditBankStatementUploadObjectFromJSON,
    CreditBankStatementUploadObjectFromJSONTyped,
    CreditBankStatementUploadObjectToJSON,
} from './CreditBankStatementUploadObject';
import type { PayrollItemStatus } from './PayrollItemStatus';
import {
    PayrollItemStatusFromJSON,
    PayrollItemStatusFromJSONTyped,
    PayrollItemStatusToJSON,
} from './PayrollItemStatus';

/**
 * An object containing information about the bank statement upload Item.
 * @export
 * @interface CreditBankStatementUploadItem
 */
export interface CreditBankStatementUploadItem {
    /**
     * The `item_id` of the Item associated with this webhook, warning, or error
     * @type {string}
     * @memberof CreditBankStatementUploadItem
     */
    item_id: string;
    /**
     * 
     * @type {Array<CreditBankStatementUploadObject>}
     * @memberof CreditBankStatementUploadItem
     */
    bank_statements: Array<CreditBankStatementUploadObject>;
    /**
     * 
     * @type {PayrollItemStatus}
     * @memberof CreditBankStatementUploadItem
     */
    status: PayrollItemStatus | null;
    /**
     * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DDTHH:mm:ssZ) indicating the last time that the Item was updated.
     * @type {Date}
     * @memberof CreditBankStatementUploadItem
     */
    updated_at: Date | null;
}

/**
 * Check if a given object implements the CreditBankStatementUploadItem interface.
 */
export function instanceOfCreditBankStatementUploadItem(value: object): boolean {
    if (!('item_id' in value)) return false;
    if (!('bank_statements' in value)) return false;
    if (!('status' in value)) return false;
    if (!('updated_at' in value)) return false;
    return true;
}

export function CreditBankStatementUploadItemFromJSON(json: any): CreditBankStatementUploadItem {
    return CreditBankStatementUploadItemFromJSONTyped(json, false);
}

export function CreditBankStatementUploadItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankStatementUploadItem {
    if (json == null) {
        return json;
    }
    return {
        
        'item_id': json['item_id'],
        'bank_statements': ((json['bank_statements'] as Array<any>).map(CreditBankStatementUploadObjectFromJSON)),
        'status': PayrollItemStatusFromJSON(json['status']),
        'updated_at': (json['updated_at'] == null ? null : new Date(json['updated_at'])),
    };
}

export function CreditBankStatementUploadItemToJSON(value?: CreditBankStatementUploadItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'item_id': value['item_id'],
        'bank_statements': ((value['bank_statements'] as Array<any>).map(CreditBankStatementUploadObjectToJSON)),
        'status': PayrollItemStatusToJSON(value['status']),
        'updated_at': (value['updated_at'] == null ? null : (value['updated_at'] as any).toISOString()),
    };
}

