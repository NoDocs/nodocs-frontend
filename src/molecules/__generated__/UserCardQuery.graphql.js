/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserCardQueryVariables = {||};
export type UserCardQueryResponse = {|
  +me: ?{|
    +id: string,
    +fullName: ?string,
    +color: ?string,
    +email: ?string,
    +currentTeam: ?{|
      +name: ?string
    |},
    +currentCompany: ?{|
      +id: string,
      +name: ?string,
    |},
  |},
  +availableCompanies: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
  |}>,
|};
export type UserCardQuery = {|
  variables: UserCardQueryVariables,
  response: UserCardQueryResponse,
|};
*/


/*
query UserCardQuery {
  me {
    id
    fullName
    color
    email
    currentTeam {
      name
      id
    }
    currentCompany {
      id
      name
    }
  }
  availableCompanies {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  (v0/*: any*/),
  (v4/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "currentCompany",
  "plural": false,
  "selections": (v5/*: any*/),
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "availableCompanies",
  "plural": true,
  "selections": (v5/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserCardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Team",
            "kind": "LinkedField",
            "name": "currentTeam",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      (v7/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserCardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Team",
            "kind": "LinkedField",
            "name": "currentTeam",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      (v7/*: any*/)
    ]
  },
  "params": {
    "cacheID": "fb8929bf6df01b649bed2ec831fbf078",
    "id": null,
    "metadata": {},
    "name": "UserCardQuery",
    "operationKind": "query",
    "text": "query UserCardQuery {\n  me {\n    id\n    fullName\n    color\n    email\n    currentTeam {\n      name\n      id\n    }\n    currentCompany {\n      id\n      name\n    }\n  }\n  availableCompanies {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ace3dc82b6c2906a0296da75706780a3';

module.exports = node;
