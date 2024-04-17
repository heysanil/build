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
 * Defines the request schema for `/bank_transfer/get`
 * @export
 * @interface BankTransferGetRequest
 */
export interface BankTransferGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof BankTransferGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof BankTransferGetRequest
     */
    secret?: string;
    /**
     * Plaid’s unique identifier for a bank transfer.
     * @type {string}
     * @memberof BankTransferGetRequest
     */
    bank_transfer_id: string;
}

/**
 * Check if a given object implements the BankTransferGetRequest interface.
 */
export function instanceOfBankTransferGetRequest(value: object): boolean {
    if (!('bank_transfer_id' in value)) return false;
    return true;
}

export function BankTransferGetRequestFromJSON(json: any): BankTransferGetRequest {
    return BankTransferGetRequestFromJSONTyped(json, false);
}

export function BankTransferGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransferGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'bank_transfer_id': json['bank_transfer_id'],
    };
}

export function BankTransferGetRequestToJSON(value?: BankTransferGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'bank_transfer_id': value['bank_transfer_id'],
    };
}

