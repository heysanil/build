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
import type { TransactionsRecurringGetRequestOptions } from './TransactionsRecurringGetRequestOptions';
import {
    TransactionsRecurringGetRequestOptionsFromJSON,
    TransactionsRecurringGetRequestOptionsFromJSONTyped,
    TransactionsRecurringGetRequestOptionsToJSON,
} from './TransactionsRecurringGetRequestOptions';

/**
 * ProcessorTransactionsRecurringGetRequest defines the request schema for `/processor/transactions/recurring/get`
 * @export
 * @interface ProcessorTransactionsRecurringGetRequest
 */
export interface ProcessorTransactionsRecurringGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorTransactionsRecurringGetRequest
     */
    client_id?: string;
    /**
     * The processor token obtained from the Plaid integration partner. Processor tokens are in the format: `processor-<environment>-<identifier>`
     * @type {string}
     * @memberof ProcessorTransactionsRecurringGetRequest
     */
    processor_token: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorTransactionsRecurringGetRequest
     */
    secret?: string;
    /**
     * 
     * @type {TransactionsRecurringGetRequestOptions}
     * @memberof ProcessorTransactionsRecurringGetRequest
     */
    options?: TransactionsRecurringGetRequestOptions;
}

/**
 * Check if a given object implements the ProcessorTransactionsRecurringGetRequest interface.
 */
export function instanceOfProcessorTransactionsRecurringGetRequest(value: object): boolean {
    if (!('processor_token' in value)) return false;
    return true;
}

export function ProcessorTransactionsRecurringGetRequestFromJSON(json: any): ProcessorTransactionsRecurringGetRequest {
    return ProcessorTransactionsRecurringGetRequestFromJSONTyped(json, false);
}

export function ProcessorTransactionsRecurringGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorTransactionsRecurringGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'processor_token': json['processor_token'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'options': json['options'] == null ? undefined : TransactionsRecurringGetRequestOptionsFromJSON(json['options']),
    };
}

export function ProcessorTransactionsRecurringGetRequestToJSON(value?: ProcessorTransactionsRecurringGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'processor_token': value['processor_token'],
        'secret': value['secret'],
        'options': TransactionsRecurringGetRequestOptionsToJSON(value['options']),
    };
}

