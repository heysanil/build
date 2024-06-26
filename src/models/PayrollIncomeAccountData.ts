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
import type { PayrollIncomeRateOfPay } from './PayrollIncomeRateOfPay';
import {
    PayrollIncomeRateOfPayFromJSON,
    PayrollIncomeRateOfPayFromJSONTyped,
    PayrollIncomeRateOfPayToJSON,
} from './PayrollIncomeRateOfPay';

/**
 * An object containing account level data.
 * @export
 * @interface PayrollIncomeAccountData
 */
export interface PayrollIncomeAccountData {
    [key: string]: any | any;
    /**
     * ID of the payroll provider account.
     * @type {string}
     * @memberof PayrollIncomeAccountData
     */
    account_id: string | null;
    /**
     * 
     * @type {PayrollIncomeRateOfPay}
     * @memberof PayrollIncomeAccountData
     */
    rate_of_pay: PayrollIncomeRateOfPay;
    /**
     * The frequency at which an individual is paid.
     * @type {string}
     * @memberof PayrollIncomeAccountData
     */
    pay_frequency: string | null;
}

/**
 * Check if a given object implements the PayrollIncomeAccountData interface.
 */
export function instanceOfPayrollIncomeAccountData(value: object): boolean {
    if (!('account_id' in value)) return false;
    if (!('rate_of_pay' in value)) return false;
    if (!('pay_frequency' in value)) return false;
    return true;
}

export function PayrollIncomeAccountDataFromJSON(json: any): PayrollIncomeAccountData {
    return PayrollIncomeAccountDataFromJSONTyped(json, false);
}

export function PayrollIncomeAccountDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayrollIncomeAccountData {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'account_id': json['account_id'],
        'rate_of_pay': PayrollIncomeRateOfPayFromJSON(json['rate_of_pay']),
        'pay_frequency': json['pay_frequency'],
    };
}

export function PayrollIncomeAccountDataToJSON(value?: PayrollIncomeAccountData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'account_id': value['account_id'],
        'rate_of_pay': PayrollIncomeRateOfPayToJSON(value['rate_of_pay']),
        'pay_frequency': value['pay_frequency'],
    };
}

