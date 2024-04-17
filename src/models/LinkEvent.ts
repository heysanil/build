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
import type { LinkEventMetadata } from './LinkEventMetadata';
import {
    LinkEventMetadataFromJSON,
    LinkEventMetadataFromJSONTyped,
    LinkEventMetadataToJSON,
} from './LinkEventMetadata';

/**
 * An event that occurred while the user was going through Link
 * @export
 * @interface LinkEvent
 */
export interface LinkEvent {
    [key: string]: any | any;
    /**
     * Event name
     * @type {string}
     * @memberof LinkEvent
     */
    event_name: string;
    /**
     * Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format.
     * @type {string}
     * @memberof LinkEvent
     */
    timestamp: string;
    /**
     * UUID that can be used to deduplicate events
     * @type {string}
     * @memberof LinkEvent
     */
    event_id: string;
    /**
     * 
     * @type {LinkEventMetadata}
     * @memberof LinkEvent
     */
    event_metadata: LinkEventMetadata;
}

/**
 * Check if a given object implements the LinkEvent interface.
 */
export function instanceOfLinkEvent(value: object): boolean {
    if (!('event_name' in value)) return false;
    if (!('timestamp' in value)) return false;
    if (!('event_id' in value)) return false;
    if (!('event_metadata' in value)) return false;
    return true;
}

export function LinkEventFromJSON(json: any): LinkEvent {
    return LinkEventFromJSONTyped(json, false);
}

export function LinkEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkEvent {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'event_name': json['event_name'],
        'timestamp': json['timestamp'],
        'event_id': json['event_id'],
        'event_metadata': LinkEventMetadataFromJSON(json['event_metadata']),
    };
}

export function LinkEventToJSON(value?: LinkEvent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'event_name': value['event_name'],
        'timestamp': value['timestamp'],
        'event_id': value['event_id'],
        'event_metadata': LinkEventMetadataToJSON(value['event_metadata']),
    };
}
