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
 * Payment consent scope. Defines possible directions for payments made with the given consent.
 * 
 * `ME_TO_ME`: Allows moving money between accounts owned by the same user.
 * 
 * `EXTERNAL`: Allows initiating payments from the user's account to third parties.
 * @export
 */
export const PaymentInitiationConsentScope = {
    MeToMe: 'ME_TO_ME',
    External: 'EXTERNAL'
} as const;
export type PaymentInitiationConsentScope = typeof PaymentInitiationConsentScope[keyof typeof PaymentInitiationConsentScope];


export function PaymentInitiationConsentScopeFromJSON(json: any): PaymentInitiationConsentScope {
    return PaymentInitiationConsentScopeFromJSONTyped(json, false);
}

export function PaymentInitiationConsentScopeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInitiationConsentScope {
    return json as PaymentInitiationConsentScope;
}

export function PaymentInitiationConsentScopeToJSON(value?: PaymentInitiationConsentScope | null): any {
    return value as any;
}

