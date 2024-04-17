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
import type { EntityScreeningHitPhoneNumbers } from './EntityScreeningHitPhoneNumbers';
import {
    EntityScreeningHitPhoneNumbersFromJSON,
    EntityScreeningHitPhoneNumbersFromJSONTyped,
    EntityScreeningHitPhoneNumbersToJSON,
} from './EntityScreeningHitPhoneNumbers';
import type { MatchSummary } from './MatchSummary';
import {
    MatchSummaryFromJSON,
    MatchSummaryFromJSONTyped,
    MatchSummaryToJSON,
} from './MatchSummary';

/**
 * Analyzed phone numbers for the associated hit
 * @export
 * @interface EntityScreeningHitsPhoneNumberItems
 */
export interface EntityScreeningHitsPhoneNumberItems {
    [key: string]: any | any;
    /**
     * 
     * @type {MatchSummary}
     * @memberof EntityScreeningHitsPhoneNumberItems
     */
    analysis?: MatchSummary;
    /**
     * 
     * @type {EntityScreeningHitPhoneNumbers}
     * @memberof EntityScreeningHitsPhoneNumberItems
     */
    data?: EntityScreeningHitPhoneNumbers;
}

/**
 * Check if a given object implements the EntityScreeningHitsPhoneNumberItems interface.
 */
export function instanceOfEntityScreeningHitsPhoneNumberItems(value: object): boolean {
    return true;
}

export function EntityScreeningHitsPhoneNumberItemsFromJSON(json: any): EntityScreeningHitsPhoneNumberItems {
    return EntityScreeningHitsPhoneNumberItemsFromJSONTyped(json, false);
}

export function EntityScreeningHitsPhoneNumberItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityScreeningHitsPhoneNumberItems {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'analysis': json['analysis'] == null ? undefined : MatchSummaryFromJSON(json['analysis']),
        'data': json['data'] == null ? undefined : EntityScreeningHitPhoneNumbersFromJSON(json['data']),
    };
}

export function EntityScreeningHitsPhoneNumberItemsToJSON(value?: EntityScreeningHitsPhoneNumberItems | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'analysis': MatchSummaryToJSON(value['analysis']),
        'data': EntityScreeningHitPhoneNumbersToJSON(value['data']),
    };
}

