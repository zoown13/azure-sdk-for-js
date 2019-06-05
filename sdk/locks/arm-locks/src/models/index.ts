/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Lock owner properties.
 */
export interface ManagementLockOwner {
  /**
   * The application ID of the lock owner.
   */
  applicationId?: string;
}

/**
 * The lock information.
 */
export interface ManagementLockObject extends BaseResource {
  /**
   * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete
   * means authorized users are able to read and modify the resources, but not delete. ReadOnly
   * means authorized users can only read from a resource, but they can't modify or delete it.
   * Possible values include: 'NotSpecified', 'CanNotDelete', 'ReadOnly'
   */
  level: LockLevel;
  /**
   * Notes about the lock. Maximum of 512 characters.
   */
  notes?: string;
  /**
   * The owners of the lock.
   */
  owners?: ManagementLockOwner[];
  /**
   * The resource ID of the lock.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The resource type of the lock - Microsoft.Authorization/locks.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The name of the lock.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.Authorization
   */
  provider?: string;
  /**
   * Resource on which the operation is performed: Profile, endpoint, etc.
   */
  resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   */
  operation?: string;
}

/**
 * Microsoft.Authorization operation
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * Optional Parameters.
 */
export interface ManagementLocksListAtResourceGroupLevelOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The filter to apply on the operation.
   */
  filter?: string;
}

/**
 * Optional Parameters.
 */
export interface ManagementLocksListAtResourceLevelOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The filter to apply on the operation.
   */
  filter?: string;
}

/**
 * Optional Parameters.
 */
export interface ManagementLocksListAtSubscriptionLevelOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The filter to apply on the operation.
   */
  filter?: string;
}

/**
 * Optional Parameters.
 */
export interface ManagementLocksListByScopeOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The filter to apply on the operation.
   */
  filter?: string;
}

/**
 * An interface representing ManagementLockClientOptions.
 */
export interface ManagementLockClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Result of the request to list Microsoft.Authorization operations. It contains a list of
 * operations and a URL link to get the next set of results.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * The list of locks.
 * @extends Array<ManagementLockObject>
 */
export interface ManagementLockListResult extends Array<ManagementLockObject> {
  /**
   * The URL to use for getting the next set of results.
   */
  nextLink?: string;
}

/**
 * Defines values for LockLevel.
 * Possible values include: 'NotSpecified', 'CanNotDelete', 'ReadOnly'
 * @readonly
 * @enum {string}
 */
export type LockLevel = 'NotSpecified' | 'CanNotDelete' | 'ReadOnly';

/**
 * Contains response data for the list operation.
 */
export type AuthorizationOperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type AuthorizationOperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the createOrUpdateAtResourceGroupLevel operation.
 */
export type ManagementLocksCreateOrUpdateAtResourceGroupLevelResponse = ManagementLockObject & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockObject;
    };
};

/**
 * Contains response data for the getAtResourceGroupLevel operation.
 */
export type ManagementLocksGetAtResourceGroupLevelResponse = ManagementLockObject & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockObject;
    };
};

/**
 * Contains response data for the createOrUpdateByScope operation.
 */
export type ManagementLocksCreateOrUpdateByScopeResponse = ManagementLockObject & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockObject;
    };
};

/**
 * Contains response data for the getByScope operation.
 */
export type ManagementLocksGetByScopeResponse = ManagementLockObject & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockObject;
    };
};

/**
 * Contains response data for the createOrUpdateAtResourceLevel operation.
 */
export type ManagementLocksCreateOrUpdateAtResourceLevelResponse = ManagementLockObject & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockObject;
    };
};

/**
 * Contains response data for the getAtResourceLevel operation.
 */
export type ManagementLocksGetAtResourceLevelResponse = ManagementLockObject & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockObject;
    };
};

/**
 * Contains response data for the createOrUpdateAtSubscriptionLevel operation.
 */
export type ManagementLocksCreateOrUpdateAtSubscriptionLevelResponse = ManagementLockObject & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockObject;
    };
};

/**
 * Contains response data for the getAtSubscriptionLevel operation.
 */
export type ManagementLocksGetAtSubscriptionLevelResponse = ManagementLockObject & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockObject;
    };
};

/**
 * Contains response data for the listAtResourceGroupLevel operation.
 */
export type ManagementLocksListAtResourceGroupLevelResponse = ManagementLockListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockListResult;
    };
};

/**
 * Contains response data for the listAtResourceLevel operation.
 */
export type ManagementLocksListAtResourceLevelResponse = ManagementLockListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockListResult;
    };
};

/**
 * Contains response data for the listAtSubscriptionLevel operation.
 */
export type ManagementLocksListAtSubscriptionLevelResponse = ManagementLockListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockListResult;
    };
};

/**
 * Contains response data for the listByScope operation.
 */
export type ManagementLocksListByScopeResponse = ManagementLockListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockListResult;
    };
};

/**
 * Contains response data for the listAtResourceGroupLevelNext operation.
 */
export type ManagementLocksListAtResourceGroupLevelNextResponse = ManagementLockListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockListResult;
    };
};

/**
 * Contains response data for the listAtResourceLevelNext operation.
 */
export type ManagementLocksListAtResourceLevelNextResponse = ManagementLockListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockListResult;
    };
};

/**
 * Contains response data for the listAtSubscriptionLevelNext operation.
 */
export type ManagementLocksListAtSubscriptionLevelNextResponse = ManagementLockListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockListResult;
    };
};

/**
 * Contains response data for the listByScopeNext operation.
 */
export type ManagementLocksListByScopeNextResponse = ManagementLockListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ManagementLockListResult;
    };
};
