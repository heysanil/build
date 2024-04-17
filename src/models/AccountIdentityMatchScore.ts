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
import type { AccountBalance } from './AccountBalance';
import {
    AccountBalanceFromJSON,
    AccountBalanceFromJSONTyped,
    AccountBalanceToJSON,
} from './AccountBalance';
import type { AccountSubtype } from './AccountSubtype';
import {
    AccountSubtypeFromJSON,
    AccountSubtypeFromJSONTyped,
    AccountSubtypeToJSON,
} from './AccountSubtype';
import type { AccountType } from './AccountType';
import {
    AccountTypeFromJSON,
    AccountTypeFromJSONTyped,
    AccountTypeToJSON,
} from './AccountType';
import type { AccountVerificationInsights } from './AccountVerificationInsights';
import {
    AccountVerificationInsightsFromJSON,
    AccountVerificationInsightsFromJSONTyped,
    AccountVerificationInsightsToJSON,
} from './AccountVerificationInsights';
import type { AddressMatchScore } from './AddressMatchScore';
import {
    AddressMatchScoreFromJSON,
    AddressMatchScoreFromJSONTyped,
    AddressMatchScoreToJSON,
} from './AddressMatchScore';
import type { EmailAddressMatchScore } from './EmailAddressMatchScore';
import {
    EmailAddressMatchScoreFromJSON,
    EmailAddressMatchScoreFromJSONTyped,
    EmailAddressMatchScoreToJSON,
} from './EmailAddressMatchScore';
import type { NameMatchScore } from './NameMatchScore';
import {
    NameMatchScoreFromJSON,
    NameMatchScoreFromJSONTyped,
    NameMatchScoreToJSON,
} from './NameMatchScore';
import type { PhoneNumberMatchScore } from './PhoneNumberMatchScore';
import {
    PhoneNumberMatchScoreFromJSON,
    PhoneNumberMatchScoreFromJSONTyped,
    PhoneNumberMatchScoreToJSON,
} from './PhoneNumberMatchScore';

/**
 * Identity match scores for an account
 * @export
 * @interface AccountIdentityMatchScore
 */
export interface AccountIdentityMatchScore {
    /**
     * Plaid’s unique identifier for the account. This value will not change unless Plaid can't reconcile the account with the data returned by the financial institution. This may occur, for example, when the name of the account changes. If this happens a new `account_id` will be assigned to the account.
     * 
     * The `account_id` can also change if the `access_token` is deleted and the same credentials that were used to generate that `access_token` are used to generate a new `access_token` on a later date. In that case, the new `account_id` will be different from the old `account_id`.
     * 
     * If an account with a specific `account_id` disappears instead of changing, the account is likely closed. Closed accounts are not returned by the Plaid API.
     * 
     * Like all Plaid identifiers, the `account_id` is case sensitive.
     * @type {string}
     * @memberof AccountIdentityMatchScore
     */
    account_id: string;
    /**
     * 
     * @type {AccountBalance}
     * @memberof AccountIdentityMatchScore
     */
    balances: AccountBalance;
    /**
     * The last 2-4 alphanumeric characters of an account's official account number. Note that the mask may be non-unique between an Item's accounts, and it may also not match the mask that the bank displays to the user.
     * @type {string}
     * @memberof AccountIdentityMatchScore
     */
    mask: string | null;
    /**
     * The name of the account, either assigned by the user or by the financial institution itself
     * @type {string}
     * @memberof AccountIdentityMatchScore
     */
    name: string;
    /**
     * The official name of the account as given by the financial institution
     * @type {string}
     * @memberof AccountIdentityMatchScore
     */
    official_name: string | null;
    /**
     * 
     * @type {AccountType}
     * @memberof AccountIdentityMatchScore
     */
    type: AccountType;
    /**
     * 
     * @type {AccountSubtype}
     * @memberof AccountIdentityMatchScore
     */
    subtype: AccountSubtype | null;
    /**
     * The current verification status of an Auth Item initiated through Automated or Manual micro-deposits.  Returned for Auth Items only.
     * 
     * `pending_automatic_verification`: The Item is pending automatic verification
     * 
     * `pending_manual_verification`: The Item is pending manual micro-deposit verification. Items remain in this state until the user successfully verifies the micro-deposit.
     * 
     * `automatically_verified`: The Item has successfully been automatically verified	
     * 
     * `manually_verified`: The Item has successfully been manually verified
     * 
     * `verification_expired`: Plaid was unable to automatically verify the deposit within 7 calendar days and will no longer attempt to validate the Item. Users may retry by submitting their information again through Link.
     * 
     * `verification_failed`: The Item failed manual micro-deposit verification because the user exhausted all 3 verification attempts. Users may retry by submitting their information again through Link.
     * 
     * `database_matched`: The Item has successfully been verified using Plaid's data sources. Note: Database Match is currently a beta feature, please contact your account manager for more information.
     * 
     * `database_insights_pass`: The Item's ACH numbers have been verified using Plaid's data sources and have strong signal for being valid. Note: Database Insights is currently a beta feature, please contact your account manager for more information.
     * 
     * `database_insights_pass_with_caution`: The Item's ACH numbers have been verified using Plaid's data sources and have some signal for being valid. Note: Database Insights is currently a beta feature, please contact your account manager for more information.
     * 
     * `database_insights_fail`:  The Item's ACH numbers have been verified using Plaid's data sources and have signal for being invalid and/or have no signal for being valid. Note: Database Insights is currently a beta feature, please contact your account manager for more information.	
     * 	
     * @type {string}
     * @memberof AccountIdentityMatchScore
     */
    verification_status?: AccountIdentityMatchScoreVerificationStatusEnum;
    /**
     * 
     * @type {AccountVerificationInsights}
     * @memberof AccountIdentityMatchScore
     */
    verification_insights?: AccountVerificationInsights;
    /**
     * A unique and persistent identifier for accounts that can be used to trace multiple instances of the same account across different Items for depository accounts. This is currently only supported for Chase Items. Because Chase accounts have a different account number each time they are linked, this field may be used instead of the account number to uniquely identify a Chase account across multiple Items for payments use cases, helping to reduce duplicate Items or attempted fraud. In Sandbox, this field may be populated for any account; in Production and Development, it will only be populated for Chase accounts.
     * @type {string}
     * @memberof AccountIdentityMatchScore
     */
    persistent_account_id?: string;
    /**
     * 
     * @type {NameMatchScore}
     * @memberof AccountIdentityMatchScore
     */
    legal_name?: NameMatchScore;
    /**
     * 
     * @type {PhoneNumberMatchScore}
     * @memberof AccountIdentityMatchScore
     */
    phone_number?: PhoneNumberMatchScore;
    /**
     * 
     * @type {EmailAddressMatchScore}
     * @memberof AccountIdentityMatchScore
     */
    email_address?: EmailAddressMatchScore;
    /**
     * 
     * @type {AddressMatchScore}
     * @memberof AccountIdentityMatchScore
     */
    address?: AddressMatchScore;
}


/**
 * @export
 */
export const AccountIdentityMatchScoreVerificationStatusEnum = {
    AutomaticallyVerified: 'automatically_verified',
    PendingAutomaticVerification: 'pending_automatic_verification',
    PendingManualVerification: 'pending_manual_verification',
    ManuallyVerified: 'manually_verified',
    VerificationExpired: 'verification_expired',
    VerificationFailed: 'verification_failed',
    DatabaseMatched: 'database_matched',
    DatabaseInsightsPass: 'database_insights_pass',
    DatabaseInsightsPassWithCaution: 'database_insights_pass_with_caution',
    DatabaseInsightsFail: 'database_insights_fail'
} as const;
export type AccountIdentityMatchScoreVerificationStatusEnum = typeof AccountIdentityMatchScoreVerificationStatusEnum[keyof typeof AccountIdentityMatchScoreVerificationStatusEnum];


/**
 * Check if a given object implements the AccountIdentityMatchScore interface.
 */
export function instanceOfAccountIdentityMatchScore(value: object): boolean {
    if (!('account_id' in value)) return false;
    if (!('balances' in value)) return false;
    if (!('mask' in value)) return false;
    if (!('name' in value)) return false;
    if (!('official_name' in value)) return false;
    if (!('type' in value)) return false;
    if (!('subtype' in value)) return false;
    return true;
}

export function AccountIdentityMatchScoreFromJSON(json: any): AccountIdentityMatchScore {
    return AccountIdentityMatchScoreFromJSONTyped(json, false);
}

export function AccountIdentityMatchScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountIdentityMatchScore {
    if (json == null) {
        return json;
    }
    return {
        
        'account_id': json['account_id'],
        'balances': AccountBalanceFromJSON(json['balances']),
        'mask': json['mask'],
        'name': json['name'],
        'official_name': json['official_name'],
        'type': AccountTypeFromJSON(json['type']),
        'subtype': AccountSubtypeFromJSON(json['subtype']),
        'verification_status': json['verification_status'] == null ? undefined : json['verification_status'],
        'verification_insights': json['verification_insights'] == null ? undefined : AccountVerificationInsightsFromJSON(json['verification_insights']),
        'persistent_account_id': json['persistent_account_id'] == null ? undefined : json['persistent_account_id'],
        'legal_name': json['legal_name'] == null ? undefined : NameMatchScoreFromJSON(json['legal_name']),
        'phone_number': json['phone_number'] == null ? undefined : PhoneNumberMatchScoreFromJSON(json['phone_number']),
        'email_address': json['email_address'] == null ? undefined : EmailAddressMatchScoreFromJSON(json['email_address']),
        'address': json['address'] == null ? undefined : AddressMatchScoreFromJSON(json['address']),
    };
}

export function AccountIdentityMatchScoreToJSON(value?: AccountIdentityMatchScore | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_id': value['account_id'],
        'balances': AccountBalanceToJSON(value['balances']),
        'mask': value['mask'],
        'name': value['name'],
        'official_name': value['official_name'],
        'type': AccountTypeToJSON(value['type']),
        'subtype': AccountSubtypeToJSON(value['subtype']),
        'verification_status': value['verification_status'],
        'verification_insights': AccountVerificationInsightsToJSON(value['verification_insights']),
        'persistent_account_id': value['persistent_account_id'],
        'legal_name': NameMatchScoreToJSON(value['legal_name']),
        'phone_number': PhoneNumberMatchScoreToJSON(value['phone_number']),
        'email_address': EmailAddressMatchScoreToJSON(value['email_address']),
        'address': AddressMatchScoreToJSON(value['address']),
    };
}

