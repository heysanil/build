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
 * An optional object to be used with the request. If specified, `options` must not be `null`.
 * @export
 * @interface TransactionsSyncRequestOptions
 */
export interface TransactionsSyncRequestOptions {
    /**
     * Include the raw unparsed transaction description from the financial institution.
     * @type {boolean}
     * @memberof TransactionsSyncRequestOptions
     */
    include_original_description?: boolean;
    /**
     * Personal finance categories are now returned by default.
     * @type {boolean}
     * @memberof TransactionsSyncRequestOptions
     * @deprecated
     */
    include_personal_finance_category?: boolean;
    /**
     * Counterparties and extra merchant fields are now returned by default.
     * @type {boolean}
     * @memberof TransactionsSyncRequestOptions
     * @deprecated
     */
    include_logo_and_counterparty_beta?: boolean;
    /**
     * This option only applies to calls for Items that were not initialized with Transactions during Link and are now adding the Transactions product to the Item for the first time. In these cases, this option controls the maximum number of days of transaction history that Plaid will request from the financial institution. For developer accounts created after December 3, 2023, if no value is specified, this will default to 90 days. For developer accounts created on December 3, 2023 or earlier, if no value is specified, this will default to 730 days until June 24, 2024, at which point it will default to 90 days.
     * 
     * If Transactions has already been added to the Item prior to this call, this field will have no effect.
     * 
     * We strongly recommend that customers utilizing [Recurring Transactions](https://plaid.com/docs/api/products/transactions/#transactionsrecurringget) request at least 180 days of history for optimal results.
     * @type {number}
     * @memberof TransactionsSyncRequestOptions
     */
    days_requested?: number;
}

/**
 * Check if a given object implements the TransactionsSyncRequestOptions interface.
 */
export function instanceOfTransactionsSyncRequestOptions(value: object): boolean {
    return true;
}

export function TransactionsSyncRequestOptionsFromJSON(json: any): TransactionsSyncRequestOptions {
    return TransactionsSyncRequestOptionsFromJSONTyped(json, false);
}

export function TransactionsSyncRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsSyncRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'include_original_description': json['include_original_description'] == null ? undefined : json['include_original_description'],
        'include_personal_finance_category': json['include_personal_finance_category'] == null ? undefined : json['include_personal_finance_category'],
        'include_logo_and_counterparty_beta': json['include_logo_and_counterparty_beta'] == null ? undefined : json['include_logo_and_counterparty_beta'],
        'days_requested': json['days_requested'] == null ? undefined : json['days_requested'],
    };
}

export function TransactionsSyncRequestOptionsToJSON(value?: TransactionsSyncRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'include_original_description': value['include_original_description'],
        'include_personal_finance_category': value['include_personal_finance_category'],
        'include_logo_and_counterparty_beta': value['include_logo_and_counterparty_beta'],
        'days_requested': value['days_requested'],
    };
}

