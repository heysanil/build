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
import type { WalletTransactionListRequestOptions } from './WalletTransactionListRequestOptions';
import {
    WalletTransactionListRequestOptionsFromJSON,
    WalletTransactionListRequestOptionsFromJSONTyped,
    WalletTransactionListRequestOptionsToJSON,
} from './WalletTransactionListRequestOptions';

/**
 * WalletTransactionListRequest defines the request schema for `/wallet/transaction/list`
 * @export
 * @interface WalletTransactionListRequest
 */
export interface WalletTransactionListRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof WalletTransactionListRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof WalletTransactionListRequest
     */
    secret?: string;
    /**
     * The ID of the e-wallet to fetch transactions from
     * @type {string}
     * @memberof WalletTransactionListRequest
     */
    wallet_id: string;
    /**
     * A base64 value representing the latest transaction that has already been requested. Set this to `next_cursor` received from the previous `/wallet/transaction/list` request. If provided, the response will only contain transactions created before that transaction. If omitted, the response will contain transactions starting from the most recent, and in descending order by the `created_at` time.
     * @type {string}
     * @memberof WalletTransactionListRequest
     */
    cursor?: string;
    /**
     * The number of transactions to fetch
     * @type {number}
     * @memberof WalletTransactionListRequest
     */
    count?: number;
    /**
     * 
     * @type {WalletTransactionListRequestOptions}
     * @memberof WalletTransactionListRequest
     */
    options?: WalletTransactionListRequestOptions;
}

/**
 * Check if a given object implements the WalletTransactionListRequest interface.
 */
export function instanceOfWalletTransactionListRequest(value: object): boolean {
    if (!('wallet_id' in value)) return false;
    return true;
}

export function WalletTransactionListRequestFromJSON(json: any): WalletTransactionListRequest {
    return WalletTransactionListRequestFromJSONTyped(json, false);
}

export function WalletTransactionListRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletTransactionListRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'wallet_id': json['wallet_id'],
        'cursor': json['cursor'] == null ? undefined : json['cursor'],
        'count': json['count'] == null ? undefined : json['count'],
        'options': json['options'] == null ? undefined : WalletTransactionListRequestOptionsFromJSON(json['options']),
    };
}

export function WalletTransactionListRequestToJSON(value?: WalletTransactionListRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'wallet_id': value['wallet_id'],
        'cursor': value['cursor'],
        'count': value['count'],
        'options': WalletTransactionListRequestOptionsToJSON(value['options']),
    };
}

