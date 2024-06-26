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
import type { MatchSummaryCode } from './MatchSummaryCode';
import {
    MatchSummaryCodeFromJSON,
    MatchSummaryCodeFromJSONTyped,
    MatchSummaryCodeToJSON,
} from './MatchSummaryCode';

/**
 * Result summary object specifying how the `date_of_birth` field matched.
 * @export
 * @interface KYCCheckDateOfBirthSummary
 */
export interface KYCCheckDateOfBirthSummary {
    [key: string]: any | any;
    /**
     * 
     * @type {MatchSummaryCode}
     * @memberof KYCCheckDateOfBirthSummary
     */
    summary: MatchSummaryCode;
}

/**
 * Check if a given object implements the KYCCheckDateOfBirthSummary interface.
 */
export function instanceOfKYCCheckDateOfBirthSummary(value: object): boolean {
    if (!('summary' in value)) return false;
    return true;
}

export function KYCCheckDateOfBirthSummaryFromJSON(json: any): KYCCheckDateOfBirthSummary {
    return KYCCheckDateOfBirthSummaryFromJSONTyped(json, false);
}

export function KYCCheckDateOfBirthSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): KYCCheckDateOfBirthSummary {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'summary': MatchSummaryCodeFromJSON(json['summary']),
    };
}

export function KYCCheckDateOfBirthSummaryToJSON(value?: KYCCheckDateOfBirthSummary | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'summary': MatchSummaryCodeToJSON(value['summary']),
    };
}

