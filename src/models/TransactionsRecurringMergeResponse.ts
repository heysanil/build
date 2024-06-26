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
import type { TransactionStream } from './TransactionStream';
import {
    TransactionStreamFromJSON,
    TransactionStreamFromJSONTyped,
    TransactionStreamToJSON,
} from './TransactionStream';

/**
 * TransactionsRecurringMergeResponse defines the response schema for the `/transactions/recurring/streams/merge` endpoint.
 * @export
 * @interface TransactionsRecurringMergeResponse
 */
export interface TransactionsRecurringMergeResponse {
    [key: string]: any | any;
    /**
     * Directly modified stream, along with other streams with transactions removed from them as a result of the operation (in no particular order).
     * @type {Array<TransactionStream>}
     * @memberof TransactionsRecurringMergeResponse
     */
    modified_streams: Array<TransactionStream>;
    /**
     * The ids of streams that are no longer qualified as recurring transaction streams (in no particular order).
     * @type {Array<string>}
     * @memberof TransactionsRecurringMergeResponse
     */
    removed_stream_ids?: Array<string>;
}

/**
 * Check if a given object implements the TransactionsRecurringMergeResponse interface.
 */
export function instanceOfTransactionsRecurringMergeResponse(value: object): boolean {
    if (!('modified_streams' in value)) return false;
    return true;
}

export function TransactionsRecurringMergeResponseFromJSON(json: any): TransactionsRecurringMergeResponse {
    return TransactionsRecurringMergeResponseFromJSONTyped(json, false);
}

export function TransactionsRecurringMergeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsRecurringMergeResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'modified_streams': ((json['modified_streams'] as Array<any>).map(TransactionStreamFromJSON)),
        'removed_stream_ids': json['removed_stream_ids'] == null ? undefined : json['removed_stream_ids'],
    };
}

export function TransactionsRecurringMergeResponseToJSON(value?: TransactionsRecurringMergeResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'modified_streams': ((value['modified_streams'] as Array<any>).map(TransactionStreamToJSON)),
        'removed_stream_ids': value['removed_stream_ids'],
    };
}

