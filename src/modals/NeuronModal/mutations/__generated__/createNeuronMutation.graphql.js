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
export type createNeuronMutationVariables = {|
  input: CreateNeuronInput
|};
export type createNeuronMutationResponse = {|
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
export type createNeuronMutation = {|
  variables: createNeuronMutationVariables,
  response: createNeuronMutationResponse,
|};
*/


/*
mutation createNeuronMutation(
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
    "name": "createNeuronMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createNeuronMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5086ca9dbd8a4816e282f46fe2dea397",
    "id": null,
    "metadata": {},
    "name": "createNeuronMutation",
    "operationKind": "mutation",
    "text": "mutation createNeuronMutation(\n  $input: CreateNeuronInput!\n) {\n  createNeuron(input: $input) {\n    clientMutationId\n    neuron {\n      id\n      name\n      neuronId\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a730d8c7c88c393deeebd856739da9aa';

module.exports = node;
