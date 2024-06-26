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
 * The number of credits or debits out of the account. This field will only added for depository accounts
 * @export
 * @interface BaseReportNumberFlowInsights
 */
export interface BaseReportNumberFlowInsights {
    [key: string]: any | any;
    /**
     * The start date of this time period.
     * The date will be returned in an ISO 8601 format (YYYY-MM-DD).
     * @type {Date}
     * @memberof BaseReportNumberFlowInsights
     */
    start_date?: Date;
    /**
     * The end date of this time period.
     * The date will be returned in an ISO 8601 format (YYYY-MM-DD).
     * @type {Date}
     * @memberof BaseReportNumberFlowInsights
     */
    end_date?: Date;
    /**
     * The number of credits or debits out of the account for this time period.
     * @type {number}
     * @memberof BaseReportNumberFlowInsights
     */
    count?: number;
}

/**
 * Check if a given object implements the BaseReportNumberFlowInsights interface.
 */
export function instanceOfBaseReportNumberFlowInsights(value: object): boolean {
    return true;
}

export function BaseReportNumberFlowInsightsFromJSON(json: any): BaseReportNumberFlowInsights {
    return BaseReportNumberFlowInsightsFromJSONTyped(json, false);
}

export function BaseReportNumberFlowInsightsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseReportNumberFlowInsights {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'start_date': json['start_date'] == null ? undefined : (new Date(json['start_date'])),
        'end_date': json['end_date'] == null ? undefined : (new Date(json['end_date'])),
        'count': json['count'] == null ? undefined : json['count'],
    };
}

export function BaseReportNumberFlowInsightsToJSON(value?: BaseReportNumberFlowInsights | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'start_date': value['start_date'] == null ? undefined : ((value['start_date']).toISOString().substring(0,10)),
        'end_date': value['end_date'] == null ? undefined : ((value['end_date']).toISOString().substring(0,10)),
        'count': value['count'],
    };
}

