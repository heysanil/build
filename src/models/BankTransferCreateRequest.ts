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
import type { ACHClass } from './ACHClass';
import {
    ACHClassFromJSON,
    ACHClassFromJSONTyped,
    ACHClassToJSON,
} from './ACHClass';
import type { BankTransferNetwork } from './BankTransferNetwork';
import {
    BankTransferNetworkFromJSON,
    BankTransferNetworkFromJSONTyped,
    BankTransferNetworkToJSON,
} from './BankTransferNetwork';
import type { BankTransferType } from './BankTransferType';
import {
    BankTransferTypeFromJSON,
    BankTransferTypeFromJSONTyped,
    BankTransferTypeToJSON,
} from './BankTransferType';
import type { BankTransferUser } from './BankTransferUser';
import {
    BankTransferUserFromJSON,
    BankTransferUserFromJSONTyped,
    BankTransferUserToJSON,
} from './BankTransferUser';

/**
 * Defines the request schema for `/bank_transfer/create`
 * @export
 * @interface BankTransferCreateRequest
 */
export interface BankTransferCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof BankTransferCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof BankTransferCreateRequest
     */
    secret?: string;
    /**
     * A random key provided by the client, per unique bank transfer. Maximum of 50 characters.
     * 
     * The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a bank transfer fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single bank transfer is created.
     * @type {string}
     * @memberof BankTransferCreateRequest
     */
    idempotency_key: string;
    /**
     * The Plaid `access_token` for the account that will be debited or credited.
     * @type {string}
     * @memberof BankTransferCreateRequest
     */
    access_token: string;
    /**
     * The Plaid `account_id` for the account that will be debited or credited.
     * @type {string}
     * @memberof BankTransferCreateRequest
     */
    account_id: string;
    /**
     * 
     * @type {BankTransferType}
     * @memberof BankTransferCreateRequest
     */
    type: BankTransferType;
    /**
     * 
     * @type {BankTransferNetwork}
     * @memberof BankTransferCreateRequest
     */
    network: BankTransferNetwork;
    /**
     * The amount of the bank transfer (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof BankTransferCreateRequest
     */
    amount: string;
    /**
     * The currency of the transfer amount – should be set to "USD".
     * @type {string}
     * @memberof BankTransferCreateRequest
     */
    iso_currency_code: string;
    /**
     * The transfer description. Maximum of 10 characters.
     * @type {string}
     * @memberof BankTransferCreateRequest
     */
    description: string;
    /**
     * 
     * @type {ACHClass}
     * @memberof BankTransferCreateRequest
     */
    ach_class?: ACHClass;
    /**
     * 
     * @type {BankTransferUser}
     * @memberof BankTransferCreateRequest
     */
    user: BankTransferUser;
    /**
     * An arbitrary string provided by the client for storage with the bank transfer. May be up to 100 characters.
     * @type {string}
     * @memberof BankTransferCreateRequest
     */
    custom_tag?: string;
    /**
     * The Metadata object is a mapping of client-provided string fields to any string value. The following limitations apply:
     * The JSON values must be Strings (no nested JSON objects allowed)
     * Only ASCII characters may be used
     * Maximum of 50 key/value pairs
     * Maximum key length of 40 characters
     * Maximum value length of 500 characters
     * 
     * @type {{ [key: string]: string; }}
     * @memberof BankTransferCreateRequest
     */
    metadata?: { [key: string]: string; };
    /**
     * Plaid’s unique identifier for the origination account for this transfer. If you have more than one origination account, this value must be specified. Otherwise, this field should be left blank.
     * @type {string}
     * @memberof BankTransferCreateRequest
     */
    origination_account_id?: string;
}

/**
 * Check if a given object implements the BankTransferCreateRequest interface.
 */
export function instanceOfBankTransferCreateRequest(value: object): boolean {
    if (!('idempotency_key' in value)) return false;
    if (!('access_token' in value)) return false;
    if (!('account_id' in value)) return false;
    if (!('type' in value)) return false;
    if (!('network' in value)) return false;
    if (!('amount' in value)) return false;
    if (!('iso_currency_code' in value)) return false;
    if (!('description' in value)) return false;
    if (!('user' in value)) return false;
    return true;
}

export function BankTransferCreateRequestFromJSON(json: any): BankTransferCreateRequest {
    return BankTransferCreateRequestFromJSONTyped(json, false);
}

export function BankTransferCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransferCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'idempotency_key': json['idempotency_key'],
        'access_token': json['access_token'],
        'account_id': json['account_id'],
        'type': BankTransferTypeFromJSON(json['type']),
        'network': BankTransferNetworkFromJSON(json['network']),
        'amount': json['amount'],
        'iso_currency_code': json['iso_currency_code'],
        'description': json['description'],
        'ach_class': json['ach_class'] == null ? undefined : ACHClassFromJSON(json['ach_class']),
        'user': BankTransferUserFromJSON(json['user']),
        'custom_tag': json['custom_tag'] == null ? undefined : json['custom_tag'],
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'origination_account_id': json['origination_account_id'] == null ? undefined : json['origination_account_id'],
    };
}

export function BankTransferCreateRequestToJSON(value?: BankTransferCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'idempotency_key': value['idempotency_key'],
        'access_token': value['access_token'],
        'account_id': value['account_id'],
        'type': BankTransferTypeToJSON(value['type']),
        'network': BankTransferNetworkToJSON(value['network']),
        'amount': value['amount'],
        'iso_currency_code': value['iso_currency_code'],
        'description': value['description'],
        'ach_class': ACHClassToJSON(value['ach_class']),
        'user': BankTransferUserToJSON(value['user']),
        'custom_tag': value['custom_tag'],
        'metadata': value['metadata'],
        'origination_account_id': value['origination_account_id'],
    };
}

