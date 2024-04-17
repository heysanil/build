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
import type { PayPeriodDetailsPayFrequency } from './PayPeriodDetailsPayFrequency';
import {
    PayPeriodDetailsPayFrequencyFromJSON,
    PayPeriodDetailsPayFrequencyFromJSONTyped,
    PayPeriodDetailsPayFrequencyToJSON,
} from './PayPeriodDetailsPayFrequency';
import type { PaystubOverrideDistributionBreakdown } from './PaystubOverrideDistributionBreakdown';
import {
    PaystubOverrideDistributionBreakdownFromJSON,
    PaystubOverrideDistributionBreakdownFromJSONTyped,
    PaystubOverrideDistributionBreakdownToJSON,
} from './PaystubOverrideDistributionBreakdown';

/**
 * Details about the pay period.
 * @export
 * @interface PaystubOverridePayPeriodDetails
 */
export interface PaystubOverridePayPeriodDetails {
    [key: string]: any | any;
    /**
     * The amount of the paycheck.
     * @type {number}
     * @memberof PaystubOverridePayPeriodDetails
     */
    check_amount?: number;
    /**
     * 
     * @type {Array<PaystubOverrideDistributionBreakdown>}
     * @memberof PaystubOverridePayPeriodDetails
     */
    distribution_breakdown?: Array<PaystubOverrideDistributionBreakdown>;
    /**
     * The pay period end date, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format: "yyyy-mm-dd".
     * @type {Date}
     * @memberof PaystubOverridePayPeriodDetails
     */
    end_date?: Date;
    /**
     * Total earnings before tax/deductions.
     * @type {number}
     * @memberof PaystubOverridePayPeriodDetails
     */
    gross_earnings?: number;
    /**
     * The date on which the paystub was issued, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ("yyyy-mm-dd").
     * @type {Date}
     * @memberof PaystubOverridePayPeriodDetails
     */
    pay_date?: Date;
    /**
     * 
     * @type {PayPeriodDetailsPayFrequency}
     * @memberof PaystubOverridePayPeriodDetails
     */
    pay_frequency?: PayPeriodDetailsPayFrequency;
    /**
     * The date on which the paystub was issued, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format ("yyyy-mm-dd").
     * @type {Date}
     * @memberof PaystubOverridePayPeriodDetails
     * @deprecated
     */
    pay_day?: Date;
    /**
     * The pay period start date, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format: "yyyy-mm-dd".
     * @type {Date}
     * @memberof PaystubOverridePayPeriodDetails
     */
    start_date?: Date;
}

/**
 * Check if a given object implements the PaystubOverridePayPeriodDetails interface.
 */
export function instanceOfPaystubOverridePayPeriodDetails(value: object): boolean {
    return true;
}

export function PaystubOverridePayPeriodDetailsFromJSON(json: any): PaystubOverridePayPeriodDetails {
    return PaystubOverridePayPeriodDetailsFromJSONTyped(json, false);
}

export function PaystubOverridePayPeriodDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaystubOverridePayPeriodDetails {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'check_amount': json['check_amount'] == null ? undefined : json['check_amount'],
        'distribution_breakdown': json['distribution_breakdown'] == null ? undefined : ((json['distribution_breakdown'] as Array<any>).map(PaystubOverrideDistributionBreakdownFromJSON)),
        'end_date': json['end_date'] == null ? undefined : (new Date(json['end_date'])),
        'gross_earnings': json['gross_earnings'] == null ? undefined : json['gross_earnings'],
        'pay_date': json['pay_date'] == null ? undefined : (new Date(json['pay_date'])),
        'pay_frequency': json['pay_frequency'] == null ? undefined : PayPeriodDetailsPayFrequencyFromJSON(json['pay_frequency']),
        'pay_day': json['pay_day'] == null ? undefined : (new Date(json['pay_day'])),
        'start_date': json['start_date'] == null ? undefined : (new Date(json['start_date'])),
    };
}

export function PaystubOverridePayPeriodDetailsToJSON(value?: PaystubOverridePayPeriodDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'check_amount': value['check_amount'],
        'distribution_breakdown': value['distribution_breakdown'] == null ? undefined : ((value['distribution_breakdown'] as Array<any>).map(PaystubOverrideDistributionBreakdownToJSON)),
        'end_date': value['end_date'] == null ? undefined : ((value['end_date'] as any).toISOString().substring(0,10)),
        'gross_earnings': value['gross_earnings'],
        'pay_date': value['pay_date'] == null ? undefined : ((value['pay_date'] as any).toISOString().substring(0,10)),
        'pay_frequency': PayPeriodDetailsPayFrequencyToJSON(value['pay_frequency']),
        'pay_day': value['pay_day'] == null ? undefined : ((value['pay_day'] as any).toISOString().substring(0,10)),
        'start_date': value['start_date'] == null ? undefined : ((value['start_date'] as any).toISOString().substring(0,10)),
    };
}

