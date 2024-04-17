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
import type { DashboardUser } from './DashboardUser';
import {
    DashboardUserFromJSON,
    DashboardUserFromJSONTyped,
    DashboardUserToJSON,
} from './DashboardUser';

/**
 * Paginated list of dashboard users
 * @export
 * @interface DashboardUserListResponse
 */
export interface DashboardUserListResponse {
    [key: string]: any | any;
    /**
     * List of dashboard users
     * @type {Array<DashboardUser>}
     * @memberof DashboardUserListResponse
     */
    dashboard_users: Array<DashboardUser>;
    /**
     * An identifier that determines which page of results you receive.
     * @type {string}
     * @memberof DashboardUserListResponse
     */
    next_cursor: string | null;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof DashboardUserListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the DashboardUserListResponse interface.
 */
export function instanceOfDashboardUserListResponse(value: object): boolean {
    if (!('dashboard_users' in value)) return false;
    if (!('next_cursor' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function DashboardUserListResponseFromJSON(json: any): DashboardUserListResponse {
    return DashboardUserListResponseFromJSONTyped(json, false);
}

export function DashboardUserListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardUserListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'dashboard_users': ((json['dashboard_users'] as Array<any>).map(DashboardUserFromJSON)),
        'next_cursor': json['next_cursor'],
        'request_id': json['request_id'],
    };
}

export function DashboardUserListResponseToJSON(value?: DashboardUserListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'dashboard_users': ((value['dashboard_users'] as Array<any>).map(DashboardUserToJSON)),
        'next_cursor': value['next_cursor'],
        'request_id': value['request_id'],
    };
}

