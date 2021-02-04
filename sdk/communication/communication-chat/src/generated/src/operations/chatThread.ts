/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ChatApiClient } from "../chatApiClient";
import {
  ChatThreadListChatReadReceiptsOptionalParams,
  ChatThreadListChatReadReceiptsResponse,
  SendReadReceiptRequest,
  SendChatMessageRequest,
  ChatThreadSendChatMessageResponse,
  ChatThreadListChatMessagesOptionalParams,
  ChatThreadListChatMessagesResponse,
  ChatThreadGetChatMessageResponse,
  UpdateChatMessageRequest,
  ChatThreadListChatParticipantsOptionalParams,
  ChatThreadListChatParticipantsResponse,
  AddChatParticipantsRequest,
  ChatThreadAddChatParticipantsResponse,
  UpdateChatThreadRequest,
  ChatThreadListChatReadReceiptsNextOptionalParams,
  ChatThreadListChatReadReceiptsNextResponse,
  ChatThreadListChatMessagesNextOptionalParams,
  ChatThreadListChatMessagesNextResponse,
  ChatThreadListChatParticipantsNextOptionalParams,
  ChatThreadListChatParticipantsNextResponse
} from "../models";

/** Class representing a ChatThread. */
export class ChatThread {
  private readonly client: ChatApiClient;

  /**
   * Initialize a new instance of the class ChatThread class.
   * @param client Reference to the service client
   */
  constructor(client: ChatApiClient) {
    this.client = client;
  }

  /**
   * Gets chat message read receipts for a thread.
   * @param chatThreadId Thread id to get the chat message read receipts for.
   * @param options The options parameters.
   */
  listChatReadReceipts(
    chatThreadId: string,
    options?: ChatThreadListChatReadReceiptsOptionalParams
  ): Promise<ChatThreadListChatReadReceiptsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listChatReadReceiptsOperationSpec
    ) as Promise<ChatThreadListChatReadReceiptsResponse>;
  }

  /**
   * Sends a read receipt event to a thread, on behalf of a user.
   * @param chatThreadId Thread id to send the read receipt event to.
   * @param sendReadReceiptRequest Read receipt details.
   * @param options The options parameters.
   */
  sendChatReadReceipt(
    chatThreadId: string,
    sendReadReceiptRequest: SendReadReceiptRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      sendReadReceiptRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      sendChatReadReceiptOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Sends a message to a thread.
   * @param chatThreadId The thread id to send the message to.
   * @param sendChatMessageRequest Details of the message to send.
   * @param options The options parameters.
   */
  sendChatMessage(
    chatThreadId: string,
    sendChatMessageRequest: SendChatMessageRequest,
    options?: coreHttp.OperationOptions
  ): Promise<ChatThreadSendChatMessageResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      sendChatMessageRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      sendChatMessageOperationSpec
    ) as Promise<ChatThreadSendChatMessageResponse>;
  }

  /**
   * Gets a list of messages from a thread.
   * @param chatThreadId The thread id of the message.
   * @param options The options parameters.
   */
  listChatMessages(
    chatThreadId: string,
    options?: ChatThreadListChatMessagesOptionalParams
  ): Promise<ChatThreadListChatMessagesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listChatMessagesOperationSpec
    ) as Promise<ChatThreadListChatMessagesResponse>;
  }

  /**
   * Gets a message by id.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param options The options parameters.
   */
  getChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    options?: coreHttp.OperationOptions
  ): Promise<ChatThreadGetChatMessageResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      chatMessageId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getChatMessageOperationSpec
    ) as Promise<ChatThreadGetChatMessageResponse>;
  }

  /**
   * Updates a message.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param updateChatMessageRequest Details of the request to update the message.
   * @param options The options parameters.
   */
  updateChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    updateChatMessageRequest: UpdateChatMessageRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      chatMessageId,
      updateChatMessageRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateChatMessageOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Deletes a message.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param options The options parameters.
   */
  deleteChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      chatMessageId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteChatMessageOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Posts a typing event to a thread, on behalf of a user.
   * @param chatThreadId Id of the thread.
   * @param options The options parameters.
   */
  sendTypingNotification(
    chatThreadId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      sendTypingNotificationOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets the participants of a thread.
   * @param chatThreadId Thread id to get participants for.
   * @param options The options parameters.
   */
  listChatParticipants(
    chatThreadId: string,
    options?: ChatThreadListChatParticipantsOptionalParams
  ): Promise<ChatThreadListChatParticipantsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listChatParticipantsOperationSpec
    ) as Promise<ChatThreadListChatParticipantsResponse>;
  }

  /**
   * Remove a participant from a thread.
   * @param chatThreadId Thread id to remove the participant from.
   * @param chatParticipantId Id of the thread participant to remove from the thread.
   * @param options The options parameters.
   */
  removeChatParticipant(
    chatThreadId: string,
    chatParticipantId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      chatParticipantId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      removeChatParticipantOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Adds thread participants to a thread. If participants already exist, no change occurs.
   * @param chatThreadId Id of the thread to add participants to.
   * @param addChatParticipantsRequest Thread participants to be added to the thread.
   * @param options The options parameters.
   */
  addChatParticipants(
    chatThreadId: string,
    addChatParticipantsRequest: AddChatParticipantsRequest,
    options?: coreHttp.OperationOptions
  ): Promise<ChatThreadAddChatParticipantsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      addChatParticipantsRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      addChatParticipantsOperationSpec
    ) as Promise<ChatThreadAddChatParticipantsResponse>;
  }

  /**
   * Updates a thread's properties.
   * @param chatThreadId The id of the thread to update.
   * @param updateChatThreadRequest Request payload for updating a chat thread.
   * @param options The options parameters.
   */
  updateChatThread(
    chatThreadId: string,
    updateChatThreadRequest: UpdateChatThreadRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      updateChatThreadRequest,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateChatThreadOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * ListChatReadReceiptsNext
   * @param chatThreadId Thread id to get the chat message read receipts for.
   * @param nextLink The nextLink from the previous successful call to the ListChatReadReceipts method.
   * @param options The options parameters.
   */
  listChatReadReceiptsNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatReadReceiptsNextOptionalParams
  ): Promise<ChatThreadListChatReadReceiptsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listChatReadReceiptsNextOperationSpec
    ) as Promise<ChatThreadListChatReadReceiptsNextResponse>;
  }

  /**
   * ListChatMessagesNext
   * @param chatThreadId The thread id of the message.
   * @param nextLink The nextLink from the previous successful call to the ListChatMessages method.
   * @param options The options parameters.
   */
  listChatMessagesNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatMessagesNextOptionalParams
  ): Promise<ChatThreadListChatMessagesNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listChatMessagesNextOperationSpec
    ) as Promise<ChatThreadListChatMessagesNextResponse>;
  }

  /**
   * ListChatParticipantsNext
   * @param chatThreadId Thread id to get participants for.
   * @param nextLink The nextLink from the previous successful call to the ListChatParticipants method.
   * @param options The options parameters.
   */
  listChatParticipantsNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatParticipantsNextOptionalParams
  ): Promise<ChatThreadListChatParticipantsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      chatThreadId,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listChatParticipantsNextOperationSpec
    ) as Promise<ChatThreadListChatParticipantsNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listChatReadReceiptsOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/readReceipts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessageReadReceiptsCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.skip, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept],
  serializer
};
const sendChatReadReceiptOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/readReceipts",
  httpMethod: "POST",
  responses: {
    200: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.sendReadReceiptRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const sendChatMessageOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.SendChatMessageResult
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.sendChatMessageRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listChatMessagesOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessagesCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.apiVersion, Parameters.startTime],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept],
  serializer
};
const getChatMessageOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages/{chatMessageId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessage
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.chatMessageId],
  headerParameters: [Parameters.accept],
  serializer
};
const updateChatMessageOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages/{chatMessageId}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.updateChatMessageRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.chatMessageId],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteChatMessageOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages/{chatMessageId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.chatMessageId],
  headerParameters: [Parameters.accept],
  serializer
};
const sendTypingNotificationOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/typing",
  httpMethod: "POST",
  responses: {
    200: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept],
  serializer
};
const listChatParticipantsOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/participants",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatParticipantsCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.skip, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept],
  serializer
};
const removeChatParticipantOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/participants/{chatParticipantId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.chatParticipantId],
  headerParameters: [Parameters.accept],
  serializer
};
const addChatParticipantsOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/participants/:add",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.AddChatParticipantsResult
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.addChatParticipantsRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateChatThreadOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  requestBody: Parameters.updateChatThreadRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const listChatReadReceiptsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessageReadReceiptsCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.skip, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listChatMessagesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessagesCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.apiVersion, Parameters.startTime],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listChatParticipantsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatParticipantsCollection
    },
    401: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    403: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    429: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    },
    503: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      isError: true
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.skip, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
