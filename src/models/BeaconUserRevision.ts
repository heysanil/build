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
/**
 * A Beacon User Revision identifies a Beacon User at some point in its revision history.
 * @export
 * @interface BeaconUserRevision
 */
export interface BeaconUserRevision {
    [key: string]: any | any;
    /**
     * ID of the associated Beacon User.
     * @type {string}
     * @memberof BeaconUserRevision
     */
    id: string;
    /**
     * The `version` field begins with 1 and increments with each subsequent revision.
     * @type {number}
     * @memberof BeaconUserRevision
     */
    version: number;
}

/**
 * Check if a given object implements the BeaconUserRevision interface.
 */
export function instanceOfBeaconUserRevision(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('version' in value)) return false;
    return true;
}

export function BeaconUserRevisionFromJSON(json: any): BeaconUserRevision {
    return BeaconUserRevisionFromJSONTyped(json, false);
}

export function BeaconUserRevisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconUserRevision {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'id': json['id'],
        'version': json['version'],
    };
}

export function BeaconUserRevisionToJSON(value?: BeaconUserRevision | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'id': value['id'],
        'version': value['version'],
    };
}
