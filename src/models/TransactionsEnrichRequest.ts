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
import type { ClientProvidedTransaction } from './ClientProvidedTransaction';
import {
    ClientProvidedTransactionFromJSON,
    ClientProvidedTransactionFromJSONTyped,
    ClientProvidedTransactionToJSON,
} from './ClientProvidedTransaction';
import type { TransactionsEnrichRequestOptions } from './TransactionsEnrichRequestOptions';
import {
    TransactionsEnrichRequestOptionsFromJSON,
    TransactionsEnrichRequestOptionsFromJSONTyped,
    TransactionsEnrichRequestOptionsToJSON,
} from './TransactionsEnrichRequestOptions';

/**
 * TransactionsEnrichRequest defines the request schema for `/transactions/enrich`.
 * @export
 * @interface TransactionsEnrichRequest
 */
export interface TransactionsEnrichRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof TransactionsEnrichRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof TransactionsEnrichRequest
     */
    secret?: string;
    /**
     * The account type for the requested transactions (either `depository` or `credit`).
     * @type {string}
     * @memberof TransactionsEnrichRequest
     */
    account_type: string;
    /**
     * An array of transaction objects to be enriched by Plaid. Maximum of 100 transactions per request.
     * @type {Array<ClientProvidedTransaction>}
     * @memberof TransactionsEnrichRequest
     */
    transactions: Array<ClientProvidedTransaction>;
    /**
     * 
     * @type {TransactionsEnrichRequestOptions}
     * @memberof TransactionsEnrichRequest
     */
    options?: TransactionsEnrichRequestOptions;
}

/**
 * Check if a given object implements the TransactionsEnrichRequest interface.
 */
export function instanceOfTransactionsEnrichRequest(value: object): boolean {
    if (!('account_type' in value)) return false;
    if (!('transactions' in value)) return false;
    return true;
}

export function TransactionsEnrichRequestFromJSON(json: any): TransactionsEnrichRequest {
    return TransactionsEnrichRequestFromJSONTyped(json, false);
}

export function TransactionsEnrichRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsEnrichRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'account_type': json['account_type'],
        'transactions': ((json['transactions'] as Array<any>).map(ClientProvidedTransactionFromJSON)),
        'options': json['options'] == null ? undefined : TransactionsEnrichRequestOptionsFromJSON(json['options']),
    };
}

export function TransactionsEnrichRequestToJSON(value?: TransactionsEnrichRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'account_type': value['account_type'],
        'transactions': ((value['transactions'] as Array<any>).map(ClientProvidedTransactionToJSON)),
        'options': TransactionsEnrichRequestOptionsToJSON(value['options']),
    };
}

