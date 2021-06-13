/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GraphModalNeuronsQueryVariables = {|
  teamId: string
|};
export type GraphModalNeuronsQueryResponse = {|
  +neurons: ?{|
    +__id: string,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +documents: ?$ReadOnlyArray<?{|
          +id: string,
          +name: ?string,
        |}>,
        +neuronId: ?string,
        +file: ?{|
          +url: ?string
        |},
        +name: ?string,
        +createdAt: ?string,
        +owner: ?{|
          +id: string,
          +avatar: ?string,
          +color: ?string,
          +fullName: ?string,
        |},
      |}
    |}>,
  |}
|};
export type GraphModalNeuronsQuery = {|
  variables: GraphModalNeuronsQueryVariables,
  response: GraphModalNeuronsQueryResponse,
|};
*/


/*
query GraphModalNeuronsQuery(
  $teamId: String!
) {
  neurons(first: 2147483647, teamId: $teamId) {
    edges {
      node {
        id
        documents {
          id
          name
        }
        neuronId
        file {
          url
          id
        }
        name
        createdAt(format: "MMM D")
        owner {
          id
          avatar
          color
          fullName
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
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
v1 = {
  "kind": "Variable",
  "name": "teamId",
  "variableName": "teamId"
},
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
  "concreteType": "Document",
  "kind": "LinkedField",
  "name": "documents",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "neuronId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v7 = {
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
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "owner",
  "plural": false,
  "selections": [
    (v2/*: any*/),
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
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v12 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v13 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2147483647
  },
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GraphModalNeuronsQuery",
    "selections": [
      {
        "alias": "neurons",
        "args": [
          (v1/*: any*/)
        ],
        "concreteType": "NeuronConnection",
        "kind": "LinkedField",
        "name": "__Team_neurons_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "NeuronEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Neuron",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "File",
                    "kind": "LinkedField",
                    "name": "file",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/)
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
    "name": "GraphModalNeuronsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v13/*: any*/),
        "concreteType": "NeuronConnection",
        "kind": "LinkedField",
        "name": "neurons",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "NeuronEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Neuron",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "File",
                    "kind": "LinkedField",
                    "name": "file",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v12/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v13/*: any*/),
        "filters": [
          "teamId"
        ],
        "handle": "connection",
        "key": "Team_neurons",
        "kind": "LinkedHandle",
        "name": "neurons"
      }
    ]
  },
  "params": {
    "cacheID": "558e2c07dfa06cc4c2d38e786c73a02c",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "neurons"
          ]
        }
      ]
    },
    "name": "GraphModalNeuronsQuery",
    "operationKind": "query",
    "text": "query GraphModalNeuronsQuery(\n  $teamId: String!\n) {\n  neurons(first: 2147483647, teamId: $teamId) {\n    edges {\n      node {\n        id\n        documents {\n          id\n          name\n        }\n        neuronId\n        file {\n          url\n          id\n        }\n        name\n        createdAt(format: \"MMM D\")\n        owner {\n          id\n          avatar\n          color\n          fullName\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6699649131cf1e3ca59afce09e37747a';

module.exports = node;
