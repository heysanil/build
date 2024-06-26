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
import type { CreditBankEmployment } from './CreditBankEmployment';
import {
    CreditBankEmploymentFromJSON,
    CreditBankEmploymentFromJSONTyped,
    CreditBankEmploymentToJSON,
} from './CreditBankEmployment';
import type { CreditBankIncomeAccount } from './CreditBankIncomeAccount';
import {
    CreditBankIncomeAccountFromJSON,
    CreditBankIncomeAccountFromJSONTyped,
    CreditBankIncomeAccountToJSON,
} from './CreditBankIncomeAccount';

/**
 * The details and metadata for an end user's Item.
 * @export
 * @interface CreditBankEmploymentItem
 */
export interface CreditBankEmploymentItem {
    /**
     * The unique identifier for the Item.
     * @type {string}
     * @memberof CreditBankEmploymentItem
     */
    item_id: string;
    /**
     * The time when this Item's data was last retrieved from the financial institution, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (e.g. "2018-04-12T03:32:11Z").
     * @type {Date}
     * @memberof CreditBankEmploymentItem
     */
    last_updated_time: Date;
    /**
     * The unique identifier of the institution associated with the Item.
     * @type {string}
     * @memberof CreditBankEmploymentItem
     */
    institution_id: string;
    /**
     * The name of the institution associated with the Item.
     * @type {string}
     * @memberof CreditBankEmploymentItem
     */
    institution_name: string;
    /**
     * The bank employment information for this Item. Each entry in the array is a different employer found.
     * @type {Array<CreditBankEmployment>}
     * @memberof CreditBankEmploymentItem
     */
    bank_employments: Array<CreditBankEmployment>;
    /**
     * The Item's accounts that have Bank Employment data.
     * @type {Array<CreditBankIncomeAccount>}
     * @memberof CreditBankEmploymentItem
     */
    bank_employment_accounts: Array<CreditBankIncomeAccount>;
}

/**
 * Check if a given object implements the CreditBankEmploymentItem interface.
 */
export function instanceOfCreditBankEmploymentItem(value: object): boolean {
    if (!('item_id' in value)) return false;
    if (!('last_updated_time' in value)) return false;
    if (!('institution_id' in value)) return false;
    if (!('institution_name' in value)) return false;
    if (!('bank_employments' in value)) return false;
    if (!('bank_employment_accounts' in value)) return false;
    return true;
}

export function CreditBankEmploymentItemFromJSON(json: any): CreditBankEmploymentItem {
    return CreditBankEmploymentItemFromJSONTyped(json, false);
}

export function CreditBankEmploymentItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankEmploymentItem {
    if (json == null) {
        return json;
    }
    return {
        
        'item_id': json['item_id'],
        'last_updated_time': (new Date(json['last_updated_time'])),
        'institution_id': json['institution_id'],
        'institution_name': json['institution_name'],
        'bank_employments': ((json['bank_employments'] as Array<any>).map(CreditBankEmploymentFromJSON)),
        'bank_employment_accounts': ((json['bank_employment_accounts'] as Array<any>).map(CreditBankIncomeAccountFromJSON)),
    };
}

export function CreditBankEmploymentItemToJSON(value?: CreditBankEmploymentItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'item_id': value['item_id'],
        'last_updated_time': ((value['last_updated_time']).toISOString()),
        'institution_id': value['institution_id'],
        'institution_name': value['institution_name'],
        'bank_employments': ((value['bank_employments'] as Array<any>).map(CreditBankEmploymentToJSON)),
        'bank_employment_accounts': ((value['bank_employment_accounts'] as Array<any>).map(CreditBankIncomeAccountToJSON)),
    };
}

