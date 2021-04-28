/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SwitchAssetSubscriptionInput = {|
  clientSubscriptionId?: ?string
|};
export type useNeuronSubscriptionVariables = {|
  input: SwitchAssetSubscriptionInput
|};
export type useNeuronSubscriptionResponse = {|
  +switchAsset: ?{|
    +neuron: ?{|
      +file: ?{|
        +id: string,
        +url: ?string,
      |}
    |},
    +clientSubscriptionId: ?string,
  |}
|};
export type useNeuronSubscription = {|
  variables: useNeuronSubscriptionVariables,
  response: useNeuronSubscriptionResponse,
|};
*/


/*
subscription useNeuronSubscription(
  $input: SwitchAssetSubscriptionInput!
) {
  switchAsset(input: $input) {
    neuron {
      file {
        id
        url
      }
      id
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "File",
  "kind": "LinkedField",
  "name": "file",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientSubscriptionId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useNeuronSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SwitchAssetSubscriptionPayload",
        "kind": "LinkedField",
        "name": "switchAsset",
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
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useNeuronSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SwitchAssetSubscriptionPayload",
        "kind": "LinkedField",
        "name": "switchAsset",
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
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bdd5d5cc542f8d49b2f2243345641d14",
    "id": null,
    "metadata": {},
    "name": "useNeuronSubscription",
    "operationKind": "subscription",
    "text": "subscription useNeuronSubscription(\n  $input: SwitchAssetSubscriptionInput!\n) {\n  switchAsset(input: $input) {\n    neuron {\n      file {\n        id\n        url\n      }\n      id\n    }\n    clientSubscriptionId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f8b40e5aa261e3248ac124ced5795e7e';

module.exports = node;
