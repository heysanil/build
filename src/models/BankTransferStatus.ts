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
 * The status of the transfer.
 * @export
 */
export const BankTransferStatus = {
    Pending: 'pending',
    Posted: 'posted',
    Cancelled: 'cancelled',
    Failed: 'failed',
    Reversed: 'reversed'
} as const;
export type BankTransferStatus = typeof BankTransferStatus[keyof typeof BankTransferStatus];


export function BankTransferStatusFromJSON(json: any): BankTransferStatus {
    return BankTransferStatusFromJSONTyped(json, false);
}

export function BankTransferStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransferStatus {
    return json as BankTransferStatus;
}

export function BankTransferStatusToJSON(value?: BankTransferStatus | null): any {
    return value as any;
}

