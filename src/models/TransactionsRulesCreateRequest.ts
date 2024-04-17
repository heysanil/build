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
import type { TransactionsRuleDetails } from './TransactionsRuleDetails';
import {
    TransactionsRuleDetailsFromJSON,
    TransactionsRuleDetailsFromJSONTyped,
    TransactionsRuleDetailsToJSON,
} from './TransactionsRuleDetails';

/**
 * TransactionsRulesCreateRequest defines the request schema for `beta/transactions/rules/v1/create`
 * @export
 * @interface TransactionsRulesCreateRequest
 */
export interface TransactionsRulesCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof TransactionsRulesCreateRequest
     */
    client_id?: string;
    /**
     * The access token associated with the Item data is being requested for.
     * @type {string}
     * @memberof TransactionsRulesCreateRequest
     */
    access_token: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof TransactionsRulesCreateRequest
     */
    secret?: string;
    /**
     * Personal finance detailed category.
     * 
     * All implementations are encouraged to use this field instead of `category`, as it provides more meaningful and accurate categorization.
     * 
     * See the [`taxonomy csv file`](https://plaid.com/documents/transactions-personal-finance-category-taxonomy.csv) for a full list of personal finance categories.
     * 
     * @type {string}
     * @memberof TransactionsRulesCreateRequest
     */
    personal_finance_category: string;
    /**
     * 
     * @type {TransactionsRuleDetails}
     * @memberof TransactionsRulesCreateRequest
     */
    rule_details: TransactionsRuleDetails;
}

/**
 * Check if a given object implements the TransactionsRulesCreateRequest interface.
 */
export function instanceOfTransactionsRulesCreateRequest(value: object): boolean {
    if (!('access_token' in value)) return false;
    if (!('personal_finance_category' in value)) return false;
    if (!('rule_details' in value)) return false;
    return true;
}

export function TransactionsRulesCreateRequestFromJSON(json: any): TransactionsRulesCreateRequest {
    return TransactionsRulesCreateRequestFromJSONTyped(json, false);
}

export function TransactionsRulesCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsRulesCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'access_token': json['access_token'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'personal_finance_category': json['personal_finance_category'],
        'rule_details': TransactionsRuleDetailsFromJSON(json['rule_details']),
    };
}

export function TransactionsRulesCreateRequestToJSON(value?: TransactionsRulesCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'access_token': value['access_token'],
        'secret': value['secret'],
        'personal_finance_category': value['personal_finance_category'],
        'rule_details': TransactionsRuleDetailsToJSON(value['rule_details']),
    };
}

