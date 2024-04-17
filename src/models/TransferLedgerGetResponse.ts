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
import type { TransferLedgerBalance } from './TransferLedgerBalance';
import {
    TransferLedgerBalanceFromJSON,
    TransferLedgerBalanceFromJSONTyped,
    TransferLedgerBalanceToJSON,
} from './TransferLedgerBalance';

/**
 * Defines the response schema for `/transfer/ledger/get`
 * @export
 * @interface TransferLedgerGetResponse
 */
export interface TransferLedgerGetResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {TransferLedgerBalance}
     * @memberof TransferLedgerGetResponse
     */
    balance: TransferLedgerBalance;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof TransferLedgerGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the TransferLedgerGetResponse interface.
 */
export function instanceOfTransferLedgerGetResponse(value: object): boolean {
    if (!('balance' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function TransferLedgerGetResponseFromJSON(json: any): TransferLedgerGetResponse {
    return TransferLedgerGetResponseFromJSONTyped(json, false);
}

export function TransferLedgerGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferLedgerGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'balance': TransferLedgerBalanceFromJSON(json['balance']),
        'request_id': json['request_id'],
    };
}

export function TransferLedgerGetResponseToJSON(value?: TransferLedgerGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'balance': TransferLedgerBalanceToJSON(value['balance']),
        'request_id': value['request_id'],
    };
}

