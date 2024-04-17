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
import type { BeaconReportSyndicationAnalysis } from './BeaconReportSyndicationAnalysis';
import {
    BeaconReportSyndicationAnalysisFromJSON,
    BeaconReportSyndicationAnalysisFromJSONTyped,
    BeaconReportSyndicationAnalysisToJSON,
} from './BeaconReportSyndicationAnalysis';
import type { BeaconReportSyndicationOriginalReport } from './BeaconReportSyndicationOriginalReport';
import {
    BeaconReportSyndicationOriginalReportFromJSON,
    BeaconReportSyndicationOriginalReportFromJSONTyped,
    BeaconReportSyndicationOriginalReportToJSON,
} from './BeaconReportSyndicationOriginalReport';

/**
 * A Beacon Report Syndication represents a Beacon Report created either by your organization or another Beacon customer that matches a specific Beacon User you've created.
 * 
 * The `analysis` field in the response indicates which fields matched between the originally reported Beacon User and the Beacon User that the report was syndicated to.
 * 
 * The `report` field in the response contains a subset of information from the original report.
 * @export
 * @interface BeaconReportSyndication
 */
export interface BeaconReportSyndication {
    [key: string]: any | any;
    /**
     * ID of the associated Beacon Report Syndication.
     * @type {string}
     * @memberof BeaconReportSyndication
     */
    id: string;
    /**
     * 
     * @type {BeaconReportSyndicationOriginalReport}
     * @memberof BeaconReportSyndication
     */
    report: BeaconReportSyndicationOriginalReport;
    /**
     * 
     * @type {BeaconReportSyndicationAnalysis}
     * @memberof BeaconReportSyndication
     */
    analysis: BeaconReportSyndicationAnalysis;
}

/**
 * Check if a given object implements the BeaconReportSyndication interface.
 */
export function instanceOfBeaconReportSyndication(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('report' in value)) return false;
    if (!('analysis' in value)) return false;
    return true;
}

export function BeaconReportSyndicationFromJSON(json: any): BeaconReportSyndication {
    return BeaconReportSyndicationFromJSONTyped(json, false);
}

export function BeaconReportSyndicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconReportSyndication {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'id': json['id'],
        'report': BeaconReportSyndicationOriginalReportFromJSON(json['report']),
        'analysis': BeaconReportSyndicationAnalysisFromJSON(json['analysis']),
    };
}

export function BeaconReportSyndicationToJSON(value?: BeaconReportSyndication | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'id': value['id'],
        'report': BeaconReportSyndicationOriginalReportToJSON(value['report']),
        'analysis': BeaconReportSyndicationAnalysisToJSON(value['analysis']),
    };
}

