/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTagInput = {|
  name: string,
  documentId: string,
  clientMutationId?: ?string,
|};
export type AddTagMutationVariables = {|
  input: CreateTagInput
|};
export type AddTagMutationResponse = {|
  +createTag: ?{|
    +tag: ?{|
      +id: string,
      +name: ?string,
    |}
  |}
|};
export type AddTagMutation = {|
  variables: AddTagMutationVariables,
  response: AddTagMutationResponse,
|};
*/


/*
mutation AddTagMutation(
  $input: CreateTagInput!
) {
  createTag(input: $input) {
    tag {
      id
      name
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
    "concreteType": "CreateTagPayload",
    "kind": "LinkedField",
    "name": "createTag",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tag",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
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
    "name": "AddTagMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddTagMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "39490a42f675ed09ec6dc375af75d4c6",
    "id": null,
    "metadata": {},
    "name": "AddTagMutation",
    "operationKind": "mutation",
    "text": "mutation AddTagMutation(\n  $input: CreateTagInput!\n) {\n  createTag(input: $input) {\n    tag {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '80db501b0382eebaa5928613306cb4e0';

module.exports = node;
