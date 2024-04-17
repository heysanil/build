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
import type { SelfieAnalysisDocumentComparison } from './SelfieAnalysisDocumentComparison';
import {
    SelfieAnalysisDocumentComparisonFromJSON,
    SelfieAnalysisDocumentComparisonFromJSONTyped,
    SelfieAnalysisDocumentComparisonToJSON,
} from './SelfieAnalysisDocumentComparison';

/**
 * High level descriptions of how the associated selfie was processed. If a selfie fails verification, the details in the `analysis` object should help clarify why the selfie was rejected.
 * @export
 * @interface SelfieAnalysis
 */
export interface SelfieAnalysis {
    [key: string]: any | any;
    /**
     * 
     * @type {SelfieAnalysisDocumentComparison}
     * @memberof SelfieAnalysis
     */
    document_comparison: SelfieAnalysisDocumentComparison;
}

/**
 * Check if a given object implements the SelfieAnalysis interface.
 */
export function instanceOfSelfieAnalysis(value: object): boolean {
    if (!('document_comparison' in value)) return false;
    return true;
}

export function SelfieAnalysisFromJSON(json: any): SelfieAnalysis {
    return SelfieAnalysisFromJSONTyped(json, false);
}

export function SelfieAnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelfieAnalysis {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'document_comparison': SelfieAnalysisDocumentComparisonFromJSON(json['document_comparison']),
    };
}

export function SelfieAnalysisToJSON(value?: SelfieAnalysis | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'document_comparison': SelfieAnalysisDocumentComparisonToJSON(value['document_comparison']),
    };
}
