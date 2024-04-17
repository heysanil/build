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
import type { LinkProfileEligibilityCheckUser } from './LinkProfileEligibilityCheckUser';
import {
    LinkProfileEligibilityCheckUserFromJSON,
    LinkProfileEligibilityCheckUserFromJSONTyped,
    LinkProfileEligibilityCheckUserToJSON,
} from './LinkProfileEligibilityCheckUser';

/**
 * LinkProfileEligibilityCheckRequest defines the request schema for `/link/profile/eligibility/check`
 * @export
 * @interface LinkProfileEligibilityCheckRequest
 */
export interface LinkProfileEligibilityCheckRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof LinkProfileEligibilityCheckRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof LinkProfileEligibilityCheckRequest
     */
    secret?: string;
    /**
     * The unique ID for the user's Link session
     * @type {string}
     * @memberof LinkProfileEligibilityCheckRequest
     */
    link_session_id: string;
    /**
     * 
     * @type {LinkProfileEligibilityCheckUser}
     * @memberof LinkProfileEligibilityCheckRequest
     */
    user: LinkProfileEligibilityCheckUser;
}

/**
 * Check if a given object implements the LinkProfileEligibilityCheckRequest interface.
 */
export function instanceOfLinkProfileEligibilityCheckRequest(value: object): boolean {
    if (!('link_session_id' in value)) return false;
    if (!('user' in value)) return false;
    return true;
}

export function LinkProfileEligibilityCheckRequestFromJSON(json: any): LinkProfileEligibilityCheckRequest {
    return LinkProfileEligibilityCheckRequestFromJSONTyped(json, false);
}

export function LinkProfileEligibilityCheckRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkProfileEligibilityCheckRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'link_session_id': json['link_session_id'],
        'user': LinkProfileEligibilityCheckUserFromJSON(json['user']),
    };
}

export function LinkProfileEligibilityCheckRequestToJSON(value?: LinkProfileEligibilityCheckRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'link_session_id': value['link_session_id'],
        'user': LinkProfileEligibilityCheckUserToJSON(value['user']),
    };
}

