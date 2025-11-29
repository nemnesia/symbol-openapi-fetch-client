/* tslint:disable */

/**
 * Copyright © 2025 The Symbol Syndicate
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { AccountRestrictionDTOValuesInner } from './AccountRestrictionDTOValuesInner';
import { AccountRestrictionDTOValuesInnerFromJSON, AccountRestrictionDTOValuesInnerToJSON } from './AccountRestrictionDTOValuesInner';
import type { AccountRestrictionFlagsEnum } from './AccountRestrictionFlagsEnum';
import { AccountRestrictionFlagsEnumFromJSON, AccountRestrictionFlagsEnumToJSON } from './AccountRestrictionFlagsEnum';

/**
 *
 * @export
 * @interface AccountRestrictionDTO
 */
export interface AccountRestrictionDTO {
  /**
   *
   * @type {AccountRestrictionFlagsEnum}
   * @memberof AccountRestrictionDTO
   */
  restrictionFlags: AccountRestrictionFlagsEnum;
  /**
   * Address, mosaic id, or transaction type to restrict.
   * @type {Array<AccountRestrictionDTOValuesInner>}
   * @memberof AccountRestrictionDTO
   */
  values: Array<AccountRestrictionDTOValuesInner>;
}

/**
 * Check if a given object implements the AccountRestrictionDTO interface.
 */
export function instanceOfAccountRestrictionDTO(value: object): value is AccountRestrictionDTO {
  if (!('restrictionFlags' in value) || value['restrictionFlags'] === undefined) return false;
  if (!('values' in value) || value['values'] === undefined) return false;
  return true;
}

export function AccountRestrictionDTOFromJSON(json: any): AccountRestrictionDTO {
  return AccountRestrictionDTOFromJSONTyped(json, false);
}

export function AccountRestrictionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionDTO {
  if (json == null) {
    return json;
  }
  return {
    restrictionFlags: AccountRestrictionFlagsEnumFromJSON(json['restrictionFlags']),
    values: (json['values'] as Array<any>).map(AccountRestrictionDTOValuesInnerFromJSON),
  };
}

export function AccountRestrictionDTOToJSON(json: any): AccountRestrictionDTO {
  return AccountRestrictionDTOToJSONTyped(json, false);
}

export function AccountRestrictionDTOToJSONTyped(value?: AccountRestrictionDTO | null, ignoreDiscriminator: boolean = false): any {
  if (value == null) {
    return value;
  }

  return {
    restrictionFlags: AccountRestrictionFlagsEnumToJSON(value['restrictionFlags']),
    values: (value['values'] as Array<any>).map(AccountRestrictionDTOValuesInnerToJSON),
  };
}
