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
import type { WalletISOCurrencyCode } from './WalletISOCurrencyCode';
import {
    WalletISOCurrencyCodeFromJSON,
    WalletISOCurrencyCodeFromJSONTyped,
    WalletISOCurrencyCodeToJSON,
} from './WalletISOCurrencyCode';

/**
 * WalletCreateRequest defines the request schema for `/wallet/create`
 * @export
 * @interface WalletCreateRequest
 */
export interface WalletCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof WalletCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof WalletCreateRequest
     */
    secret?: string;
    /**
     * 
     * @type {WalletISOCurrencyCode}
     * @memberof WalletCreateRequest
     */
    iso_currency_code: WalletISOCurrencyCode;
}

/**
 * Check if a given object implements the WalletCreateRequest interface.
 */
export function instanceOfWalletCreateRequest(value: object): boolean {
    if (!('iso_currency_code' in value)) return false;
    return true;
}

export function WalletCreateRequestFromJSON(json: any): WalletCreateRequest {
    return WalletCreateRequestFromJSONTyped(json, false);
}

export function WalletCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'iso_currency_code': WalletISOCurrencyCodeFromJSON(json['iso_currency_code']),
    };
}

export function WalletCreateRequestToJSON(value?: WalletCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'iso_currency_code': WalletISOCurrencyCodeToJSON(value['iso_currency_code']),
    };
}

