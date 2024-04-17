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
import type { EntityDocument } from './EntityDocument';
import {
    EntityDocumentFromJSON,
    EntityDocumentFromJSONTyped,
    EntityDocumentToJSON,
} from './EntityDocument';
import type { MatchSummary } from './MatchSummary';
import {
    MatchSummaryFromJSON,
    MatchSummaryFromJSONTyped,
    MatchSummaryToJSON,
} from './MatchSummary';

/**
 * Analyzed documents for the associated hit
 * @export
 * @interface EntityScreeningHitDocumentsItems
 */
export interface EntityScreeningHitDocumentsItems {
    [key: string]: any | any;
    /**
     * 
     * @type {MatchSummary}
     * @memberof EntityScreeningHitDocumentsItems
     */
    analysis?: MatchSummary;
    /**
     * 
     * @type {EntityDocument}
     * @memberof EntityScreeningHitDocumentsItems
     */
    data?: EntityDocument;
}

/**
 * Check if a given object implements the EntityScreeningHitDocumentsItems interface.
 */
export function instanceOfEntityScreeningHitDocumentsItems(value: object): boolean {
    return true;
}

export function EntityScreeningHitDocumentsItemsFromJSON(json: any): EntityScreeningHitDocumentsItems {
    return EntityScreeningHitDocumentsItemsFromJSONTyped(json, false);
}

export function EntityScreeningHitDocumentsItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityScreeningHitDocumentsItems {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'analysis': json['analysis'] == null ? undefined : MatchSummaryFromJSON(json['analysis']),
        'data': json['data'] == null ? undefined : EntityDocumentFromJSON(json['data']),
    };
}

export function EntityScreeningHitDocumentsItemsToJSON(value?: EntityScreeningHitDocumentsItems | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'analysis': MatchSummaryToJSON(value['analysis']),
        'data': EntityDocumentToJSON(value['data']),
    };
}
