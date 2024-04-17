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
import type { BeaconReportSyndication } from './BeaconReportSyndication';
import {
    BeaconReportSyndicationFromJSON,
    BeaconReportSyndicationFromJSONTyped,
    BeaconReportSyndicationToJSON,
} from './BeaconReportSyndication';

/**
 * The response schema for `/beacon/report_syndication/list`
 * @export
 * @interface BeaconReportSyndicationListResponse
 */
export interface BeaconReportSyndicationListResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {Array<BeaconReportSyndication>}
     * @memberof BeaconReportSyndicationListResponse
     */
    beacon_report_syndications: Array<BeaconReportSyndication>;
    /**
     * An identifier that determines which page of results you receive.
     * @type {string}
     * @memberof BeaconReportSyndicationListResponse
     */
    next_cursor: string | null;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof BeaconReportSyndicationListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the BeaconReportSyndicationListResponse interface.
 */
export function instanceOfBeaconReportSyndicationListResponse(value: object): boolean {
    if (!('beacon_report_syndications' in value)) return false;
    if (!('next_cursor' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function BeaconReportSyndicationListResponseFromJSON(json: any): BeaconReportSyndicationListResponse {
    return BeaconReportSyndicationListResponseFromJSONTyped(json, false);
}

export function BeaconReportSyndicationListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconReportSyndicationListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'beacon_report_syndications': ((json['beacon_report_syndications'] as Array<any>).map(BeaconReportSyndicationFromJSON)),
        'next_cursor': json['next_cursor'],
        'request_id': json['request_id'],
    };
}

export function BeaconReportSyndicationListResponseToJSON(value?: BeaconReportSyndicationListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'beacon_report_syndications': ((value['beacon_report_syndications'] as Array<any>).map(BeaconReportSyndicationToJSON)),
        'next_cursor': value['next_cursor'],
        'request_id': value['request_id'],
    };
}
