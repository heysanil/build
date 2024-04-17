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
 * Defines the request schema for `/transfer/recurring/cancel`
 * @export
 * @interface TransferRecurringCancelRequest
 */
export interface TransferRecurringCancelRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof TransferRecurringCancelRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof TransferRecurringCancelRequest
     */
    secret?: string;
    /**
     * Plaid’s unique identifier for a recurring transfer.
     * @type {string}
     * @memberof TransferRecurringCancelRequest
     */
    recurring_transfer_id: string;
}

/**
 * Check if a given object implements the TransferRecurringCancelRequest interface.
 */
export function instanceOfTransferRecurringCancelRequest(value: object): boolean {
    if (!('recurring_transfer_id' in value)) return false;
    return true;
}

export function TransferRecurringCancelRequestFromJSON(json: any): TransferRecurringCancelRequest {
    return TransferRecurringCancelRequestFromJSONTyped(json, false);
}

export function TransferRecurringCancelRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferRecurringCancelRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'recurring_transfer_id': json['recurring_transfer_id'],
    };
}

export function TransferRecurringCancelRequestToJSON(value?: TransferRecurringCancelRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'recurring_transfer_id': value['recurring_transfer_id'],
    };
}

