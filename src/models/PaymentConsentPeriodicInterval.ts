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
 * Payment consent periodic interval.
 * @export
 */
export const PaymentConsentPeriodicInterval = {
    Day: 'DAY',
    Week: 'WEEK',
    Month: 'MONTH',
    Year: 'YEAR'
} as const;
export type PaymentConsentPeriodicInterval = typeof PaymentConsentPeriodicInterval[keyof typeof PaymentConsentPeriodicInterval];


export function PaymentConsentPeriodicIntervalFromJSON(json: any): PaymentConsentPeriodicInterval {
    return PaymentConsentPeriodicIntervalFromJSONTyped(json, false);
}

export function PaymentConsentPeriodicIntervalFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentConsentPeriodicInterval {
    return json as PaymentConsentPeriodicInterval;
}

export function PaymentConsentPeriodicIntervalToJSON(value?: PaymentConsentPeriodicInterval | null): any {
    return value as any;
}

