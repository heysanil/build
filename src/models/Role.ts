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
import type { RoleDetail } from './RoleDetail';
import {
    RoleDetailFromJSON,
    RoleDetailFromJSONTyped,
    RoleDetailToJSON,
} from './RoleDetail';

/**
 * ADocumentation not found in the MISMO model viewer and not provided by Freddie Mac.
 * @export
 * @interface Role
 */
export interface Role {
    [key: string]: any | any;
    /**
     * 
     * @type {RoleDetail}
     * @memberof Role
     */
    ROLE_DETAIL: RoleDetail;
}

/**
 * Check if a given object implements the Role interface.
 */
export function instanceOfRole(value: object): boolean {
    if (!('ROLE_DETAIL' in value)) return false;
    return true;
}

export function RoleFromJSON(json: any): Role {
    return RoleFromJSONTyped(json, false);
}

export function RoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Role {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'ROLE_DETAIL': RoleDetailFromJSON(json['ROLE_DETAIL']),
    };
}

export function RoleToJSON(value?: Role | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'ROLE_DETAIL': RoleDetailToJSON(value['ROLE_DETAIL']),
    };
}

