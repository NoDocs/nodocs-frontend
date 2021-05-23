/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AttachNeuronToDocumentInput = {|
  neuronId: string,
  documentId: string,
  clientMutationId?: ?string,
|};
export type attachNeuronToDocumentMutationVariables = {|
  input: AttachNeuronToDocumentInput
|};
export type attachNeuronToDocumentMutationResponse = {|
  +attachNeuronToDocument: ?{|
    +clientMutationId: ?string,
    +neuron: ?{|
      +content: ?string
    |},
  |}
|};
export type attachNeuronToDocumentMutation = {|
  variables: attachNeuronToDocumentMutationVariables,
  response: attachNeuronToDocumentMutationResponse,
|};
*/


/*
mutation attachNeuronToDocumentMutation(
  $input: AttachNeuronToDocumentInput!
) {
  attachNeuronToDocument(input: $input) {
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
    "name": "attachNeuronToDocumentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AttachNeuronToDocumentPayload",
        "kind": "LinkedField",
        "name": "attachNeuronToDocument",
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
    "name": "attachNeuronToDocumentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AttachNeuronToDocumentPayload",
        "kind": "LinkedField",
        "name": "attachNeuronToDocument",
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
    "cacheID": "89020d6429cc8e991d622c1edd2cff6b",
    "id": null,
    "metadata": {},
    "name": "attachNeuronToDocumentMutation",
    "operationKind": "mutation",
    "text": "mutation attachNeuronToDocumentMutation(\n  $input: AttachNeuronToDocumentInput!\n) {\n  attachNeuronToDocument(input: $input) {\n    clientMutationId\n    neuron {\n      content\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4ac03b67ccef4b8c80ef125f4571a9f6';

module.exports = node;
