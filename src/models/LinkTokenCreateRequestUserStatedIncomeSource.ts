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
import type { UserStatedIncomeSourceCategory } from './UserStatedIncomeSourceCategory';
import {
    UserStatedIncomeSourceCategoryFromJSON,
    UserStatedIncomeSourceCategoryFromJSONTyped,
    UserStatedIncomeSourceCategoryToJSON,
} from './UserStatedIncomeSourceCategory';
import type { UserStatedIncomeSourceFrequency } from './UserStatedIncomeSourceFrequency';
import {
    UserStatedIncomeSourceFrequencyFromJSON,
    UserStatedIncomeSourceFrequencyFromJSONTyped,
    UserStatedIncomeSourceFrequencyToJSON,
} from './UserStatedIncomeSourceFrequency';
import type { UserStatedIncomeSourcePayType } from './UserStatedIncomeSourcePayType';
import {
    UserStatedIncomeSourcePayTypeFromJSON,
    UserStatedIncomeSourcePayTypeFromJSONTyped,
    UserStatedIncomeSourcePayTypeToJSON,
} from './UserStatedIncomeSourcePayType';

/**
 * Specifies user stated income sources for the Income product
 * @export
 * @interface LinkTokenCreateRequestUserStatedIncomeSource
 */
export interface LinkTokenCreateRequestUserStatedIncomeSource {
    /**
     * The employer corresponding to an income source specified by the user
     * @type {string}
     * @memberof LinkTokenCreateRequestUserStatedIncomeSource
     */
    employer?: string;
    /**
     * 
     * @type {UserStatedIncomeSourceCategory}
     * @memberof LinkTokenCreateRequestUserStatedIncomeSource
     */
    category?: UserStatedIncomeSourceCategory;
    /**
     * The income amount paid per cycle for a specified income source
     * @type {number}
     * @memberof LinkTokenCreateRequestUserStatedIncomeSource
     */
    pay_per_cycle?: number;
    /**
     * The income amount paid annually for a specified income source
     * @type {number}
     * @memberof LinkTokenCreateRequestUserStatedIncomeSource
     */
    pay_annual?: number;
    /**
     * 
     * @type {UserStatedIncomeSourcePayType}
     * @memberof LinkTokenCreateRequestUserStatedIncomeSource
     */
    pay_type?: UserStatedIncomeSourcePayType;
    /**
     * 
     * @type {UserStatedIncomeSourceFrequency}
     * @memberof LinkTokenCreateRequestUserStatedIncomeSource
     */
    pay_frequency?: UserStatedIncomeSourceFrequency;
}

/**
 * Check if a given object implements the LinkTokenCreateRequestUserStatedIncomeSource interface.
 */
export function instanceOfLinkTokenCreateRequestUserStatedIncomeSource(value: object): boolean {
    return true;
}

export function LinkTokenCreateRequestUserStatedIncomeSourceFromJSON(json: any): LinkTokenCreateRequestUserStatedIncomeSource {
    return LinkTokenCreateRequestUserStatedIncomeSourceFromJSONTyped(json, false);
}

export function LinkTokenCreateRequestUserStatedIncomeSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTokenCreateRequestUserStatedIncomeSource {
    if (json == null) {
        return json;
    }
    return {
        
        'employer': json['employer'] == null ? undefined : json['employer'],
        'category': json['category'] == null ? undefined : UserStatedIncomeSourceCategoryFromJSON(json['category']),
        'pay_per_cycle': json['pay_per_cycle'] == null ? undefined : json['pay_per_cycle'],
        'pay_annual': json['pay_annual'] == null ? undefined : json['pay_annual'],
        'pay_type': json['pay_type'] == null ? undefined : UserStatedIncomeSourcePayTypeFromJSON(json['pay_type']),
        'pay_frequency': json['pay_frequency'] == null ? undefined : UserStatedIncomeSourceFrequencyFromJSON(json['pay_frequency']),
    };
}

export function LinkTokenCreateRequestUserStatedIncomeSourceToJSON(value?: LinkTokenCreateRequestUserStatedIncomeSource | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'employer': value['employer'],
        'category': UserStatedIncomeSourceCategoryToJSON(value['category']),
        'pay_per_cycle': value['pay_per_cycle'],
        'pay_annual': value['pay_annual'],
        'pay_type': UserStatedIncomeSourcePayTypeToJSON(value['pay_type']),
        'pay_frequency': UserStatedIncomeSourceFrequencyToJSON(value['pay_frequency']),
    };
}

