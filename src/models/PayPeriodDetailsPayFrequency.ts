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


/**
 * The frequency at which an individual is paid.
 * @export
 */
export const PayPeriodDetailsPayFrequency = {
    PayFrequencyUnknown: 'PAY_FREQUENCY_UNKNOWN',
    PayFrequencyWeekly: 'PAY_FREQUENCY_WEEKLY',
    PayFrequencyBiweekly: 'PAY_FREQUENCY_BIWEEKLY',
    PayFrequencySemimonthly: 'PAY_FREQUENCY_SEMIMONTHLY',
    PayFrequencyMonthly: 'PAY_FREQUENCY_MONTHLY',
    Null: 'null'
} as const;
export type PayPeriodDetailsPayFrequency = typeof PayPeriodDetailsPayFrequency[keyof typeof PayPeriodDetailsPayFrequency];


export function PayPeriodDetailsPayFrequencyFromJSON(json: any): PayPeriodDetailsPayFrequency {
    return PayPeriodDetailsPayFrequencyFromJSONTyped(json, false);
}

export function PayPeriodDetailsPayFrequencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayPeriodDetailsPayFrequency {
    return json as PayPeriodDetailsPayFrequency;
}

export function PayPeriodDetailsPayFrequencyToJSON(value?: PayPeriodDetailsPayFrequency | null): any {
    return value as any;
}

