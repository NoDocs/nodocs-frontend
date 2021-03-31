/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeamNavigationTeamsQueryVariables = {|
  companyId: string
|};
export type TeamNavigationTeamsQueryResponse = {|
  +me: ?{|
    +currentTeam: ?{|
      +id: string
    |}
  |},
  +teams: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
  |}>,
|};
export type TeamNavigationTeamsQuery = {|
  variables: TeamNavigationTeamsQueryVariables,
  response: TeamNavigationTeamsQueryResponse,
|};
*/


/*
query TeamNavigationTeamsQuery(
  $companyId: String!
) {
  me {
    currentTeam {
      id
    }
    id
  }
  teams(companyId: $companyId) {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "companyId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Team",
  "kind": "LinkedField",
  "name": "currentTeam",
  "plural": false,
  "selections": [
    (v1/*: any*/)
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "companyId",
      "variableName": "companyId"
    }
  ],
  "concreteType": "Team",
  "kind": "LinkedField",
  "name": "teams",
  "plural": true,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TeamNavigationTeamsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      (v3/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TeamNavigationTeamsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      (v3/*: any*/)
    ]
  },
  "params": {
    "cacheID": "8b6ac18c26affd0234b1bfbf3e65b19b",
    "id": null,
    "metadata": {},
    "name": "TeamNavigationTeamsQuery",
    "operationKind": "query",
    "text": "query TeamNavigationTeamsQuery(\n  $companyId: String!\n) {\n  me {\n    currentTeam {\n      id\n    }\n    id\n  }\n  teams(companyId: $companyId) {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2d3a13dea48b159f3e953deb954c35a2';

module.exports = node;
