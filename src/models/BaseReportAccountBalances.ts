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
import type { BaseReportAverageMonthlyBalances } from './BaseReportAverageMonthlyBalances';
import {
    BaseReportAverageMonthlyBalancesFromJSON,
    BaseReportAverageMonthlyBalancesFromJSONTyped,
    BaseReportAverageMonthlyBalancesToJSON,
} from './BaseReportAverageMonthlyBalances';

/**
 * Base Report information about an account's balances
 * @export
 * @interface BaseReportAccountBalances
 */
export interface BaseReportAccountBalances {
    [key: string]: any | any;
    /**
     * The amount of funds available to be withdrawn from the account, as determined by the financial institution.
     * 
     * For `credit`-type accounts, the `available` balance typically equals the `limit` less the `current` balance, less any pending outflows plus any pending inflows.
     * 
     * For `depository`-type accounts, the `available` balance typically equals the `current` balance less any pending outflows plus any pending inflows. For `depository`-type accounts, the `available` balance does not include the overdraft limit.
     * 
     * For `investment`-type accounts (or `brokerage`-type accounts for API versions 2018-05-22 and earlier), the `available` balance is the total cash available to withdraw as presented by the institution.
     * 
     * Note that not all institutions calculate the `available`  balance. In the event that `available` balance is unavailable, Plaid will return an `available` balance value of `null`.
     * 
     * Available balance may be cached and is not guaranteed to be up-to-date in realtime unless the value was returned by `/accounts/balance/get`.
     * 
     * If `current` is `null` this field is guaranteed not to be `null`.
     * @type {number}
     * @memberof BaseReportAccountBalances
     */
    available: number | null;
    /**
     * The total amount of funds in or owed by the account.
     * 
     * For `credit`-type accounts, a positive balance indicates the amount owed; a negative amount indicates the lender owing the account holder.
     * 
     * For `loan`-type accounts, the current balance is the principal remaining on the loan, except in the case of student loan accounts at Sallie Mae (`ins_116944`). For Sallie Mae student loans, the account's balance includes both principal and any outstanding interest.
     * 
     * For `investment`-type accounts (or `brokerage`-type accounts for API versions 2018-05-22 and earlier), the current balance is the total value of assets as presented by the institution.
     * 
     * Note that balance information may be cached unless the value was returned by `/accounts/balance/get`; if the Item is enabled for Transactions, the balance will be at least as recent as the most recent Transaction update. If you require realtime balance information, use the `available` balance as provided by `/accounts/balance/get`.
     * 
     * When returned by `/accounts/balance/get`, this field may be `null`. When this happens, `available` is guaranteed not to be `null`.
     * @type {number}
     * @memberof BaseReportAccountBalances
     */
    current: number | null;
    /**
     * For `credit`-type accounts, this represents the credit limit.
     * 
     * For `depository`-type accounts, this represents the pre-arranged overdraft limit, which is common for current (checking) accounts in Europe.
     * 
     * In North America, this field is typically only available for `credit`-type accounts.
     * @type {number}
     * @memberof BaseReportAccountBalances
     */
    limit: number | null;
    /**
     * The ISO-4217 currency code of the balance. Always null if `unofficial_currency_code` is non-null.
     * @type {string}
     * @memberof BaseReportAccountBalances
     */
    iso_currency_code: string | null;
    /**
     * The unofficial currency code associated with the balance. Always null if `iso_currency_code` is non-null. Unofficial currency codes are used for currencies that do not have official ISO currency codes, such as cryptocurrencies and the currencies of certain countries.
     * 
     * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a full listing of supported `unofficial_currency_code`s.
     * @type {string}
     * @memberof BaseReportAccountBalances
     */
    unofficial_currency_code: string | null;
    /**
     * Timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`) indicating the oldest acceptable balance when making a request to `/accounts/balance/get`.
     * 
     * This field is only used and expected when the institution is `ins_128026` (Capital One) and the Item contains one or more accounts with a non-depository account type, in which case a value must be provided or an `INVALID_REQUEST` error with the code of `INVALID_FIELD` will be returned. For Capital One depository accounts as well as all other account types on all other institutions, this field is ignored. See [account type schema](https://en.wikipedia.org/wiki/ISO_8601) for a full list of account types.
     * 
     * If the balance that is pulled is older than the given timestamp for Items with this field required, an `INVALID_REQUEST` error with the code of `LAST_UPDATED_DATETIME_OUT_OF_RANGE` will be returned with the most recent timestamp for the requested account contained in the response.
     * @type {Date}
     * @memberof BaseReportAccountBalances
     */
    last_updated_datetime?: Date;
    /**
     * The average historical balance for the entire report
     * @type {number}
     * @memberof BaseReportAccountBalances
     */
    average_balance?: number;
    /**
     * The average historical balance of each calendar month
     * @type {Array<BaseReportAverageMonthlyBalances>}
     * @memberof BaseReportAccountBalances
     */
    average_monthly_balances?: Array<BaseReportAverageMonthlyBalances>;
    /**
     * The average historical balance from the most recent 30 days
     * @type {number}
     * @memberof BaseReportAccountBalances
     */
    most_recent_thirty_day_average_balance?: number;
}

/**
 * Check if a given object implements the BaseReportAccountBalances interface.
 */
export function instanceOfBaseReportAccountBalances(value: object): boolean {
    if (!('available' in value)) return false;
    if (!('current' in value)) return false;
    if (!('limit' in value)) return false;
    if (!('iso_currency_code' in value)) return false;
    if (!('unofficial_currency_code' in value)) return false;
    return true;
}

export function BaseReportAccountBalancesFromJSON(json: any): BaseReportAccountBalances {
    return BaseReportAccountBalancesFromJSONTyped(json, false);
}

export function BaseReportAccountBalancesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseReportAccountBalances {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'available': json['available'],
        'current': json['current'],
        'limit': json['limit'],
        'iso_currency_code': json['iso_currency_code'],
        'unofficial_currency_code': json['unofficial_currency_code'],
        'last_updated_datetime': json['last_updated_datetime'] == null ? undefined : (new Date(json['last_updated_datetime'])),
        'average_balance': json['average_balance'] == null ? undefined : json['average_balance'],
        'average_monthly_balances': json['average_monthly_balances'] == null ? undefined : ((json['average_monthly_balances'] as Array<any>).map(BaseReportAverageMonthlyBalancesFromJSON)),
        'most_recent_thirty_day_average_balance': json['most_recent_thirty_day_average_balance'] == null ? undefined : json['most_recent_thirty_day_average_balance'],
    };
}

export function BaseReportAccountBalancesToJSON(value?: BaseReportAccountBalances | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'available': value['available'],
        'current': value['current'],
        'limit': value['limit'],
        'iso_currency_code': value['iso_currency_code'],
        'unofficial_currency_code': value['unofficial_currency_code'],
        'last_updated_datetime': value['last_updated_datetime'] == null ? undefined : ((value['last_updated_datetime'] as any).toISOString()),
        'average_balance': value['average_balance'],
        'average_monthly_balances': value['average_monthly_balances'] == null ? undefined : ((value['average_monthly_balances'] as Array<any>).map(BaseReportAverageMonthlyBalancesToJSON)),
        'most_recent_thirty_day_average_balance': value['most_recent_thirty_day_average_balance'],
    };
}

