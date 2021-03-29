/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateNeuronInput = {|
  neuronId: string,
  content: string,
  name: string,
  clientMutationId?: ?string,
|};
export type CreateNeuronShortcutMutationVariables = {|
  input: CreateNeuronInput
|};
export type CreateNeuronShortcutMutationResponse = {|
  +createNeuron: ?{|
    +clientMutationId: ?string,
    +neuron: ?{|
      +id: string,
      +name: ?string,
      +neuronId: ?string,
      +content: ?string,
    |},
  |}
|};
export type CreateNeuronShortcutMutation = {|
  variables: CreateNeuronShortcutMutationVariables,
  response: CreateNeuronShortcutMutationResponse,
|};
*/


/*
mutation CreateNeuronShortcutMutation(
  $input: CreateNeuronInput!
) {
  createNeuron(input: $input) {
    clientMutationId
    neuron {
      id
      name
      neuronId
      content
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
    "concreteType": "CreateNeuronPayload",
    "kind": "LinkedField",
    "name": "createNeuron",
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
        "concreteType": "Neuron",
        "kind": "LinkedField",
        "name": "neuron",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "neuronId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
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
    "name": "CreateNeuronShortcutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateNeuronShortcutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dc0d8d48e0f0af73fafb6cf7426bdd2a",
    "id": null,
    "metadata": {},
    "name": "CreateNeuronShortcutMutation",
    "operationKind": "mutation",
    "text": "mutation CreateNeuronShortcutMutation(\n  $input: CreateNeuronInput!\n) {\n  createNeuron(input: $input) {\n    clientMutationId\n    neuron {\n      id\n      name\n      neuronId\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e78267c6155a2ba3dc5cddb9e385fd5e';

module.exports = node;
