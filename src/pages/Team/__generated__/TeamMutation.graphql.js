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
export type TeamMutationVariables = {|
  input: CreateNeuronInput
|};
export type TeamMutationResponse = {|
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
export type TeamMutation = {|
  variables: TeamMutationVariables,
  response: TeamMutationResponse,
|};
*/


/*
mutation TeamMutation(
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
    "name": "TeamMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TeamMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c2f1e59592cc802a5df80bdb402f18c0",
    "id": null,
    "metadata": {},
    "name": "TeamMutation",
    "operationKind": "mutation",
    "text": "mutation TeamMutation(\n  $input: CreateNeuronInput!\n) {\n  createNeuron(input: $input) {\n    clientMutationId\n    neuron {\n      id\n      name\n      neuronId\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '67ba3aaf2bacfce6756e79f664d4ff94';

module.exports = node;
