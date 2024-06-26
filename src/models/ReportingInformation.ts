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
 * Information about an report identifier and a report name.
 * @export
 * @interface ReportingInformation
 */
export interface ReportingInformation {
    [key: string]: any | any;
    /**
     * Documentation not found in the MISMO model viewer and not provided by Freddie Mac.
     * @type {string}
     * @memberof ReportingInformation
     */
    ReportingInformationIdentifier: string;
}

/**
 * Check if a given object implements the ReportingInformation interface.
 */
export function instanceOfReportingInformation(value: object): boolean {
    if (!('ReportingInformationIdentifier' in value)) return false;
    return true;
}

export function ReportingInformationFromJSON(json: any): ReportingInformation {
    return ReportingInformationFromJSONTyped(json, false);
}

export function ReportingInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportingInformation {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'ReportingInformationIdentifier': json['ReportingInformationIdentifier'],
    };
}

export function ReportingInformationToJSON(value?: ReportingInformation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'ReportingInformationIdentifier': value['ReportingInformationIdentifier'],
    };
}

