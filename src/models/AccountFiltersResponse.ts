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
import type { CreditFilter } from './CreditFilter';
import {
    CreditFilterFromJSON,
    CreditFilterFromJSONTyped,
    CreditFilterToJSON,
} from './CreditFilter';
import type { DepositoryFilter } from './DepositoryFilter';
import {
    DepositoryFilterFromJSON,
    DepositoryFilterFromJSONTyped,
    DepositoryFilterToJSON,
} from './DepositoryFilter';
import type { InvestmentFilter } from './InvestmentFilter';
import {
    InvestmentFilterFromJSON,
    InvestmentFilterFromJSONTyped,
    InvestmentFilterToJSON,
} from './InvestmentFilter';
import type { LoanFilter } from './LoanFilter';
import {
    LoanFilterFromJSON,
    LoanFilterFromJSONTyped,
    LoanFilterToJSON,
} from './LoanFilter';

/**
 * The `account_filters` specified in the original call to `/link/token/create`.
 * 
 * @export
 * @interface AccountFiltersResponse
 */
export interface AccountFiltersResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {DepositoryFilter}
     * @memberof AccountFiltersResponse
     */
    depository?: DepositoryFilter;
    /**
     * 
     * @type {CreditFilter}
     * @memberof AccountFiltersResponse
     */
    credit?: CreditFilter;
    /**
     * 
     * @type {LoanFilter}
     * @memberof AccountFiltersResponse
     */
    loan?: LoanFilter;
    /**
     * 
     * @type {InvestmentFilter}
     * @memberof AccountFiltersResponse
     */
    investment?: InvestmentFilter;
}

/**
 * Check if a given object implements the AccountFiltersResponse interface.
 */
export function instanceOfAccountFiltersResponse(value: object): boolean {
    return true;
}

export function AccountFiltersResponseFromJSON(json: any): AccountFiltersResponse {
    return AccountFiltersResponseFromJSONTyped(json, false);
}

export function AccountFiltersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountFiltersResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'depository': json['depository'] == null ? undefined : DepositoryFilterFromJSON(json['depository']),
        'credit': json['credit'] == null ? undefined : CreditFilterFromJSON(json['credit']),
        'loan': json['loan'] == null ? undefined : LoanFilterFromJSON(json['loan']),
        'investment': json['investment'] == null ? undefined : InvestmentFilterFromJSON(json['investment']),
    };
}

export function AccountFiltersResponseToJSON(value?: AccountFiltersResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'depository': DepositoryFilterToJSON(value['depository']),
        'credit': CreditFilterToJSON(value['credit']),
        'loan': LoanFilterToJSON(value['loan']),
        'investment': InvestmentFilterToJSON(value['investment']),
    };
}
