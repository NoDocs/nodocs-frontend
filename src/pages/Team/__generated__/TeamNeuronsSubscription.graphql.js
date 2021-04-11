/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateNeuronSubscriptionInput = {|
  clientSubscriptionId?: ?string
|};
export type TeamNeuronsSubscriptionVariables = {|
  input: CreateNeuronSubscriptionInput
|};
export type TeamNeuronsSubscriptionResponse = {|
  +createNeuron: ?{|
    +neuron: ?{|
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
export type TeamNeuronsSubscription = {|
  variables: TeamNeuronsSubscriptionVariables,
  response: TeamNeuronsSubscriptionResponse,
|};
*/


/*
subscription TeamNeuronsSubscription(
  $input: CreateNeuronSubscriptionInput!
) {
  createNeuron(input: $input) {
    neuron {
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
    "concreteType": "CreateNeuronSubscriptionPayload",
    "kind": "LinkedField",
    "name": "createNeuron",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Neuron",
        "kind": "LinkedField",
        "name": "neuron",
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
    "name": "TeamNeuronsSubscription",
    "selections": (v2/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TeamNeuronsSubscription",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "41ef11ebc572dbeec84594f624320321",
    "id": null,
    "metadata": {},
    "name": "TeamNeuronsSubscription",
    "operationKind": "subscription",
    "text": "subscription TeamNeuronsSubscription(\n  $input: CreateNeuronSubscriptionInput!\n) {\n  createNeuron(input: $input) {\n    neuron {\n      id\n      name\n      createdAt(format: \"MMM D\")\n      owner {\n        id\n        avatar\n        color\n        fullName\n      }\n    }\n    clientSubscriptionId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4339ef7cbd9c3b9e9eee0cf2d3583734';

module.exports = node;
