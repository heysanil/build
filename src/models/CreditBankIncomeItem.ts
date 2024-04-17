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
import type { CreditBankIncomeAccount } from './CreditBankIncomeAccount';
import {
    CreditBankIncomeAccountFromJSON,
    CreditBankIncomeAccountFromJSONTyped,
    CreditBankIncomeAccountToJSON,
} from './CreditBankIncomeAccount';
import type { CreditBankIncomeSource } from './CreditBankIncomeSource';
import {
    CreditBankIncomeSourceFromJSON,
    CreditBankIncomeSourceFromJSONTyped,
    CreditBankIncomeSourceToJSON,
} from './CreditBankIncomeSource';

/**
 * The details and metadata for an end user's Item.
 * @export
 * @interface CreditBankIncomeItem
 */
export interface CreditBankIncomeItem {
    /**
     * The Item's accounts that have Bank Income data.
     * @type {Array<CreditBankIncomeAccount>}
     * @memberof CreditBankIncomeItem
     */
    bank_income_accounts?: Array<CreditBankIncomeAccount>;
    /**
     * The income sources for this Item. Each entry in the array is a single income source.
     * @type {Array<CreditBankIncomeSource>}
     * @memberof CreditBankIncomeItem
     */
    bank_income_sources?: Array<CreditBankIncomeSource>;
    /**
     * The time when this Item's data was last retrieved from the financial institution.
     * @type {Date}
     * @memberof CreditBankIncomeItem
     */
    last_updated_time?: Date;
    /**
     * The unique identifier of the institution associated with the Item.
     * @type {string}
     * @memberof CreditBankIncomeItem
     */
    institution_id?: string;
    /**
     * The name of the institution associated with the Item.
     * @type {string}
     * @memberof CreditBankIncomeItem
     */
    institution_name?: string;
    /**
     * The unique identifier for the Item.
     * @type {string}
     * @memberof CreditBankIncomeItem
     */
    item_id?: string;
}

/**
 * Check if a given object implements the CreditBankIncomeItem interface.
 */
export function instanceOfCreditBankIncomeItem(value: object): boolean {
    return true;
}

export function CreditBankIncomeItemFromJSON(json: any): CreditBankIncomeItem {
    return CreditBankIncomeItemFromJSONTyped(json, false);
}

export function CreditBankIncomeItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankIncomeItem {
    if (json == null) {
        return json;
    }
    return {
        
        'bank_income_accounts': json['bank_income_accounts'] == null ? undefined : ((json['bank_income_accounts'] as Array<any>).map(CreditBankIncomeAccountFromJSON)),
        'bank_income_sources': json['bank_income_sources'] == null ? undefined : ((json['bank_income_sources'] as Array<any>).map(CreditBankIncomeSourceFromJSON)),
        'last_updated_time': json['last_updated_time'] == null ? undefined : (new Date(json['last_updated_time'])),
        'institution_id': json['institution_id'] == null ? undefined : json['institution_id'],
        'institution_name': json['institution_name'] == null ? undefined : json['institution_name'],
        'item_id': json['item_id'] == null ? undefined : json['item_id'],
    };
}

export function CreditBankIncomeItemToJSON(value?: CreditBankIncomeItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bank_income_accounts': value['bank_income_accounts'] == null ? undefined : ((value['bank_income_accounts'] as Array<any>).map(CreditBankIncomeAccountToJSON)),
        'bank_income_sources': value['bank_income_sources'] == null ? undefined : ((value['bank_income_sources'] as Array<any>).map(CreditBankIncomeSourceToJSON)),
        'last_updated_time': value['last_updated_time'] == null ? undefined : ((value['last_updated_time']).toISOString()),
        'institution_id': value['institution_id'],
        'institution_name': value['institution_name'],
        'item_id': value['item_id'],
    };
}

