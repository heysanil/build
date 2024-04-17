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
import type { PayrollRiskSignalsItem } from './PayrollRiskSignalsItem';
import {
    PayrollRiskSignalsItemFromJSON,
    PayrollRiskSignalsItemFromJSONTyped,
    PayrollRiskSignalsItemToJSON,
} from './PayrollRiskSignalsItem';
import type { PlaidError } from './PlaidError';
import {
    PlaidErrorFromJSON,
    PlaidErrorFromJSONTyped,
    PlaidErrorToJSON,
} from './PlaidError';

/**
 * CreditPayrollIncomeRiskSignalsGetRequest defines the response schema for `/credit/payroll_income/risk_signals/get`
 * @export
 * @interface CreditPayrollIncomeRiskSignalsGetResponse
 */
export interface CreditPayrollIncomeRiskSignalsGetResponse {
    [key: string]: any | any;
    /**
     * Array of payroll items.
     * @type {Array<PayrollRiskSignalsItem>}
     * @memberof CreditPayrollIncomeRiskSignalsGetResponse
     */
    items: Array<PayrollRiskSignalsItem>;
    /**
     * 
     * @type {PlaidError}
     * @memberof CreditPayrollIncomeRiskSignalsGetResponse
     */
    error?: PlaidError;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof CreditPayrollIncomeRiskSignalsGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the CreditPayrollIncomeRiskSignalsGetResponse interface.
 */
export function instanceOfCreditPayrollIncomeRiskSignalsGetResponse(value: object): boolean {
    if (!('items' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function CreditPayrollIncomeRiskSignalsGetResponseFromJSON(json: any): CreditPayrollIncomeRiskSignalsGetResponse {
    return CreditPayrollIncomeRiskSignalsGetResponseFromJSONTyped(json, false);
}

export function CreditPayrollIncomeRiskSignalsGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditPayrollIncomeRiskSignalsGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'items': ((json['items'] as Array<any>).map(PayrollRiskSignalsItemFromJSON)),
        'error': json['error'] == null ? undefined : PlaidErrorFromJSON(json['error']),
        'request_id': json['request_id'],
    };
}

export function CreditPayrollIncomeRiskSignalsGetResponseToJSON(value?: CreditPayrollIncomeRiskSignalsGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'items': ((value['items'] as Array<any>).map(PayrollRiskSignalsItemToJSON)),
        'error': PlaidErrorToJSON(value['error']),
        'request_id': value['request_id'],
    };
}

