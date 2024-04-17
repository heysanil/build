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
 * CreditAuditCopyTokenUpdateRequest defines the request schema for `/credit/audit_copy_token/update`
 * @export
 * @interface CreditAuditCopyTokenUpdateRequest
 */
export interface CreditAuditCopyTokenUpdateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof CreditAuditCopyTokenUpdateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof CreditAuditCopyTokenUpdateRequest
     */
    secret?: string;
    /**
     * The `audit_copy_token` you would like to update.
     * @type {string}
     * @memberof CreditAuditCopyTokenUpdateRequest
     */
    audit_copy_token: string;
    /**
     * Array of tokens which the specified Audit Copy Token will be updated with. The types of token supported are asset report token and employment report token. There can be at most 1 of each token type in the array.
     * @type {Array<string>}
     * @memberof CreditAuditCopyTokenUpdateRequest
     */
    report_tokens: Array<string>;
}

/**
 * Check if a given object implements the CreditAuditCopyTokenUpdateRequest interface.
 */
export function instanceOfCreditAuditCopyTokenUpdateRequest(value: object): boolean {
    if (!('audit_copy_token' in value)) return false;
    if (!('report_tokens' in value)) return false;
    return true;
}

export function CreditAuditCopyTokenUpdateRequestFromJSON(json: any): CreditAuditCopyTokenUpdateRequest {
    return CreditAuditCopyTokenUpdateRequestFromJSONTyped(json, false);
}

export function CreditAuditCopyTokenUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditAuditCopyTokenUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'audit_copy_token': json['audit_copy_token'],
        'report_tokens': json['report_tokens'],
    };
}

export function CreditAuditCopyTokenUpdateRequestToJSON(value?: CreditAuditCopyTokenUpdateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'audit_copy_token': value['audit_copy_token'],
        'report_tokens': value['report_tokens'],
    };
}

