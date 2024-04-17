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
import type { UpdateEntityScreeningRequestSearchTerms } from './UpdateEntityScreeningRequestSearchTerms';
import {
    UpdateEntityScreeningRequestSearchTermsFromJSON,
    UpdateEntityScreeningRequestSearchTermsFromJSONTyped,
    UpdateEntityScreeningRequestSearchTermsToJSON,
} from './UpdateEntityScreeningRequestSearchTerms';
import type { WatchlistScreeningEntityUpdateRequestResettableField } from './WatchlistScreeningEntityUpdateRequestResettableField';
import {
    WatchlistScreeningEntityUpdateRequestResettableFieldFromJSON,
    WatchlistScreeningEntityUpdateRequestResettableFieldFromJSONTyped,
    WatchlistScreeningEntityUpdateRequestResettableFieldToJSON,
} from './WatchlistScreeningEntityUpdateRequestResettableField';
import type { WatchlistScreeningStatus } from './WatchlistScreeningStatus';
import {
    WatchlistScreeningStatusFromJSON,
    WatchlistScreeningStatusFromJSONTyped,
    WatchlistScreeningStatusToJSON,
} from './WatchlistScreeningStatus';

/**
 * Request input for editing an entity watchlist screening
 * @export
 * @interface WatchlistScreeningEntityUpdateRequest
 */
export interface WatchlistScreeningEntityUpdateRequest {
    /**
     * ID of the associated entity screening.
     * @type {string}
     * @memberof WatchlistScreeningEntityUpdateRequest
     */
    entity_watchlist_screening_id: string;
    /**
     * 
     * @type {UpdateEntityScreeningRequestSearchTerms}
     * @memberof WatchlistScreeningEntityUpdateRequest
     */
    search_terms?: UpdateEntityScreeningRequestSearchTerms;
    /**
     * ID of the associated user.
     * @type {string}
     * @memberof WatchlistScreeningEntityUpdateRequest
     */
    assignee?: string;
    /**
     * 
     * @type {WatchlistScreeningStatus}
     * @memberof WatchlistScreeningEntityUpdateRequest
     */
    status?: WatchlistScreeningStatus;
    /**
     * A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the `/link/token/create` `client_user_id` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`.
     * @type {string}
     * @memberof WatchlistScreeningEntityUpdateRequest
     */
    client_user_id?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningEntityUpdateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof WatchlistScreeningEntityUpdateRequest
     */
    secret?: string;
    /**
     * A list of fields to reset back to null
     * @type {Array<WatchlistScreeningEntityUpdateRequestResettableField>}
     * @memberof WatchlistScreeningEntityUpdateRequest
     */
    reset_fields?: Array<WatchlistScreeningEntityUpdateRequestResettableField>;
}

/**
 * Check if a given object implements the WatchlistScreeningEntityUpdateRequest interface.
 */
export function instanceOfWatchlistScreeningEntityUpdateRequest(value: object): boolean {
    if (!('entity_watchlist_screening_id' in value)) return false;
    return true;
}

export function WatchlistScreeningEntityUpdateRequestFromJSON(json: any): WatchlistScreeningEntityUpdateRequest {
    return WatchlistScreeningEntityUpdateRequestFromJSONTyped(json, false);
}

export function WatchlistScreeningEntityUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WatchlistScreeningEntityUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'entity_watchlist_screening_id': json['entity_watchlist_screening_id'],
        'search_terms': json['search_terms'] == null ? undefined : UpdateEntityScreeningRequestSearchTermsFromJSON(json['search_terms']),
        'assignee': json['assignee'] == null ? undefined : json['assignee'],
        'status': json['status'] == null ? undefined : WatchlistScreeningStatusFromJSON(json['status']),
        'client_user_id': json['client_user_id'] == null ? undefined : json['client_user_id'],
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'reset_fields': json['reset_fields'] == null ? undefined : ((json['reset_fields'] as Array<any>).map(WatchlistScreeningEntityUpdateRequestResettableFieldFromJSON)),
    };
}

export function WatchlistScreeningEntityUpdateRequestToJSON(value?: WatchlistScreeningEntityUpdateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'entity_watchlist_screening_id': value['entity_watchlist_screening_id'],
        'search_terms': UpdateEntityScreeningRequestSearchTermsToJSON(value['search_terms']),
        'assignee': value['assignee'],
        'status': WatchlistScreeningStatusToJSON(value['status']),
        'client_user_id': value['client_user_id'],
        'client_id': value['client_id'],
        'secret': value['secret'],
        'reset_fields': value['reset_fields'] == null ? undefined : ((value['reset_fields'] as Array<any>).map(WatchlistScreeningEntityUpdateRequestResettableFieldToJSON)),
    };
}

