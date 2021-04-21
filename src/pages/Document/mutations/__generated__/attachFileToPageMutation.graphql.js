/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UploadFileInput = {|
  documentId: string,
  file?: ?any,
  clientMutationId?: ?string,
|};
export type attachFileToPageMutationVariables = {|
  input: UploadFileInput
|};
export type attachFileToPageMutationResponse = {|
  +uploadFile: ?{|
    +clientMutationId: ?string,
    +file: ?{|
      +name: ?string,
      +url: ?string,
    |},
  |}
|};
export type attachFileToPageMutation = {|
  variables: attachFileToPageMutationVariables,
  response: attachFileToPageMutationResponse,
|};
*/


/*
mutation attachFileToPageMutation(
  $input: UploadFileInput!
) {
  uploadFile(input: $input) {
    clientMutationId
    file {
      name
      url
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientMutationId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "attachFileToPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UploadFilePayload",
        "kind": "LinkedField",
        "name": "uploadFile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "File",
            "kind": "LinkedField",
            "name": "file",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "attachFileToPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UploadFilePayload",
        "kind": "LinkedField",
        "name": "uploadFile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "File",
            "kind": "LinkedField",
            "name": "file",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "a35548341cf6d1ec9fc2645de6fe13b0",
    "id": null,
    "metadata": {},
    "name": "attachFileToPageMutation",
    "operationKind": "mutation",
    "text": "mutation attachFileToPageMutation(\n  $input: UploadFileInput!\n) {\n  uploadFile(input: $input) {\n    clientMutationId\n    file {\n      name\n      url\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '12b2f36d267a554ece4f74648f904043';

module.exports = node;
