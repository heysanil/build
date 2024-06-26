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
 * Defines the request schema for `/processor/bank_transfer/create`
 * @export
 * @interface ProcessorBankTransferCreateRequest
 */
export interface ProcessorBankTransferCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorBankTransferCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorBankTransferCreateRequest
     */
    secret?: string;
    /**
     * A random key provided by the client, per unique bank transfer. Maximum of 50 characters.
     * 
     * The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a bank transfer fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single bank transfer is created.
     * @type {string}
     * @memberof ProcessorBankTransferCreateRequest
     */
    idempotency_key: string;
    /**
     * The processor token obtained from the Plaid integration partner. Processor tokens are in the format: `processor-<environment>-<identifier>`
     * @type {string}
     * @memberof ProcessorBankTransferCreateRequest
     */
    processor_token: string;
    /**
     * 
     * @type {BankTransferType}
     * @memberof ProcessorBankTransferCreateRequest
     */
    type: BankTransferType;
    /**
     * 
     * @type {BankTransferNetwork}
     * @memberof ProcessorBankTransferCreateRequest
     */
    network: BankTransferNetwork;
    /**
     * The amount of the bank transfer (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof ProcessorBankTransferCreateRequest
     */
    amount: string;
    /**
     * The currency of the transfer amount – should be set to "USD".
     * @type {string}
     * @memberof ProcessorBankTransferCreateRequest
     */
    iso_currency_code: string;
    /**
     * The transfer description. Maximum of 10 characters.
     * @type {string}
     * @memberof ProcessorBankTransferCreateRequest
     */
    description: string;
    /**
     * 
     * @type {ACHClass}
     * @memberof ProcessorBankTransferCreateRequest
     */
    ach_class?: ACHClass;
    /**
     * 
     * @type {BankTransferUser}
     * @memberof ProcessorBankTransferCreateRequest
     */
    user: BankTransferUser;
    /**
     * An arbitrary string provided by the client for storage with the bank transfer. May be up to 100 characters.
     * @type {string}
     * @memberof ProcessorBankTransferCreateRequest
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
     * @memberof ProcessorBankTransferCreateRequest
     */
    metadata?: { [key: string]: string; };
    /**
     * Plaid’s unique identifier for the origination account for this transfer. If you have more than one origination account, this value must be specified.
     * @type {string}
     * @memberof ProcessorBankTransferCreateRequest
     */
    origination_account_id?: string;
}

/**
 * Check if a given object implements the ProcessorBankTransferCreateRequest interface.
 */
export function instanceOfProcessorBankTransferCreateRequest(value: object): boolean {
    if (!('idempotency_key' in value)) return false;
    if (!('processor_token' in value)) return false;
    if (!('type' in value)) return false;
    if (!('network' in value)) return false;
    if (!('amount' in value)) return false;
    if (!('iso_currency_code' in value)) return false;
    if (!('description' in value)) return false;
    if (!('user' in value)) return false;
    return true;
}

export function ProcessorBankTransferCreateRequestFromJSON(json: any): ProcessorBankTransferCreateRequest {
    return ProcessorBankTransferCreateRequestFromJSONTyped(json, false);
}

export function ProcessorBankTransferCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorBankTransferCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'idempotency_key': json['idempotency_key'],
        'processor_token': json['processor_token'],
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

export function ProcessorBankTransferCreateRequestToJSON(value?: ProcessorBankTransferCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'idempotency_key': value['idempotency_key'],
        'processor_token': value['processor_token'],
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

