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
import type { DocumentaryVerificationDocument } from './DocumentaryVerificationDocument';
import {
    DocumentaryVerificationDocumentFromJSON,
    DocumentaryVerificationDocumentFromJSONTyped,
    DocumentaryVerificationDocumentToJSON,
} from './DocumentaryVerificationDocument';

/**
 * Data, images, analysis, and results from the `documentary_verification` step. This field will be `null` unless `steps.documentary_verification` has reached a terminal state of either `success` or `failed`.
 * @export
 * @interface DocumentaryVerification
 */
export interface DocumentaryVerification {
    [key: string]: any | any;
    /**
     * The outcome status for the associated Identity Verification attempt's `documentary_verification` step. This field will always have the same value as `steps.documentary_verification`.
     * @type {string}
     * @memberof DocumentaryVerification
     */
    status: string;
    /**
     * An array of documents submitted to the `documentary_verification` step. Each entry represents one user submission, where each submission will contain both a front and back image, or just a front image, depending on the document type.
     * 
     * Note: Plaid will automatically let a user submit a new set of document images up to three times if we detect that a previous attempt might have failed due to user error. For example, if the first set of document images are blurry or obscured by glare, the user will be asked to capture their documents again, resulting in at least two separate entries within `documents`. If the overall `documentary_verification` is `failed`, the user has exhausted their retry attempts.
     * @type {Array<DocumentaryVerificationDocument>}
     * @memberof DocumentaryVerification
     */
    documents: Array<DocumentaryVerificationDocument>;
}

/**
 * Check if a given object implements the DocumentaryVerification interface.
 */
export function instanceOfDocumentaryVerification(value: object): boolean {
    if (!('status' in value)) return false;
    if (!('documents' in value)) return false;
    return true;
}

export function DocumentaryVerificationFromJSON(json: any): DocumentaryVerification {
    return DocumentaryVerificationFromJSONTyped(json, false);
}

export function DocumentaryVerificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentaryVerification {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'status': json['status'],
        'documents': ((json['documents'] as Array<any>).map(DocumentaryVerificationDocumentFromJSON)),
    };
}

export function DocumentaryVerificationToJSON(value?: DocumentaryVerification | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'status': value['status'],
        'documents': ((value['documents'] as Array<any>).map(DocumentaryVerificationDocumentToJSON)),
    };
}

