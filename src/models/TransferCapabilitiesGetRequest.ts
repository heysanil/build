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
 * Defines the request schema for `/transfer/capabilities/get`
 * @export
 * @interface TransferCapabilitiesGetRequest
 */
export interface TransferCapabilitiesGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof TransferCapabilitiesGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof TransferCapabilitiesGetRequest
     */
    secret?: string;
    /**
     * The Plaid `access_token` for the account that will be debited or credited.
     * @type {string}
     * @memberof TransferCapabilitiesGetRequest
     */
    access_token: string;
    /**
     * The Plaid `account_id` corresponding to the end-user account that will be debited or credited.
     * @type {string}
     * @memberof TransferCapabilitiesGetRequest
     */
    account_id: string;
    /**
     * A payment profile token associated with the Payment Profile data that is being requested.
     * @type {string}
     * @memberof TransferCapabilitiesGetRequest
     */
    payment_profile_token?: string;
}

/**
 * Check if a given object implements the TransferCapabilitiesGetRequest interface.
 */
export function instanceOfTransferCapabilitiesGetRequest(value: object): boolean {
    if (!('access_token' in value)) return false;
    if (!('account_id' in value)) return false;
    return true;
}

export function TransferCapabilitiesGetRequestFromJSON(json: any): TransferCapabilitiesGetRequest {
    return TransferCapabilitiesGetRequestFromJSONTyped(json, false);
}

export function TransferCapabilitiesGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferCapabilitiesGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'access_token': json['access_token'],
        'account_id': json['account_id'],
        'payment_profile_token': json['payment_profile_token'] == null ? undefined : json['payment_profile_token'],
    };
}

export function TransferCapabilitiesGetRequestToJSON(value?: TransferCapabilitiesGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'access_token': value['access_token'],
        'account_id': value['account_id'],
        'payment_profile_token': value['payment_profile_token'],
    };
}

