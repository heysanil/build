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
import type { LinkSessionSuccessMetadataAccount } from './LinkSessionSuccessMetadataAccount';
import {
    LinkSessionSuccessMetadataAccountFromJSON,
    LinkSessionSuccessMetadataAccountFromJSONTyped,
    LinkSessionSuccessMetadataAccountToJSON,
} from './LinkSessionSuccessMetadataAccount';
import type { LinkSessionSuccessMetadataInstitution } from './LinkSessionSuccessMetadataInstitution';
import {
    LinkSessionSuccessMetadataInstitutionFromJSON,
    LinkSessionSuccessMetadataInstitutionFromJSONTyped,
    LinkSessionSuccessMetadataInstitutionToJSON,
} from './LinkSessionSuccessMetadataInstitution';
import type { LinkSessionSuccessMetadataTransferStatus } from './LinkSessionSuccessMetadataTransferStatus';
import {
    LinkSessionSuccessMetadataTransferStatusFromJSON,
    LinkSessionSuccessMetadataTransferStatusFromJSONTyped,
    LinkSessionSuccessMetadataTransferStatusToJSON,
} from './LinkSessionSuccessMetadataTransferStatus';

/**
 * Displayed once a user has successfully linked their Item.
 * @export
 * @interface LinkSessionSuccessMetadata
 */
export interface LinkSessionSuccessMetadata {
    /**
     * 
     * @type {LinkSessionSuccessMetadataInstitution}
     * @memberof LinkSessionSuccessMetadata
     */
    institution?: LinkSessionSuccessMetadataInstitution;
    /**
     * A list of accounts attached to the connected Item. If Account Select is enabled via the developer dashboard, `accounts` will only include selected accounts.
     * @type {Array<LinkSessionSuccessMetadataAccount>}
     * @memberof LinkSessionSuccessMetadata
     */
    accounts?: Array<LinkSessionSuccessMetadataAccount>;
    /**
     * A unique identifier associated with a user's actions and events through the Link flow. Include this identifier when opening a support ticket for faster turnaround.
     * @type {string}
     * @memberof LinkSessionSuccessMetadata
     */
    link_session_id?: string;
    /**
     * 
     * @type {LinkSessionSuccessMetadataTransferStatus}
     * @memberof LinkSessionSuccessMetadata
     */
    transfer_status?: LinkSessionSuccessMetadataTransferStatus;
}

/**
 * Check if a given object implements the LinkSessionSuccessMetadata interface.
 */
export function instanceOfLinkSessionSuccessMetadata(value: object): boolean {
    return true;
}

export function LinkSessionSuccessMetadataFromJSON(json: any): LinkSessionSuccessMetadata {
    return LinkSessionSuccessMetadataFromJSONTyped(json, false);
}

export function LinkSessionSuccessMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkSessionSuccessMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'institution': json['institution'] == null ? undefined : LinkSessionSuccessMetadataInstitutionFromJSON(json['institution']),
        'accounts': json['accounts'] == null ? undefined : ((json['accounts'] as Array<any>).map(LinkSessionSuccessMetadataAccountFromJSON)),
        'link_session_id': json['link_session_id'] == null ? undefined : json['link_session_id'],
        'transfer_status': json['transfer_status'] == null ? undefined : LinkSessionSuccessMetadataTransferStatusFromJSON(json['transfer_status']),
    };
}

export function LinkSessionSuccessMetadataToJSON(value?: LinkSessionSuccessMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'institution': LinkSessionSuccessMetadataInstitutionToJSON(value['institution']),
        'accounts': value['accounts'] == null ? undefined : ((value['accounts'] as Array<any>).map(LinkSessionSuccessMetadataAccountToJSON)),
        'link_session_id': value['link_session_id'],
        'transfer_status': LinkSessionSuccessMetadataTransferStatusToJSON(value['transfer_status']),
    };
}

