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
import type { TransferLedgerSweepSimulateEventType } from './TransferLedgerSweepSimulateEventType';
import {
    TransferLedgerSweepSimulateEventTypeFromJSON,
    TransferLedgerSweepSimulateEventTypeFromJSONTyped,
    TransferLedgerSweepSimulateEventTypeToJSON,
} from './TransferLedgerSweepSimulateEventType';

/**
 * Defines the request schema for `/sandbox/transfer/ledger/withdraw/simulate`
 * @export
 * @interface SandboxTransferLedgerWithdrawSimulateRequest
 */
export interface SandboxTransferLedgerWithdrawSimulateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof SandboxTransferLedgerWithdrawSimulateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof SandboxTransferLedgerWithdrawSimulateRequest
     */
    secret?: string;
    /**
     * Plaid’s unique identifier for a sweep.
     * @type {string}
     * @memberof SandboxTransferLedgerWithdrawSimulateRequest
     */
    sweep_id: string;
    /**
     * 
     * @type {TransferLedgerSweepSimulateEventType}
     * @memberof SandboxTransferLedgerWithdrawSimulateRequest
     */
    event_type: TransferLedgerSweepSimulateEventType;
    /**
     * 
     * @type {TransferFailure}
     * @memberof SandboxTransferLedgerWithdrawSimulateRequest
     */
    failure_reason?: TransferFailure;
}

/**
 * Check if a given object implements the SandboxTransferLedgerWithdrawSimulateRequest interface.
 */
export function instanceOfSandboxTransferLedgerWithdrawSimulateRequest(value: object): boolean {
    if (!('sweep_id' in value)) return false;
    if (!('event_type' in value)) return false;
    return true;
}

export function SandboxTransferLedgerWithdrawSimulateRequestFromJSON(json: any): SandboxTransferLedgerWithdrawSimulateRequest {
    return SandboxTransferLedgerWithdrawSimulateRequestFromJSONTyped(json, false);
}

export function SandboxTransferLedgerWithdrawSimulateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTransferLedgerWithdrawSimulateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'sweep_id': json['sweep_id'],
        'event_type': TransferLedgerSweepSimulateEventTypeFromJSON(json['event_type']),
        'failure_reason': json['failure_reason'] == null ? undefined : TransferFailureFromJSON(json['failure_reason']),
    };
}

export function SandboxTransferLedgerWithdrawSimulateRequestToJSON(value?: SandboxTransferLedgerWithdrawSimulateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'sweep_id': value['sweep_id'],
        'event_type': TransferLedgerSweepSimulateEventTypeToJSON(value['event_type']),
        'failure_reason': TransferFailureToJSON(value['failure_reason']),
    };
}

