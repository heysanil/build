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
 * The counterparty type.
 * 
 * `merchant`: a provider of goods or services for purchase
 * `financial_institution`: a financial entity (bank, credit union, BNPL, fintech)
 * `payment_app`: a transfer or P2P app (e.g. Zelle)
 * `marketplace`: a marketplace (e.g DoorDash, Google Play Store)
 * `payment_terminal`: a point-of-sale payment terminal (e.g Square, Toast)
 * `income_source`: the payer in an income transaction (e.g., an employer, client, or government agency)
 * @export
 */
export const CounterpartyType = {
    Merchant: 'merchant',
    FinancialInstitution: 'financial_institution',
    PaymentApp: 'payment_app',
    Marketplace: 'marketplace',
    PaymentTerminal: 'payment_terminal',
    IncomeSource: 'income_source'
} as const;
export type CounterpartyType = typeof CounterpartyType[keyof typeof CounterpartyType];


export function CounterpartyTypeFromJSON(json: any): CounterpartyType {
    return CounterpartyTypeFromJSONTyped(json, false);
}

export function CounterpartyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CounterpartyType {
    return json as CounterpartyType;
}

export function CounterpartyTypeToJSON(value?: CounterpartyType | null): any {
    return value as any;
}

