/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateDocumentSubscriptionInput = {|
  clientSubscriptionId?: ?string
|};
export type TeamDocumentsSubscriptionVariables = {|
  input: CreateDocumentSubscriptionInput
|};
export type TeamDocumentsSubscriptionResponse = {|
  +createDocument: ?{|
    +document: ?{|
      +id: string,
      +name: ?string,
      +createdAt: ?string,
      +owner: ?{|
        +id: string,
        +avatar: ?string,
        +color: ?string,
        +fullName: ?string,
      |},
    |},
    +clientSubscriptionId: ?string,
  |}
|};
export type TeamDocumentsSubscription = {|
  variables: TeamDocumentsSubscriptionVariables,
  response: TeamDocumentsSubscriptionResponse,
|};
*/


/*
subscription TeamDocumentsSubscription(
  $input: CreateDocumentSubscriptionInput!
) {
  createDocument(input: $input) {
    document {
      id
      name
      createdAt(format: "MMM D")
      owner {
        id
        avatar
        color
        fullName
      }
    }
    clientSubscriptionId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateDocumentSubscriptionPayload",
    "kind": "LinkedField",
    "name": "createDocument",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Document",
        "kind": "LinkedField",
        "name": "document",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "MMM D"
              }
            ],
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": "createdAt(format:\"MMM D\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "avatar",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "color",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fullName",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientSubscriptionId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TeamDocumentsSubscription",
    "selections": (v2/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TeamDocumentsSubscription",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f9d31d7c61896e8252734b27f59d2ed0",
    "id": null,
    "metadata": {},
    "name": "TeamDocumentsSubscription",
    "operationKind": "subscription",
    "text": "subscription TeamDocumentsSubscription(\n  $input: CreateDocumentSubscriptionInput!\n) {\n  createDocument(input: $input) {\n    document {\n      id\n      name\n      createdAt(format: \"MMM D\")\n      owner {\n        id\n        avatar\n        color\n        fullName\n      }\n    }\n    clientSubscriptionId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7bfa751bac45c56bf799e98b359cb8b9';

module.exports = node;
