/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AttachNeuronToPageInput = {|
  neuronId: string,
  pageId: string,
  clientMutationId?: ?string,
|};
export type attachNeuronToPageMutationVariables = {|
  input: AttachNeuronToPageInput
|};
export type attachNeuronToPageMutationResponse = {|
  +attachNeuronToPage: ?{|
    +clientMutationId: ?string,
    +neuron: ?{|
      +content: ?string
    |},
  |}
|};
export type attachNeuronToPageMutation = {|
  variables: attachNeuronToPageMutationVariables,
  response: attachNeuronToPageMutationResponse,
|};
*/


/*
mutation attachNeuronToPageMutation(
  $input: AttachNeuronToPageInput!
) {
  attachNeuronToPage(input: $input) {
    clientMutationId
    neuron {
      content
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
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "attachNeuronToPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AttachNeuronToPagePayload",
        "kind": "LinkedField",
        "name": "attachNeuronToPage",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Neuron",
            "kind": "LinkedField",
            "name": "neuron",
            "plural": false,
            "selections": [
              (v3/*: any*/)
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
    "name": "attachNeuronToPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AttachNeuronToPagePayload",
        "kind": "LinkedField",
        "name": "attachNeuronToPage",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Neuron",
            "kind": "LinkedField",
            "name": "neuron",
            "plural": false,
            "selections": [
              (v3/*: any*/),
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
    "cacheID": "3c4d04630dd7387b940c6aaac9b1efd6",
    "id": null,
    "metadata": {},
    "name": "attachNeuronToPageMutation",
    "operationKind": "mutation",
    "text": "mutation attachNeuronToPageMutation(\n  $input: AttachNeuronToPageInput!\n) {\n  attachNeuronToPage(input: $input) {\n    clientMutationId\n    neuron {\n      content\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0135124160339e63fb21e63049a94e4c';

module.exports = node;
