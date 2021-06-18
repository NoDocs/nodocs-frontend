/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeamContentQueryVariables = {|
  teamId?: ?string
|};
export type TeamContentQueryResponse = {|
  +teamTags: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +relations: ?$ReadOnlyArray<?({|
      +__typename: "Document",
      +id: string,
      +name: ?string,
      +shortDescription: ?string,
      +owner: ?{|
        +fullName: ?string,
        +color: ?string,
      |},
      +createdAt: ?string,
    |} | {|
      +__typename: "Neuron",
      +id: string,
      +name: ?string,
      +neuronId: ?string,
      +shortDescription: ?string,
      +owner: ?{|
        +fullName: ?string,
        +color: ?string,
      |},
      +createdAt: ?string,
    |} | {|
      // This will never be '%other', but we need some
      // value in case none of the concrete values match.
      +__typename: "%other"
    |})>,
  |}>
|};
export type TeamContentQuery = {|
  variables: TeamContentQueryVariables,
  response: TeamContentQueryResponse,
|};
*/


/*
query TeamContentQuery(
  $teamId: String
) {
  teamTags(teamId: $teamId) {
    id
    name
    relations {
      __typename
      ... on Document {
        id
        name
        shortDescription
        owner {
          fullName
          color
          id
        }
        createdAt(format: "MMM D")
      }
      ... on Neuron {
        id
        name
        neuronId
        shortDescription
        owner {
          fullName
          color
          id
        }
        createdAt(format: "MMM D")
      }
      ... on Node {
        __isNode: __typename
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "teamId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "teamId",
    "variableName": "teamId"
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
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shortDescription",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "owner",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v7/*: any*/)
  ],
  "storageKey": null
},
v9 = {
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
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "neuronId",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "owner",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v7/*: any*/),
    (v2/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TeamContentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "teamTags",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "relations",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v5/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "type": "Document",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v10/*: any*/),
                  (v5/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "type": "Neuron",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TeamContentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "teamTags",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "relations",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v5/*: any*/),
                  (v11/*: any*/),
                  (v9/*: any*/)
                ],
                "type": "Document",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v10/*: any*/),
                  (v5/*: any*/),
                  (v11/*: any*/),
                  (v9/*: any*/)
                ],
                "type": "Neuron",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v2/*: any*/)
                ],
                "type": "Node",
                "abstractKey": "__isNode"
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
    "cacheID": "62b15624bcb9f7d73245f2481f317fa8",
    "id": null,
    "metadata": {},
    "name": "TeamContentQuery",
    "operationKind": "query",
    "text": "query TeamContentQuery(\n  $teamId: String\n) {\n  teamTags(teamId: $teamId) {\n    id\n    name\n    relations {\n      __typename\n      ... on Document {\n        id\n        name\n        shortDescription\n        owner {\n          fullName\n          color\n          id\n        }\n        createdAt(format: \"MMM D\")\n      }\n      ... on Neuron {\n        id\n        name\n        neuronId\n        shortDescription\n        owner {\n          fullName\n          color\n          id\n        }\n        createdAt(format: \"MMM D\")\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dfa66f580cf2cecbd86a73b3103a6406';

module.exports = node;
