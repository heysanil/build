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
 * An optional object for `/credit/payroll_income/get` request options.
 * @export
 * @interface CreditPayrollIncomeGetRequestOptions
 */
export interface CreditPayrollIncomeGetRequestOptions {
    /**
     * An array of `item_id`s whose payroll information is returned. Each `item_id` should uniquely identify a payroll income item. If this field is not provided, all `item_id`s associated with the `user_token` will returned in the response.
     * @type {Array<string>}
     * @memberof CreditPayrollIncomeGetRequestOptions
     */
    item_ids?: Array<string>;
}

/**
 * Check if a given object implements the CreditPayrollIncomeGetRequestOptions interface.
 */
export function instanceOfCreditPayrollIncomeGetRequestOptions(value: object): boolean {
    return true;
}

export function CreditPayrollIncomeGetRequestOptionsFromJSON(json: any): CreditPayrollIncomeGetRequestOptions {
    return CreditPayrollIncomeGetRequestOptionsFromJSONTyped(json, false);
}

export function CreditPayrollIncomeGetRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditPayrollIncomeGetRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'item_ids': json['item_ids'] == null ? undefined : json['item_ids'],
    };
}

export function CreditPayrollIncomeGetRequestOptionsToJSON(value?: CreditPayrollIncomeGetRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'item_ids': value['item_ids'],
    };
}
