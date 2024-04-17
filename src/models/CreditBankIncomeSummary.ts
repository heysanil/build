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
import type { CreditAmountWithCurrency } from './CreditAmountWithCurrency';
import {
    CreditAmountWithCurrencyFromJSON,
    CreditAmountWithCurrencyFromJSONTyped,
    CreditAmountWithCurrencyToJSON,
} from './CreditAmountWithCurrency';
import type { CreditBankIncomeHistoricalSummary } from './CreditBankIncomeHistoricalSummary';
import {
    CreditBankIncomeHistoricalSummaryFromJSON,
    CreditBankIncomeHistoricalSummaryFromJSONTyped,
    CreditBankIncomeHistoricalSummaryToJSON,
} from './CreditBankIncomeHistoricalSummary';

/**
 * Summary for bank income across all income sources and items (max history of 730 days).
 * @export
 * @interface CreditBankIncomeSummary
 */
export interface CreditBankIncomeSummary {
    [key: string]: any | any;
    /**
     * Total amount of earnings across all the income sources in the end user's Items for the days requested by the client.
     * This may return an incorrect value if the summary includes income sources in multiple currencies.
     * Please use [`total_amounts`](https://plaid.com/docs/api/products/income/#credit-bank_income-get-response-bank-income-bank-income-summary-total-amounts) instead.
     * @type {number}
     * @memberof CreditBankIncomeSummary
     * @deprecated
     */
    total_amount?: number;
    /**
     * The ISO 4217 currency code of the amount or balance.
     * Please use [`total_amounts`](https://plaid.com/docs/api/products/income/#credit-bank_income-get-response-bank-income-bank-income-summary-total-amounts) instead.
     * @type {string}
     * @memberof CreditBankIncomeSummary
     * @deprecated
     */
    iso_currency_code?: string;
    /**
     * The unofficial currency code associated with the amount or balance. Always `null` if `iso_currency_code` is non-null.
     * Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.
     * Please use [`total_amounts`](https://plaid.com/docs/api/products/income/#credit-bank_income-get-response-bank-income-bank-income-summary-total-amounts) instead.
     * @type {string}
     * @memberof CreditBankIncomeSummary
     * @deprecated
     */
    unofficial_currency_code?: string;
    /**
     * Total amount of earnings across all the income sources in the end user's Items for the days requested by the client.
     * This can contain multiple amounts, with each amount denominated in one unique currency.
     * @type {Array<CreditAmountWithCurrency>}
     * @memberof CreditBankIncomeSummary
     */
    total_amounts?: Array<CreditAmountWithCurrency>;
    /**
     * The earliest date within the days requested in which all income sources identified by Plaid appear in a user's account.
     * The date will be returned in an ISO 8601 format (YYYY-MM-DD).
     * @type {Date}
     * @memberof CreditBankIncomeSummary
     */
    start_date?: Date;
    /**
     * The latest date in which all income sources identified by Plaid appear in the user's account.
     * The date will be returned in an ISO 8601 format (YYYY-MM-DD).
     * @type {Date}
     * @memberof CreditBankIncomeSummary
     */
    end_date?: Date;
    /**
     * Number of income sources per end user.
     * @type {number}
     * @memberof CreditBankIncomeSummary
     */
    income_sources_count?: number;
    /**
     * Number of income categories per end user.
     * @type {number}
     * @memberof CreditBankIncomeSummary
     */
    income_categories_count?: number;
    /**
     * Number of income transactions per end user.
     * @type {number}
     * @memberof CreditBankIncomeSummary
     */
    income_transactions_count?: number;
    /**
     * 
     * @type {Array<CreditBankIncomeHistoricalSummary>}
     * @memberof CreditBankIncomeSummary
     */
    historical_summary?: Array<CreditBankIncomeHistoricalSummary>;
}

/**
 * Check if a given object implements the CreditBankIncomeSummary interface.
 */
export function instanceOfCreditBankIncomeSummary(value: object): boolean {
    return true;
}

export function CreditBankIncomeSummaryFromJSON(json: any): CreditBankIncomeSummary {
    return CreditBankIncomeSummaryFromJSONTyped(json, false);
}

export function CreditBankIncomeSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankIncomeSummary {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'total_amount': json['total_amount'] == null ? undefined : json['total_amount'],
        'iso_currency_code': json['iso_currency_code'] == null ? undefined : json['iso_currency_code'],
        'unofficial_currency_code': json['unofficial_currency_code'] == null ? undefined : json['unofficial_currency_code'],
        'total_amounts': json['total_amounts'] == null ? undefined : ((json['total_amounts'] as Array<any>).map(CreditAmountWithCurrencyFromJSON)),
        'start_date': json['start_date'] == null ? undefined : (new Date(json['start_date'])),
        'end_date': json['end_date'] == null ? undefined : (new Date(json['end_date'])),
        'income_sources_count': json['income_sources_count'] == null ? undefined : json['income_sources_count'],
        'income_categories_count': json['income_categories_count'] == null ? undefined : json['income_categories_count'],
        'income_transactions_count': json['income_transactions_count'] == null ? undefined : json['income_transactions_count'],
        'historical_summary': json['historical_summary'] == null ? undefined : ((json['historical_summary'] as Array<any>).map(CreditBankIncomeHistoricalSummaryFromJSON)),
    };
}

export function CreditBankIncomeSummaryToJSON(value?: CreditBankIncomeSummary | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'total_amount': value['total_amount'],
        'iso_currency_code': value['iso_currency_code'],
        'unofficial_currency_code': value['unofficial_currency_code'],
        'total_amounts': value['total_amounts'] == null ? undefined : ((value['total_amounts'] as Array<any>).map(CreditAmountWithCurrencyToJSON)),
        'start_date': value['start_date'] == null ? undefined : ((value['start_date']).toISOString().substring(0,10)),
        'end_date': value['end_date'] == null ? undefined : ((value['end_date']).toISOString().substring(0,10)),
        'income_sources_count': value['income_sources_count'],
        'income_categories_count': value['income_categories_count'],
        'income_transactions_count': value['income_transactions_count'],
        'historical_summary': value['historical_summary'] == null ? undefined : ((value['historical_summary'] as Array<any>).map(CreditBankIncomeHistoricalSummaryToJSON)),
    };
}

