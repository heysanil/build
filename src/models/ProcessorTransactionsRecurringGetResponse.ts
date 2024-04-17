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
 * ProcessorTransactionsRecurringGetResponse defines the response schema for `/processor/transactions/recurring/get`
 * @export
 * @interface ProcessorTransactionsRecurringGetResponse
 */
export interface ProcessorTransactionsRecurringGetResponse {
    [key: string]: any | any;
    /**
     * An array of depository transaction streams.
     * @type {Array<TransactionStream>}
     * @memberof ProcessorTransactionsRecurringGetResponse
     */
    inflow_streams: Array<TransactionStream>;
    /**
     * An array of expense transaction streams.
     * @type {Array<TransactionStream>}
     * @memberof ProcessorTransactionsRecurringGetResponse
     */
    outflow_streams: Array<TransactionStream>;
    /**
     * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:mm:ssZ`) indicating the last time transaction streams for the given account were updated on
     * @type {Date}
     * @memberof ProcessorTransactionsRecurringGetResponse
     */
    updated_datetime: Date;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof ProcessorTransactionsRecurringGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the ProcessorTransactionsRecurringGetResponse interface.
 */
export function instanceOfProcessorTransactionsRecurringGetResponse(value: object): boolean {
    if (!('inflow_streams' in value)) return false;
    if (!('outflow_streams' in value)) return false;
    if (!('updated_datetime' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function ProcessorTransactionsRecurringGetResponseFromJSON(json: any): ProcessorTransactionsRecurringGetResponse {
    return ProcessorTransactionsRecurringGetResponseFromJSONTyped(json, false);
}

export function ProcessorTransactionsRecurringGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorTransactionsRecurringGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'inflow_streams': ((json['inflow_streams'] as Array<any>).map(TransactionStreamFromJSON)),
        'outflow_streams': ((json['outflow_streams'] as Array<any>).map(TransactionStreamFromJSON)),
        'updated_datetime': (new Date(json['updated_datetime'])),
        'request_id': json['request_id'],
    };
}

export function ProcessorTransactionsRecurringGetResponseToJSON(value?: ProcessorTransactionsRecurringGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'inflow_streams': ((value['inflow_streams'] as Array<any>).map(TransactionStreamToJSON)),
        'outflow_streams': ((value['outflow_streams'] as Array<any>).map(TransactionStreamToJSON)),
        'updated_datetime': ((value['updated_datetime']).toISOString()),
        'request_id': value['request_id'],
    };
}

