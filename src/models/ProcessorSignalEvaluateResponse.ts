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
import type { SignalEvaluateCoreAttributes } from './SignalEvaluateCoreAttributes';
import {
    SignalEvaluateCoreAttributesFromJSON,
    SignalEvaluateCoreAttributesFromJSONTyped,
    SignalEvaluateCoreAttributesToJSON,
} from './SignalEvaluateCoreAttributes';
import type { SignalScores } from './SignalScores';
import {
    SignalScoresFromJSON,
    SignalScoresFromJSONTyped,
    SignalScoresToJSON,
} from './SignalScores';
import type { SignalWarning } from './SignalWarning';
import {
    SignalWarningFromJSON,
    SignalWarningFromJSONTyped,
    SignalWarningToJSON,
} from './SignalWarning';

/**
 * ProcessorSignalEvaluateResponse defines the response schema for `/processor/signal/evaluate`
 * @export
 * @interface ProcessorSignalEvaluateResponse
 */
export interface ProcessorSignalEvaluateResponse {
    [key: string]: any | any;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof ProcessorSignalEvaluateResponse
     */
    request_id: string;
    /**
     * 
     * @type {SignalScores}
     * @memberof ProcessorSignalEvaluateResponse
     */
    scores: SignalScores;
    /**
     * 
     * @type {SignalEvaluateCoreAttributes}
     * @memberof ProcessorSignalEvaluateResponse
     */
    core_attributes?: SignalEvaluateCoreAttributes;
    /**
     * If bank information was not available to be used in the Signal model, this array contains warnings describing why bank data is missing. If you want to receive an API error instead of Signal scores in the case of missing bank data, file a support ticket or contact your Plaid account manager.
     * @type {Array<SignalWarning>}
     * @memberof ProcessorSignalEvaluateResponse
     */
    warnings?: Array<SignalWarning>;
}

/**
 * Check if a given object implements the ProcessorSignalEvaluateResponse interface.
 */
export function instanceOfProcessorSignalEvaluateResponse(value: object): boolean {
    if (!('request_id' in value)) return false;
    if (!('scores' in value)) return false;
    return true;
}

export function ProcessorSignalEvaluateResponseFromJSON(json: any): ProcessorSignalEvaluateResponse {
    return ProcessorSignalEvaluateResponseFromJSONTyped(json, false);
}

export function ProcessorSignalEvaluateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorSignalEvaluateResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'request_id': json['request_id'],
        'scores': SignalScoresFromJSON(json['scores']),
        'core_attributes': json['core_attributes'] == null ? undefined : SignalEvaluateCoreAttributesFromJSON(json['core_attributes']),
        'warnings': json['warnings'] == null ? undefined : ((json['warnings'] as Array<any>).map(SignalWarningFromJSON)),
    };
}

export function ProcessorSignalEvaluateResponseToJSON(value?: ProcessorSignalEvaluateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'request_id': value['request_id'],
        'scores': SignalScoresToJSON(value['scores']),
        'core_attributes': SignalEvaluateCoreAttributesToJSON(value['core_attributes']),
        'warnings': value['warnings'] == null ? undefined : ((value['warnings'] as Array<any>).map(SignalWarningToJSON)),
    };
}

