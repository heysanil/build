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
 * Name information for the associated entity watchlist hit
 * @export
 * @interface EntityScreeningHitNames
 */
export interface EntityScreeningHitNames {
    [key: string]: any | any;
    /**
     * The full name of the entity.
     * @type {string}
     * @memberof EntityScreeningHitNames
     */
    full: string;
    /**
     * Primary names are those most commonly used to refer to this entity. Only one name will ever be marked as primary.
     * @type {boolean}
     * @memberof EntityScreeningHitNames
     */
    is_primary: boolean;
    /**
     * 
     * @type {WeakAliasDetermination}
     * @memberof EntityScreeningHitNames
     */
    weak_alias_determination: WeakAliasDetermination;
}

/**
 * Check if a given object implements the EntityScreeningHitNames interface.
 */
export function instanceOfEntityScreeningHitNames(value: object): boolean {
    if (!('full' in value)) return false;
    if (!('is_primary' in value)) return false;
    if (!('weak_alias_determination' in value)) return false;
    return true;
}

export function EntityScreeningHitNamesFromJSON(json: any): EntityScreeningHitNames {
    return EntityScreeningHitNamesFromJSONTyped(json, false);
}

export function EntityScreeningHitNamesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityScreeningHitNames {
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

export function EntityScreeningHitNamesToJSON(value?: EntityScreeningHitNames | null): any {
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

