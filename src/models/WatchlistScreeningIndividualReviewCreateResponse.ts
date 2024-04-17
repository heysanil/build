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

/**
 * A review submitted by a team member for an individual watchlist screening. A review can be either a comment on the current screening state, actions taken
 * against hits attached to the watchlist screening, or both.
 * @export
 * @interface WatchlistScreeningIndividualReviewCreateResponse
 */
export interface WatchlistScreeningIndividualReviewCreateResponse {
    [key: string]: any | any;
    /**
     * ID of the associated review.
     * @type {string}
     * @memberof WatchlistScreeningIndividualReviewCreateResponse
     */
    id: string;
    /**
     * Hits marked as a true positive after thorough manual review. These hits will never recur or be updated once dismissed. In most cases, confirmed hits indicate that the customer should be rejected.
     * @type {Array<string>}
     * @memberof WatchlistScreeningIndividualReviewCreateResponse
     */
    confirmed_hits: Array<string>;
    /**
     * Hits marked as a false positive after thorough manual review. These hits will never recur or be updated once dismissed.
     * @type {Array<string>}
     * @memberof WatchlistScreeningIndividualReviewCreateResponse
     */
    dismissed_hits: Array<string>;
    /**
     * A comment submitted by a team member as part of reviewing a watchlist screening.
     * @type {string}
     * @memberof WatchlistScreeningIndividualReviewCreateResponse
     */
    comment: string | null;
    /**
     * 
     * @type {WatchlistScreeningAuditTrail}
     * @memberof WatchlistScreeningIndividualReviewCreateResponse
     */
    audit_trail: WatchlistScreeningAuditTrail;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof WatchlistScreeningIndividualReviewCreateResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the WatchlistScreeningIndividualReviewCreateResponse interface.
 */
export function instanceOfWatchlistScreeningIndividualReviewCreateResponse(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('confirmed_hits' in value)) return false;
    if (!('dismissed_hits' in value)) return false;
    if (!('comment' in value)) return false;
    if (!('audit_trail' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function WatchlistScreeningIndividualReviewCreateResponseFromJSON(json: any): WatchlistScreeningIndividualReviewCreateResponse {
    return WatchlistScreeningIndividualReviewCreateResponseFromJSONTyped(json, false);
}

export function WatchlistScreeningIndividualReviewCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningIndividualReviewCreateResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'id': json['id'],
        'confirmed_hits': json['confirmed_hits'],
        'dismissed_hits': json['dismissed_hits'],
        'comment': json['comment'],
        'audit_trail': WatchlistScreeningAuditTrailFromJSON(json['audit_trail']),
        'request_id': json['request_id'],
    };
}

export function WatchlistScreeningIndividualReviewCreateResponseToJSON(value?: WatchlistScreeningIndividualReviewCreateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'id': value['id'],
        'confirmed_hits': value['confirmed_hits'],
        'dismissed_hits': value['dismissed_hits'],
        'comment': value['comment'],
        'audit_trail': WatchlistScreeningAuditTrailToJSON(value['audit_trail']),
        'request_id': value['request_id'],
    };
}

