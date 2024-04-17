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
 * The type of event that this bank transfer represents.
 * 
 * `pending`: A new transfer was created; it is in the pending state.
 * 
 * `cancelled`: The transfer was cancelled by the client.
 * 
 * `failed`: The transfer failed, no funds were moved.
 * 
 * `posted`: The transfer has been successfully submitted to the payment network.
 * 
 * `reversed`: A posted transfer was reversed.
 * @export
 */
export const BankTransferEventType = {
    Pending: 'pending',
    Cancelled: 'cancelled',
    Failed: 'failed',
    Posted: 'posted',
    Reversed: 'reversed'
} as const;
export type BankTransferEventType = typeof BankTransferEventType[keyof typeof BankTransferEventType];


export function BankTransferEventTypeFromJSON(json: any): BankTransferEventType {
    return BankTransferEventTypeFromJSONTyped(json, false);
}

export function BankTransferEventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransferEventType {
    return json as BankTransferEventType;
}

export function BankTransferEventTypeToJSON(value?: BankTransferEventType | null): any {
    return value as any;
}

