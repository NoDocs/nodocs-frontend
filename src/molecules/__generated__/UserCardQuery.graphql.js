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
    +currentCompany: ?{|
      +name: ?string
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
    currentCompany {
      name
      id
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
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "availableCompanies",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    (v4/*: any*/)
  ],
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
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "currentCompany",
            "plural": false,
            "selections": [
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v5/*: any*/)
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
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "currentCompany",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v5/*: any*/)
    ]
  },
  "params": {
    "cacheID": "ebd20ae951d5adcebfd59fb5f2544913",
    "id": null,
    "metadata": {},
    "name": "UserCardQuery",
    "operationKind": "query",
    "text": "query UserCardQuery {\n  me {\n    id\n    fullName\n    color\n    email\n    currentCompany {\n      name\n      id\n    }\n  }\n  availableCompanies {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'efb1d297aad981f2e39f2b58b70087eb';

module.exports = node;
