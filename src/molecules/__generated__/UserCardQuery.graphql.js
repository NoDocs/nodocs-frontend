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
v1 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "fullName",
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Company",
        "kind": "LinkedField",
        "name": "currentCompany",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Company",
    "kind": "LinkedField",
    "name": "availableCompanies",
    "plural": true,
    "selections": (v1/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserCardQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserCardQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "728a73a4c295c57a2d4a05f2c4de2076",
    "id": null,
    "metadata": {},
    "name": "UserCardQuery",
    "operationKind": "query",
    "text": "query UserCardQuery {\n  me {\n    id\n    fullName\n    color\n    email\n    currentCompany {\n      id\n      name\n    }\n  }\n  availableCompanies {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ecf544586aff4509867f0b4bf6b7d91c';

module.exports = node;
