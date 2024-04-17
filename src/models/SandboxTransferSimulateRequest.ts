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
import type { TransferFailure } from './TransferFailure';
import {
    TransferFailureFromJSON,
    TransferFailureFromJSONTyped,
    TransferFailureToJSON,
} from './TransferFailure';

/**
 * Defines the request schema for `/sandbox/transfer/simulate`
 * @export
 * @interface SandboxTransferSimulateRequest
 */
export interface SandboxTransferSimulateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof SandboxTransferSimulateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof SandboxTransferSimulateRequest
     */
    secret?: string;
    /**
     * Plaid’s unique identifier for a transfer.
     * @type {string}
     * @memberof SandboxTransferSimulateRequest
     */
    transfer_id: string;
    /**
     * Plaid’s unique identifier for a test clock. If provided, the event to be simulated is created at the `virtual_time` on the provided `test_clock`.
     * @type {string}
     * @memberof SandboxTransferSimulateRequest
     */
    test_clock_id?: string;
    /**
     * The asynchronous event to be simulated. May be: `posted`, `settled`, `failed`, or `returned`.
     * 
     * An error will be returned if the event type is incompatible with the current transfer status. Compatible status --> event type transitions include:
     * 
     * `pending` --> `failed`
     * 
     * `pending` --> `posted`
     * 
     * `posted` --> `returned`
     * 
     * `posted` --> `settled`
     * 
     * @type {string}
     * @memberof SandboxTransferSimulateRequest
     */
    event_type: string;
    /**
     * 
     * @type {TransferFailure}
     * @memberof SandboxTransferSimulateRequest
     */
    failure_reason?: TransferFailure;
}

/**
 * Check if a given object implements the SandboxTransferSimulateRequest interface.
 */
export function instanceOfSandboxTransferSimulateRequest(value: object): boolean {
    if (!('transfer_id' in value)) return false;
    if (!('event_type' in value)) return false;
    return true;
}

export function SandboxTransferSimulateRequestFromJSON(json: any): SandboxTransferSimulateRequest {
    return SandboxTransferSimulateRequestFromJSONTyped(json, false);
}

export function SandboxTransferSimulateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTransferSimulateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'transfer_id': json['transfer_id'],
        'test_clock_id': json['test_clock_id'] == null ? undefined : json['test_clock_id'],
        'event_type': json['event_type'],
        'failure_reason': json['failure_reason'] == null ? undefined : TransferFailureFromJSON(json['failure_reason']),
    };
}

export function SandboxTransferSimulateRequestToJSON(value?: SandboxTransferSimulateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'transfer_id': value['transfer_id'],
        'test_clock_id': value['test_clock_id'],
        'event_type': value['event_type'],
        'failure_reason': TransferFailureToJSON(value['failure_reason']),
    };
}
