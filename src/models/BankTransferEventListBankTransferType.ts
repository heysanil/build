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
 * The type of bank transfer. This will be either `debit` or `credit`.  A `debit` indicates a transfer of money into your origination account; a `credit` indicates a transfer of money out of your origination account.
 * @export
 */
export const BankTransferEventListBankTransferType = {
    Debit: 'debit',
    Credit: 'credit',
    Null: 'null'
} as const;
export type BankTransferEventListBankTransferType = typeof BankTransferEventListBankTransferType[keyof typeof BankTransferEventListBankTransferType];


export function BankTransferEventListBankTransferTypeFromJSON(json: any): BankTransferEventListBankTransferType {
    return BankTransferEventListBankTransferTypeFromJSONTyped(json, false);
}

export function BankTransferEventListBankTransferTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransferEventListBankTransferType {
    return json as BankTransferEventListBankTransferType;
}

export function BankTransferEventListBankTransferTypeToJSON(value?: BankTransferEventListBankTransferType | null): any {
    return value as any;
}
