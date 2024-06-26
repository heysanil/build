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
import type { PrismCashScoreMetadata } from './PrismCashScoreMetadata';
import {
    PrismCashScoreMetadataFromJSON,
    PrismCashScoreMetadataFromJSONTyped,
    PrismCashScoreMetadataToJSON,
} from './PrismCashScoreMetadata';

/**
 * The data from the Cash Score product returned by Prism.
 * @export
 * @interface PrismCashScore
 */
export interface PrismCashScore {
    [key: string]: any | any;
    /**
     * The version of Prism's cash score model used.
     * @type {number}
     * @memberof PrismCashScore
     */
    version: number;
    /**
     * The score returned by Prism. Ranges from 1-999, with higher score indicating lower risk.
     * @type {number}
     * @memberof PrismCashScore
     */
    score: number;
    /**
     * The reasons for an individual having risk according to the cash score.
     * @type {Array<string>}
     * @memberof PrismCashScore
     */
    reason_codes?: Array<string>;
    /**
     * 
     * @type {PrismCashScoreMetadata}
     * @memberof PrismCashScore
     */
    metadata?: PrismCashScoreMetadata;
}

/**
 * Check if a given object implements the PrismCashScore interface.
 */
export function instanceOfPrismCashScore(value: object): boolean {
    if (!('version' in value)) return false;
    if (!('score' in value)) return false;
    return true;
}

export function PrismCashScoreFromJSON(json: any): PrismCashScore {
    return PrismCashScoreFromJSONTyped(json, false);
}

export function PrismCashScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrismCashScore {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'version': json['version'],
        'score': json['score'],
        'reason_codes': json['reason_codes'] == null ? undefined : json['reason_codes'],
        'metadata': json['metadata'] == null ? undefined : PrismCashScoreMetadataFromJSON(json['metadata']),
    };
}

export function PrismCashScoreToJSON(value?: PrismCashScore | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'version': value['version'],
        'score': value['score'],
        'reason_codes': value['reason_codes'],
        'metadata': PrismCashScoreMetadataToJSON(value['metadata']),
    };
}

