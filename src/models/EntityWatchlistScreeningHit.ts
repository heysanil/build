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
import type { EntityScreeningHitAnalysis } from './EntityScreeningHitAnalysis';
import {
    EntityScreeningHitAnalysisFromJSON,
    EntityScreeningHitAnalysisFromJSONTyped,
    EntityScreeningHitAnalysisToJSON,
} from './EntityScreeningHitAnalysis';
import type { EntityScreeningHitData } from './EntityScreeningHitData';
import {
    EntityScreeningHitDataFromJSON,
    EntityScreeningHitDataFromJSONTyped,
    EntityScreeningHitDataToJSON,
} from './EntityScreeningHitData';
import type { EntityWatchlistCode } from './EntityWatchlistCode';
import {
    EntityWatchlistCodeFromJSON,
    EntityWatchlistCodeFromJSONTyped,
    EntityWatchlistCodeToJSON,
} from './EntityWatchlistCode';
import type { WatchlistScreeningHitStatus } from './WatchlistScreeningHitStatus';
import {
    WatchlistScreeningHitStatusFromJSON,
    WatchlistScreeningHitStatusFromJSONTyped,
    WatchlistScreeningHitStatusToJSON,
} from './WatchlistScreeningHitStatus';

/**
 * Data from a government watchlist that has been attached to the screening.
 * @export
 * @interface EntityWatchlistScreeningHit
 */
export interface EntityWatchlistScreeningHit {
    [key: string]: any | any;
    /**
     * ID of the associated entity screening hit.
     * @type {string}
     * @memberof EntityWatchlistScreeningHit
     */
    id: string;
    /**
     * 
     * @type {WatchlistScreeningHitStatus}
     * @memberof EntityWatchlistScreeningHit
     */
    review_status: WatchlistScreeningHitStatus;
    /**
     * An ISO8601 formatted timestamp.
     * @type {Date}
     * @memberof EntityWatchlistScreeningHit
     */
    first_active: Date;
    /**
     * An ISO8601 formatted timestamp.
     * @type {Date}
     * @memberof EntityWatchlistScreeningHit
     */
    inactive_since: Date | null;
    /**
     * An ISO8601 formatted timestamp.
     * @type {Date}
     * @memberof EntityWatchlistScreeningHit
     */
    historical_since: Date | null;
    /**
     * 
     * @type {EntityWatchlistCode}
     * @memberof EntityWatchlistScreeningHit
     */
    list_code: EntityWatchlistCode;
    /**
     * A universal identifier for a watchlist individual that is stable across searches and updates.
     * @type {string}
     * @memberof EntityWatchlistScreeningHit
     */
    plaid_uid: string;
    /**
     * The identifier provided by the source sanction or watchlist. When one is not provided by the source, this is `null`.
     * @type {string}
     * @memberof EntityWatchlistScreeningHit
     */
    source_uid: string | null;
    /**
     * 
     * @type {EntityScreeningHitAnalysis}
     * @memberof EntityWatchlistScreeningHit
     */
    analysis?: EntityScreeningHitAnalysis;
    /**
     * 
     * @type {EntityScreeningHitData}
     * @memberof EntityWatchlistScreeningHit
     */
    data?: EntityScreeningHitData;
}

/**
 * Check if a given object implements the EntityWatchlistScreeningHit interface.
 */
export function instanceOfEntityWatchlistScreeningHit(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('review_status' in value)) return false;
    if (!('first_active' in value)) return false;
    if (!('inactive_since' in value)) return false;
    if (!('historical_since' in value)) return false;
    if (!('list_code' in value)) return false;
    if (!('plaid_uid' in value)) return false;
    if (!('source_uid' in value)) return false;
    return true;
}

export function EntityWatchlistScreeningHitFromJSON(json: any): EntityWatchlistScreeningHit {
    return EntityWatchlistScreeningHitFromJSONTyped(json, false);
}

export function EntityWatchlistScreeningHitFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityWatchlistScreeningHit {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'id': json['id'],
        'review_status': WatchlistScreeningHitStatusFromJSON(json['review_status']),
        'first_active': (new Date(json['first_active'])),
        'inactive_since': (json['inactive_since'] == null ? null : new Date(json['inactive_since'])),
        'historical_since': (json['historical_since'] == null ? null : new Date(json['historical_since'])),
        'list_code': EntityWatchlistCodeFromJSON(json['list_code']),
        'plaid_uid': json['plaid_uid'],
        'source_uid': json['source_uid'],
        'analysis': json['analysis'] == null ? undefined : EntityScreeningHitAnalysisFromJSON(json['analysis']),
        'data': json['data'] == null ? undefined : EntityScreeningHitDataFromJSON(json['data']),
    };
}

export function EntityWatchlistScreeningHitToJSON(value?: EntityWatchlistScreeningHit | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'id': value['id'],
        'review_status': WatchlistScreeningHitStatusToJSON(value['review_status']),
        'first_active': ((value['first_active']).toISOString()),
        'inactive_since': (value['inactive_since'] == null ? null : (value['inactive_since'] as any).toISOString()),
        'historical_since': (value['historical_since'] == null ? null : (value['historical_since'] as any).toISOString()),
        'list_code': EntityWatchlistCodeToJSON(value['list_code']),
        'plaid_uid': value['plaid_uid'],
        'source_uid': value['source_uid'],
        'analysis': EntityScreeningHitAnalysisToJSON(value['analysis']),
        'data': EntityScreeningHitDataToJSON(value['data']),
    };
}

