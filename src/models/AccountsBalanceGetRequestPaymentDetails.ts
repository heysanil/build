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
 * An optional object containing payment details. If set, a payment risk assessment is performed and returned as AccountsBalanceGetResponsePaymentRiskAssessment.
 * @export
 * @interface AccountsBalanceGetRequestPaymentDetails
 */
export interface AccountsBalanceGetRequestPaymentDetails {
    [key: string]: any | any;
    /**
     * The Plaid `account_id` of the account that is the funding source for the proposed transaction. The `account_id` is returned in the `/accounts/get` endpoint as well as the [`onSuccess`](/docs/link/ios/#link-ios-onsuccess-linkSuccess-metadata-accounts-id) callback metadata.
     * 
     * This will return an [`INVALID_ACCOUNT_ID`](/docs/errors/invalid-input/#invalid_account_id) error if the account has been removed at the bank or if the `account_id` is no longer valid.
     * @type {string}
     * @memberof AccountsBalanceGetRequestPaymentDetails
     */
    account_id?: string;
    /**
     * The unique ID that you would like to use to refer to this transaction. For your convenience mapping your internal data, you could use your internal identifier for this transaction. The max length for this field is 36 characters.
     * @type {string}
     * @memberof AccountsBalanceGetRequestPaymentDetails
     */
    client_transaction_id?: string;
    /**
     * The transaction amount, in USD (e.g. `102.05`)
     * @type {number}
     * @memberof AccountsBalanceGetRequestPaymentDetails
     */
    amount?: number;
    /**
     * The threshold percentage of the account balance used for comparison with the requested ACH debit amount.
     * @type {number}
     * @memberof AccountsBalanceGetRequestPaymentDetails
     */
    balance_threshold_percentage?: number;
    /**
     * A boolean that determines whether the balance has to be refreshed in real time as part of the API call.
     * @type {boolean}
     * @memberof AccountsBalanceGetRequestPaymentDetails
     */
    requires_real_time_balance_refresh?: boolean;
}

/**
 * Check if a given object implements the AccountsBalanceGetRequestPaymentDetails interface.
 */
export function instanceOfAccountsBalanceGetRequestPaymentDetails(value: object): boolean {
    return true;
}

export function AccountsBalanceGetRequestPaymentDetailsFromJSON(json: any): AccountsBalanceGetRequestPaymentDetails {
    return AccountsBalanceGetRequestPaymentDetailsFromJSONTyped(json, false);
}

export function AccountsBalanceGetRequestPaymentDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsBalanceGetRequestPaymentDetails {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'account_id': json['account_id'] == null ? undefined : json['account_id'],
        'client_transaction_id': json['client_transaction_id'] == null ? undefined : json['client_transaction_id'],
        'amount': json['amount'] == null ? undefined : json['amount'],
        'balance_threshold_percentage': json['balance_threshold_percentage'] == null ? undefined : json['balance_threshold_percentage'],
        'requires_real_time_balance_refresh': json['requires_real_time_balance_refresh'] == null ? undefined : json['requires_real_time_balance_refresh'],
    };
}

export function AccountsBalanceGetRequestPaymentDetailsToJSON(value?: AccountsBalanceGetRequestPaymentDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'account_id': value['account_id'],
        'client_transaction_id': value['client_transaction_id'],
        'amount': value['amount'],
        'balance_threshold_percentage': value['balance_threshold_percentage'],
        'requires_real_time_balance_refresh': value['requires_real_time_balance_refresh'],
    };
}

