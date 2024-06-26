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
import type { MultiDocumentRiskSignal } from './MultiDocumentRiskSignal';
import {
    MultiDocumentRiskSignalFromJSON,
    MultiDocumentRiskSignalFromJSONTyped,
    MultiDocumentRiskSignalToJSON,
} from './MultiDocumentRiskSignal';
import type { SingleDocumentRiskSignal } from './SingleDocumentRiskSignal';
import {
    SingleDocumentRiskSignalFromJSON,
    SingleDocumentRiskSignalFromJSONTyped,
    SingleDocumentRiskSignalToJSON,
} from './SingleDocumentRiskSignal';

/**
 * Object containing fraud risk data for a set of income documents.
 * @export
 * @interface DocumentRiskSignalsObject
 */
export interface DocumentRiskSignalsObject {
    [key: string]: any | any;
    /**
     * ID of the payroll provider account.
     * @type {string}
     * @memberof DocumentRiskSignalsObject
     */
    account_id: string | null;
    /**
     * Array of document metadata and associated risk signals per document
     * @type {Array<SingleDocumentRiskSignal>}
     * @memberof DocumentRiskSignalsObject
     */
    single_document_risk_signals: Array<SingleDocumentRiskSignal>;
    /**
     * Array of risk signals computed from a set of uploaded documents and the associated documents' metadata
     * @type {Array<MultiDocumentRiskSignal>}
     * @memberof DocumentRiskSignalsObject
     */
    multi_document_risk_signals: Array<MultiDocumentRiskSignal>;
}

/**
 * Check if a given object implements the DocumentRiskSignalsObject interface.
 */
export function instanceOfDocumentRiskSignalsObject(value: object): boolean {
    if (!('account_id' in value)) return false;
    if (!('single_document_risk_signals' in value)) return false;
    if (!('multi_document_risk_signals' in value)) return false;
    return true;
}

export function DocumentRiskSignalsObjectFromJSON(json: any): DocumentRiskSignalsObject {
    return DocumentRiskSignalsObjectFromJSONTyped(json, false);
}

export function DocumentRiskSignalsObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentRiskSignalsObject {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'account_id': json['account_id'],
        'single_document_risk_signals': ((json['single_document_risk_signals'] as Array<any>).map(SingleDocumentRiskSignalFromJSON)),
        'multi_document_risk_signals': ((json['multi_document_risk_signals'] as Array<any>).map(MultiDocumentRiskSignalFromJSON)),
    };
}

export function DocumentRiskSignalsObjectToJSON(value?: DocumentRiskSignalsObject | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'account_id': value['account_id'],
        'single_document_risk_signals': ((value['single_document_risk_signals'] as Array<any>).map(SingleDocumentRiskSignalToJSON)),
        'multi_document_risk_signals': ((value['multi_document_risk_signals'] as Array<any>).map(MultiDocumentRiskSignalToJSON)),
    };
}

