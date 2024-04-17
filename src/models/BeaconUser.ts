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
import type { BeaconAuditTrail } from './BeaconAuditTrail';
import {
    BeaconAuditTrailFromJSON,
    BeaconAuditTrailFromJSONTyped,
    BeaconAuditTrailToJSON,
} from './BeaconAuditTrail';
import type { BeaconUserData } from './BeaconUserData';
import {
    BeaconUserDataFromJSON,
    BeaconUserDataFromJSONTyped,
    BeaconUserDataToJSON,
} from './BeaconUserData';
import type { BeaconUserStatus } from './BeaconUserStatus';
import {
    BeaconUserStatusFromJSON,
    BeaconUserStatusFromJSONTyped,
    BeaconUserStatusToJSON,
} from './BeaconUserStatus';

/**
 * A Beacon User represents an end user that has been scanned against the Beacon Network.
 * @export
 * @interface BeaconUser
 */
export interface BeaconUser {
    [key: string]: any | any;
    /**
     * ID of the associated Beacon User.
     * @type {string}
     * @memberof BeaconUser
     */
    id: string;
    /**
     * The `version` field begins with 1 and increments each time the user is updated.
     * @type {number}
     * @memberof BeaconUser
     */
    version: number;
    /**
     * An ISO8601 formatted timestamp.
     * @type {Date}
     * @memberof BeaconUser
     */
    created_at: Date;
    /**
     * An ISO8601 formatted timestamp. This field indicates the last time the resource was modified.
     * @type {Date}
     * @memberof BeaconUser
     */
    updated_at: Date;
    /**
     * 
     * @type {BeaconUserStatus}
     * @memberof BeaconUser
     */
    status: BeaconUserStatus;
    /**
     * ID of the associated Beacon Program.
     * @type {string}
     * @memberof BeaconUser
     */
    program_id: string;
    /**
     * A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the `/link/token/create` `client_user_id` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`.
     * @type {string}
     * @memberof BeaconUser
     */
    client_user_id: string;
    /**
     * 
     * @type {BeaconUserData}
     * @memberof BeaconUser
     */
    user: BeaconUserData;
    /**
     * 
     * @type {BeaconAuditTrail}
     * @memberof BeaconUser
     */
    audit_trail: BeaconAuditTrail;
}

/**
 * Check if a given object implements the BeaconUser interface.
 */
export function instanceOfBeaconUser(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('version' in value)) return false;
    if (!('created_at' in value)) return false;
    if (!('updated_at' in value)) return false;
    if (!('status' in value)) return false;
    if (!('program_id' in value)) return false;
    if (!('client_user_id' in value)) return false;
    if (!('user' in value)) return false;
    if (!('audit_trail' in value)) return false;
    return true;
}

export function BeaconUserFromJSON(json: any): BeaconUser {
    return BeaconUserFromJSONTyped(json, false);
}

export function BeaconUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconUser {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'id': json['id'],
        'version': json['version'],
        'created_at': (new Date(json['created_at'])),
        'updated_at': (new Date(json['updated_at'])),
        'status': BeaconUserStatusFromJSON(json['status']),
        'program_id': json['program_id'],
        'client_user_id': json['client_user_id'],
        'user': BeaconUserDataFromJSON(json['user']),
        'audit_trail': BeaconAuditTrailFromJSON(json['audit_trail']),
    };
}

export function BeaconUserToJSON(value?: BeaconUser | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'id': value['id'],
        'version': value['version'],
        'created_at': ((value['created_at']).toISOString()),
        'updated_at': ((value['updated_at']).toISOString()),
        'status': BeaconUserStatusToJSON(value['status']),
        'program_id': value['program_id'],
        'client_user_id': value['client_user_id'],
        'user': BeaconUserDataToJSON(value['user']),
        'audit_trail': BeaconAuditTrailToJSON(value['audit_trail']),
    };
}

