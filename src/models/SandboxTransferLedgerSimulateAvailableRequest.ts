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
 * Defines the request schema for `/sandbox/transfer/ledger/simulate_available`
 * @export
 * @interface SandboxTransferLedgerSimulateAvailableRequest
 */
export interface SandboxTransferLedgerSimulateAvailableRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof SandboxTransferLedgerSimulateAvailableRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof SandboxTransferLedgerSimulateAvailableRequest
     */
    secret?: string;
    /**
     * Plaid’s unique identifier for a test clock. If provided, only the pending balance that is due before the `virtual_timestamp` on the test clock will be converted.
     * @type {string}
     * @memberof SandboxTransferLedgerSimulateAvailableRequest
     */
    test_clock_id?: string;
}

/**
 * Check if a given object implements the SandboxTransferLedgerSimulateAvailableRequest interface.
 */
export function instanceOfSandboxTransferLedgerSimulateAvailableRequest(value: object): boolean {
    return true;
}

export function SandboxTransferLedgerSimulateAvailableRequestFromJSON(json: any): SandboxTransferLedgerSimulateAvailableRequest {
    return SandboxTransferLedgerSimulateAvailableRequestFromJSONTyped(json, false);
}

export function SandboxTransferLedgerSimulateAvailableRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SandboxTransferLedgerSimulateAvailableRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'test_clock_id': json['test_clock_id'] == null ? undefined : json['test_clock_id'],
    };
}

export function SandboxTransferLedgerSimulateAvailableRequestToJSON(value?: SandboxTransferLedgerSimulateAvailableRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'test_clock_id': value['test_clock_id'],
    };
}

