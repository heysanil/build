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
 * The network or rails used for the transfer.
 * 
 * For transfers submitted as `ach`, the next-day cutoff is 5:30 PM Eastern Time.
 * 
 * For transfers submitted as `same-day-ach`, the same-day cutoff is 3:30 PM Eastern Time. If the transfer is submitted after this cutoff but before the next-day cutoff, it will be sent over next-day rails and will not incur same-day charges; this will apply to both legs of the transfer if applicable.
 * 
 * For transfers submitted as `rtp`,  Plaid will automatically route between Real Time Payment rail by TCH or FedNow rails as necessary. If a transfer is submitted as `rtp` and the counterparty account is not eligible for RTP, the `/transfer/authorization/create` request will fail with an `INVALID_FIELD` error code. To pre-check to determine whether a counterparty account can support RTP, call `/transfer/capabilities/get` before calling `/transfer/authorization/create`.
 * @export
 */
export const TransferNetwork = {
    Ach: 'ach',
    SameDayAch: 'same-day-ach',
    Rtp: 'rtp',
    Wire: 'wire'
} as const;
export type TransferNetwork = typeof TransferNetwork[keyof typeof TransferNetwork];


export function TransferNetworkFromJSON(json: any): TransferNetwork {
    return TransferNetworkFromJSONTyped(json, false);
}

export function TransferNetworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferNetwork {
    return json as TransferNetwork;
}

export function TransferNetworkToJSON(value?: TransferNetwork | null): any {
    return value as any;
}

