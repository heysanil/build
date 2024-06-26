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
import type { RecurringTransfer } from './RecurringTransfer';
import {
    RecurringTransferFromJSON,
    RecurringTransferFromJSONTyped,
    RecurringTransferToJSON,
} from './RecurringTransfer';

/**
 * Defines the response schema for `/transfer/recurring/list`
 * @export
 * @interface TransferRecurringListResponse
 */
export interface TransferRecurringListResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {Array<RecurringTransfer>}
     * @memberof TransferRecurringListResponse
     */
    recurring_transfers: Array<RecurringTransfer>;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof TransferRecurringListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the TransferRecurringListResponse interface.
 */
export function instanceOfTransferRecurringListResponse(value: object): boolean {
    if (!('recurring_transfers' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function TransferRecurringListResponseFromJSON(json: any): TransferRecurringListResponse {
    return TransferRecurringListResponseFromJSONTyped(json, false);
}

export function TransferRecurringListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferRecurringListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'recurring_transfers': ((json['recurring_transfers'] as Array<any>).map(RecurringTransferFromJSON)),
        'request_id': json['request_id'],
    };
}

export function TransferRecurringListResponseToJSON(value?: TransferRecurringListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'recurring_transfers': ((value['recurring_transfers'] as Array<any>).map(RecurringTransferToJSON)),
        'request_id': value['request_id'],
    };
}

