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
/**
 * WalletTransactionGetRequest defines the request schema for `/wallet/transaction/get`
 * @export
 * @interface WalletTransactionGetRequest
 */
export interface WalletTransactionGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof WalletTransactionGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof WalletTransactionGetRequest
     */
    secret?: string;
    /**
     * The ID of the transaction to fetch
     * @type {string}
     * @memberof WalletTransactionGetRequest
     */
    transaction_id: string;
}

/**
 * Check if a given object implements the WalletTransactionGetRequest interface.
 */
export function instanceOfWalletTransactionGetRequest(value: object): boolean {
    if (!('transaction_id' in value)) return false;
    return true;
}

export function WalletTransactionGetRequestFromJSON(json: any): WalletTransactionGetRequest {
    return WalletTransactionGetRequestFromJSONTyped(json, false);
}

export function WalletTransactionGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletTransactionGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'transaction_id': json['transaction_id'],
    };
}

export function WalletTransactionGetRequestToJSON(value?: WalletTransactionGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'transaction_id': value['transaction_id'],
    };
}

