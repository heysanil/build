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
import type { AccountBase } from './AccountBase';
import {
    AccountBaseFromJSON,
    AccountBaseFromJSONTyped,
    AccountBaseToJSON,
} from './AccountBase';
import type { InvestmentTransaction } from './InvestmentTransaction';
import {
    InvestmentTransactionFromJSON,
    InvestmentTransactionFromJSONTyped,
    InvestmentTransactionToJSON,
} from './InvestmentTransaction';
import type { Item } from './Item';
import {
    ItemFromJSON,
    ItemFromJSONTyped,
    ItemToJSON,
} from './Item';
import type { Security } from './Security';
import {
    SecurityFromJSON,
    SecurityFromJSONTyped,
    SecurityToJSON,
} from './Security';

/**
 * InvestmentsTransactionsGetResponse defines the response schema for `/investments/transactions/get`
 * @export
 * @interface InvestmentsTransactionsGetResponse
 */
export interface InvestmentsTransactionsGetResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {Item}
     * @memberof InvestmentsTransactionsGetResponse
     */
    item: Item;
    /**
     * The accounts for which transaction history is being fetched.
     * @type {Array<AccountBase>}
     * @memberof InvestmentsTransactionsGetResponse
     */
    accounts: Array<AccountBase>;
    /**
     * All securities for which there is a corresponding transaction being fetched.
     * @type {Array<Security>}
     * @memberof InvestmentsTransactionsGetResponse
     */
    securities: Array<Security>;
    /**
     * The transactions being fetched
     * @type {Array<InvestmentTransaction>}
     * @memberof InvestmentsTransactionsGetResponse
     */
    investment_transactions: Array<InvestmentTransaction>;
    /**
     * The total number of transactions available within the date range specified. If `total_investment_transactions` is larger than the size of the `transactions` array, more transactions are available and can be fetched via manipulating the `offset` parameter.
     * @type {number}
     * @memberof InvestmentsTransactionsGetResponse
     */
    total_investment_transactions: number;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof InvestmentsTransactionsGetResponse
     */
    request_id: string;
    /**
     * When true, this field indicates that the Item's portfolio was manually created with the Investments Fallback flow.
     * @type {boolean}
     * @memberof InvestmentsTransactionsGetResponse
     */
    is_investments_fallback_item?: boolean;
}

/**
 * Check if a given object implements the InvestmentsTransactionsGetResponse interface.
 */
export function instanceOfInvestmentsTransactionsGetResponse(value: object): boolean {
    if (!('item' in value)) return false;
    if (!('accounts' in value)) return false;
    if (!('securities' in value)) return false;
    if (!('investment_transactions' in value)) return false;
    if (!('total_investment_transactions' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function InvestmentsTransactionsGetResponseFromJSON(json: any): InvestmentsTransactionsGetResponse {
    return InvestmentsTransactionsGetResponseFromJSONTyped(json, false);
}

export function InvestmentsTransactionsGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvestmentsTransactionsGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'item': ItemFromJSON(json['item']),
        'accounts': ((json['accounts'] as Array<any>).map(AccountBaseFromJSON)),
        'securities': ((json['securities'] as Array<any>).map(SecurityFromJSON)),
        'investment_transactions': ((json['investment_transactions'] as Array<any>).map(InvestmentTransactionFromJSON)),
        'total_investment_transactions': json['total_investment_transactions'],
        'request_id': json['request_id'],
        'is_investments_fallback_item': json['is_investments_fallback_item'] == null ? undefined : json['is_investments_fallback_item'],
    };
}

export function InvestmentsTransactionsGetResponseToJSON(value?: InvestmentsTransactionsGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'item': ItemToJSON(value['item']),
        'accounts': ((value['accounts'] as Array<any>).map(AccountBaseToJSON)),
        'securities': ((value['securities'] as Array<any>).map(SecurityToJSON)),
        'investment_transactions': ((value['investment_transactions'] as Array<any>).map(InvestmentTransactionToJSON)),
        'total_investment_transactions': value['total_investment_transactions'],
        'request_id': value['request_id'],
        'is_investments_fallback_item': value['is_investments_fallback_item'],
    };
}

