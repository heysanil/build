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
import type { WeakAliasDetermination } from './WeakAliasDetermination';
import {
    WeakAliasDeterminationFromJSON,
    WeakAliasDeterminationFromJSONTyped,
    WeakAliasDeterminationToJSON,
} from './WeakAliasDetermination';

/**
 * Name information for the associated individual watchlist hit
 * @export
 * @interface IndividualScreeningHitNames
 */
export interface IndividualScreeningHitNames {
    [key: string]: any | any;
    /**
     * The full name of the individual, including all parts.
     * @type {string}
     * @memberof IndividualScreeningHitNames
     */
    full: string;
    /**
     * Primary names are those most commonly used to refer to this person. Only one name will ever be marked as primary.
     * @type {boolean}
     * @memberof IndividualScreeningHitNames
     */
    is_primary: boolean;
    /**
     * 
     * @type {WeakAliasDetermination}
     * @memberof IndividualScreeningHitNames
     */
    weak_alias_determination: WeakAliasDetermination;
}

/**
 * Check if a given object implements the IndividualScreeningHitNames interface.
 */
export function instanceOfIndividualScreeningHitNames(value: object): boolean {
    if (!('full' in value)) return false;
    if (!('is_primary' in value)) return false;
    if (!('weak_alias_determination' in value)) return false;
    return true;
}

export function IndividualScreeningHitNamesFromJSON(json: any): IndividualScreeningHitNames {
    return IndividualScreeningHitNamesFromJSONTyped(json, false);
}

export function IndividualScreeningHitNamesFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndividualScreeningHitNames {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'full': json['full'],
        'is_primary': json['is_primary'],
        'weak_alias_determination': WeakAliasDeterminationFromJSON(json['weak_alias_determination']),
    };
}

export function IndividualScreeningHitNamesToJSON(value?: IndividualScreeningHitNames | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'full': value['full'],
        'is_primary': value['is_primary'],
        'weak_alias_determination': WeakAliasDeterminationToJSON(value['weak_alias_determination']),
    };
}

