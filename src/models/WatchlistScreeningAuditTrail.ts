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
import type { Source } from './Source';
import {
    SourceFromJSON,
    SourceFromJSONTyped,
    SourceToJSON,
} from './Source';

/**
 * Information about the last change made to the parent object specifying what caused the change as well as when it occurred.
 * @export
 * @interface WatchlistScreeningAuditTrail
 */
export interface WatchlistScreeningAuditTrail {
    [key: string]: any | any;
    /**
     * 
     * @type {Source}
     * @memberof WatchlistScreeningAuditTrail
     */
    source: Source;
    /**
     * ID of the associated user.
     * @type {string}
     * @memberof WatchlistScreeningAuditTrail
     */
    dashboard_user_id: string | null;
    /**
     * An ISO8601 formatted timestamp.
     * @type {Date}
     * @memberof WatchlistScreeningAuditTrail
     */
    timestamp: Date;
}

/**
 * Check if a given object implements the WatchlistScreeningAuditTrail interface.
 */
export function instanceOfWatchlistScreeningAuditTrail(value: object): boolean {
    if (!('source' in value)) return false;
    if (!('dashboard_user_id' in value)) return false;
    if (!('timestamp' in value)) return false;
    return true;
}

export function WatchlistScreeningAuditTrailFromJSON(json: any): WatchlistScreeningAuditTrail {
    return WatchlistScreeningAuditTrailFromJSONTyped(json, false);
}

export function WatchlistScreeningAuditTrailFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningAuditTrail {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'source': SourceFromJSON(json['source']),
        'dashboard_user_id': json['dashboard_user_id'],
        'timestamp': (new Date(json['timestamp'])),
    };
}

export function WatchlistScreeningAuditTrailToJSON(value?: WatchlistScreeningAuditTrail | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'source': SourceToJSON(value['source']),
        'dashboard_user_id': value['dashboard_user_id'],
        'timestamp': ((value['timestamp']).toISOString()),
    };
}

