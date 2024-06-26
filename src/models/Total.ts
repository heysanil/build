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
import type { Pay } from './Pay';
import {
    PayFromJSON,
    PayFromJSONTyped,
    PayToJSON,
} from './Pay';
import type { TotalCanonicalDescription } from './TotalCanonicalDescription';
import {
    TotalCanonicalDescriptionFromJSON,
    TotalCanonicalDescriptionFromJSONTyped,
    TotalCanonicalDescriptionToJSON,
} from './TotalCanonicalDescription';

/**
 * An object representing both the current pay period and year to date amount for a category.
 * @export
 * @interface Total
 */
export interface Total {
    [key: string]: any | any;
    /**
     * 
     * @type {TotalCanonicalDescription}
     * @memberof Total
     */
    canonical_description?: TotalCanonicalDescription;
    /**
     * Text of the line item as printed on the paystub.
     * @type {string}
     * @memberof Total
     */
    description?: string;
    /**
     * 
     * @type {Pay}
     * @memberof Total
     * @deprecated
     */
    current_pay?: Pay;
    /**
     * 
     * @type {Pay}
     * @memberof Total
     * @deprecated
     */
    ytd_pay?: Pay;
}

/**
 * Check if a given object implements the Total interface.
 */
export function instanceOfTotal(value: object): boolean {
    return true;
}

export function TotalFromJSON(json: any): Total {
    return TotalFromJSONTyped(json, false);
}

export function TotalFromJSONTyped(json: any, ignoreDiscriminator: boolean): Total {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'canonical_description': json['canonical_description'] == null ? undefined : TotalCanonicalDescriptionFromJSON(json['canonical_description']),
        'description': json['description'] == null ? undefined : json['description'],
        'current_pay': json['current_pay'] == null ? undefined : PayFromJSON(json['current_pay']),
        'ytd_pay': json['ytd_pay'] == null ? undefined : PayFromJSON(json['ytd_pay']),
    };
}

export function TotalToJSON(value?: Total | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'canonical_description': TotalCanonicalDescriptionToJSON(value['canonical_description']),
        'description': value['description'],
        'current_pay': PayToJSON(value['current_pay']),
        'ytd_pay': PayToJSON(value['ytd_pay']),
    };
}

