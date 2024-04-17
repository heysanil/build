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
 * The ISO-4217 currency code of the payment. For standing orders and payment consents, `"GBP"` must be used. For Poland, Denmark, Sweden and Norway, only the local currency is currently supported.
 * @export
 */
export const PaymentAmountCurrency = {
    Gbp: 'GBP',
    Eur: 'EUR',
    Pln: 'PLN',
    Sek: 'SEK',
    Dkk: 'DKK',
    Nok: 'NOK'
} as const;
export type PaymentAmountCurrency = typeof PaymentAmountCurrency[keyof typeof PaymentAmountCurrency];


export function PaymentAmountCurrencyFromJSON(json: any): PaymentAmountCurrency {
    return PaymentAmountCurrencyFromJSONTyped(json, false);
}

export function PaymentAmountCurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAmountCurrency {
    return json as PaymentAmountCurrency;
}

export function PaymentAmountCurrencyToJSON(value?: PaymentAmountCurrency | null): any {
    return value as any;
}

