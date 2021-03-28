/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateDocumentInput = {|
  documentId: string,
  content: string,
  name: string,
  clientMutationId?: ?string,
|};
export type CreateDocumentMutationVariables = {|
  input: CreateDocumentInput
|};
export type CreateDocumentMutationResponse = {|
  +createDocument: ?{|
    +clientMutationId: ?string,
    +document: ?{|
      +id: string
    |},
  |}
|};
export type CreateDocumentMutation = {|
  variables: CreateDocumentMutationVariables,
  response: CreateDocumentMutationResponse,
|};
*/


/*
mutation CreateDocumentMutation(
  $input: CreateDocumentInput!
) {
  createDocument(input: $input) {
    clientMutationId
    document {
      id
    }
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
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateDocumentPayload",
    "kind": "LinkedField",
    "name": "createDocument",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Document",
        "kind": "LinkedField",
        "name": "document",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
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
    "name": "CreateDocumentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateDocumentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a876ec4acc3f98ed822352457ff375f6",
    "id": null,
    "metadata": {},
    "name": "CreateDocumentMutation",
    "operationKind": "mutation",
    "text": "mutation CreateDocumentMutation(\n  $input: CreateDocumentInput!\n) {\n  createDocument(input: $input) {\n    clientMutationId\n    document {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4726c22798ed1654773786f44f3b0fee';

module.exports = node;
