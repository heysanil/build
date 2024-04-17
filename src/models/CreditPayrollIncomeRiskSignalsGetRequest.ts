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
 * CreditPayrollIncomeRiskSignalsGetRequest defines the request schema for `/credit/payroll_income/risk_signals/get`
 * @export
 * @interface CreditPayrollIncomeRiskSignalsGetRequest
 */
export interface CreditPayrollIncomeRiskSignalsGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof CreditPayrollIncomeRiskSignalsGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof CreditPayrollIncomeRiskSignalsGetRequest
     */
    secret?: string;
    /**
     * The user token associated with the User data is being requested for.
     * @type {string}
     * @memberof CreditPayrollIncomeRiskSignalsGetRequest
     */
    user_token?: string;
}

/**
 * Check if a given object implements the CreditPayrollIncomeRiskSignalsGetRequest interface.
 */
export function instanceOfCreditPayrollIncomeRiskSignalsGetRequest(value: object): boolean {
    return true;
}

export function CreditPayrollIncomeRiskSignalsGetRequestFromJSON(json: any): CreditPayrollIncomeRiskSignalsGetRequest {
    return CreditPayrollIncomeRiskSignalsGetRequestFromJSONTyped(json, false);
}

export function CreditPayrollIncomeRiskSignalsGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditPayrollIncomeRiskSignalsGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'user_token': json['user_token'] == null ? undefined : json['user_token'],
    };
}

export function CreditPayrollIncomeRiskSignalsGetRequestToJSON(value?: CreditPayrollIncomeRiskSignalsGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'user_token': value['user_token'],
    };
}

