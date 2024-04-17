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
 * Specifies options for initializing Link for [update mode](https://plaid.com/docs/link/update-mode).
 * @export
 * @interface LinkTokenCreateRequestUpdate
 */
export interface LinkTokenCreateRequestUpdate {
    /**
     * If `true`, enables [update mode with Account Select](https://plaid.com/docs/link/update-mode/#using-update-mode-to-request-new-accounts) for institutions that do not use OAuth, or that use OAuth but do not have their own account selection flow. For institutions that have an OAuth account selection flow (i.e. most OAuth-enabled institutions), update mode with Account Select will always be enabled, regardless of the value of this field.
     * @type {boolean}
     * @memberof LinkTokenCreateRequestUpdate
     */
    account_selection_enabled?: boolean;
}

/**
 * Check if a given object implements the LinkTokenCreateRequestUpdate interface.
 */
export function instanceOfLinkTokenCreateRequestUpdate(value: object): boolean {
    return true;
}

export function LinkTokenCreateRequestUpdateFromJSON(json: any): LinkTokenCreateRequestUpdate {
    return LinkTokenCreateRequestUpdateFromJSONTyped(json, false);
}

export function LinkTokenCreateRequestUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTokenCreateRequestUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'account_selection_enabled': json['account_selection_enabled'] == null ? undefined : json['account_selection_enabled'],
    };
}

export function LinkTokenCreateRequestUpdateToJSON(value?: LinkTokenCreateRequestUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_selection_enabled': value['account_selection_enabled'],
    };
}
