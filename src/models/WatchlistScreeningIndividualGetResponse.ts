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
import type { WatchlistScreeningAuditTrail } from './WatchlistScreeningAuditTrail';
import {
    WatchlistScreeningAuditTrailFromJSON,
    WatchlistScreeningAuditTrailFromJSONTyped,
    WatchlistScreeningAuditTrailToJSON,
} from './WatchlistScreeningAuditTrail';
import type { WatchlistScreeningSearchTerms } from './WatchlistScreeningSearchTerms';
import {
    WatchlistScreeningSearchTermsFromJSON,
    WatchlistScreeningSearchTermsFromJSONTyped,
    WatchlistScreeningSearchTermsToJSON,
} from './WatchlistScreeningSearchTerms';
import type { WatchlistScreeningStatus } from './WatchlistScreeningStatus';
import {
    WatchlistScreeningStatusFromJSON,
    WatchlistScreeningStatusFromJSONTyped,
    WatchlistScreeningStatusToJSON,
} from './WatchlistScreeningStatus';

/**
 * The screening object allows you to represent a customer in your system, update their profile, and search for them on various watchlists. Note: Rejected customers will not receive new hits, regardless of program configuration.
 * @export
 * @interface WatchlistScreeningIndividualGetResponse
 */
export interface WatchlistScreeningIndividualGetResponse {
    [key: string]: any | any;
    /**
     * ID of the associated screening.
     * @type {string}
     * @memberof WatchlistScreeningIndividualGetResponse
     */
    id: string;
    /**
     * 
     * @type {WatchlistScreeningSearchTerms}
     * @memberof WatchlistScreeningIndividualGetResponse
     */
    search_terms: WatchlistScreeningSearchTerms;
    /**
     * ID of the associated user.
     * @type {string}
     * @memberof WatchlistScreeningIndividualGetResponse
     */
    assignee: string | null;
    /**
     * 
     * @type {WatchlistScreeningStatus}
     * @memberof WatchlistScreeningIndividualGetResponse
     */
    status: WatchlistScreeningStatus;
    /**
     * A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the `/link/token/create` `client_user_id` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`.
     * @type {string}
     * @memberof WatchlistScreeningIndividualGetResponse
     */
    client_user_id: string | null;
    /**
     * 
     * @type {WatchlistScreeningAuditTrail}
     * @memberof WatchlistScreeningIndividualGetResponse
     */
    audit_trail: WatchlistScreeningAuditTrail;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof WatchlistScreeningIndividualGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the WatchlistScreeningIndividualGetResponse interface.
 */
export function instanceOfWatchlistScreeningIndividualGetResponse(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('search_terms' in value)) return false;
    if (!('assignee' in value)) return false;
    if (!('status' in value)) return false;
    if (!('client_user_id' in value)) return false;
    if (!('audit_trail' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function WatchlistScreeningIndividualGetResponseFromJSON(json: any): WatchlistScreeningIndividualGetResponse {
    return WatchlistScreeningIndividualGetResponseFromJSONTyped(json, false);
}

export function WatchlistScreeningIndividualGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningIndividualGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'id': json['id'],
        'search_terms': WatchlistScreeningSearchTermsFromJSON(json['search_terms']),
        'assignee': json['assignee'],
        'status': WatchlistScreeningStatusFromJSON(json['status']),
        'client_user_id': json['client_user_id'],
        'audit_trail': WatchlistScreeningAuditTrailFromJSON(json['audit_trail']),
        'request_id': json['request_id'],
    };
}

export function WatchlistScreeningIndividualGetResponseToJSON(value?: WatchlistScreeningIndividualGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'id': value['id'],
        'search_terms': WatchlistScreeningSearchTermsToJSON(value['search_terms']),
        'assignee': value['assignee'],
        'status': WatchlistScreeningStatusToJSON(value['status']),
        'client_user_id': value['client_user_id'],
        'audit_trail': WatchlistScreeningAuditTrailToJSON(value['audit_trail']),
        'request_id': value['request_id'],
    };
}

