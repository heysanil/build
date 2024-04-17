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
import type { DocumentRiskSignalInstitutionMetadata } from './DocumentRiskSignalInstitutionMetadata';
import {
    DocumentRiskSignalInstitutionMetadataFromJSON,
    DocumentRiskSignalInstitutionMetadataFromJSONTyped,
    DocumentRiskSignalInstitutionMetadataToJSON,
} from './DocumentRiskSignalInstitutionMetadata';

/**
 * Details about a certain reason as to why a document could potentially be fraudulent.
 * @export
 * @interface DocumentRiskSignal
 */
export interface DocumentRiskSignal {
    [key: string]: any | any;
    /**
     * The result from the risk signal check.
     * @type {string}
     * @memberof DocumentRiskSignal
     */
    type: string | null;
    /**
     * The field which the risk signal was computed for
     * @type {string}
     * @memberof DocumentRiskSignal
     */
    field: string | null;
    /**
     * A flag used to quickly identify if the signal indicates that this field is authentic or fraudulent
     * @type {boolean}
     * @memberof DocumentRiskSignal
     */
    has_fraud_risk: boolean | null;
    /**
     * 
     * @type {DocumentRiskSignalInstitutionMetadata}
     * @memberof DocumentRiskSignal
     */
    institution_metadata: DocumentRiskSignalInstitutionMetadata | null;
    /**
     * The expected value of the field, as seen on the document
     * @type {string}
     * @memberof DocumentRiskSignal
     */
    expected_value: string | null;
    /**
     * The derived value obtained in the risk signal calculation process for this field
     * @type {string}
     * @memberof DocumentRiskSignal
     */
    actual_value: string | null;
    /**
     * A human-readable explanation providing more detail into the particular risk signal
     * @type {string}
     * @memberof DocumentRiskSignal
     */
    signal_description: string | null;
    /**
     * The relevant page associated with the risk signal
     * @type {number}
     * @memberof DocumentRiskSignal
     */
    page_number: number | null;
}

/**
 * Check if a given object implements the DocumentRiskSignal interface.
 */
export function instanceOfDocumentRiskSignal(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('field' in value)) return false;
    if (!('has_fraud_risk' in value)) return false;
    if (!('institution_metadata' in value)) return false;
    if (!('expected_value' in value)) return false;
    if (!('actual_value' in value)) return false;
    if (!('signal_description' in value)) return false;
    if (!('page_number' in value)) return false;
    return true;
}

export function DocumentRiskSignalFromJSON(json: any): DocumentRiskSignal {
    return DocumentRiskSignalFromJSONTyped(json, false);
}

export function DocumentRiskSignalFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentRiskSignal {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'type': json['type'],
        'field': json['field'],
        'has_fraud_risk': json['has_fraud_risk'],
        'institution_metadata': DocumentRiskSignalInstitutionMetadataFromJSON(json['institution_metadata']),
        'expected_value': json['expected_value'],
        'actual_value': json['actual_value'],
        'signal_description': json['signal_description'],
        'page_number': json['page_number'],
    };
}

export function DocumentRiskSignalToJSON(value?: DocumentRiskSignal | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'type': value['type'],
        'field': value['field'],
        'has_fraud_risk': value['has_fraud_risk'],
        'institution_metadata': DocumentRiskSignalInstitutionMetadataToJSON(value['institution_metadata']),
        'expected_value': value['expected_value'],
        'actual_value': value['actual_value'],
        'signal_description': value['signal_description'],
        'page_number': value['page_number'],
    };
}
