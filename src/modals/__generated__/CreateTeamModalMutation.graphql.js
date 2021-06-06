/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTeamInput = {|
  name: string,
  industry: string,
  clientMutationId?: ?string,
|};
export type CreateTeamModalMutationVariables = {|
  input: CreateTeamInput
|};
export type CreateTeamModalMutationResponse = {|
  +createTeam: ?{|
    +team: ?{|
      +id: string,
      +name: ?string,
      +company: ?{|
        +id: string
      |},
    |}
  |}
|};
export type CreateTeamModalMutation = {|
  variables: CreateTeamModalMutationVariables,
  response: CreateTeamModalMutationResponse,
|};
*/


/*
mutation CreateTeamModalMutation(
  $input: CreateTeamInput!
) {
  createTeam(input: $input) {
    team {
      id
      name
      company {
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
    "concreteType": "CreateTeamPayload",
    "kind": "LinkedField",
    "name": "createTeam",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Team",
        "kind": "LinkedField",
        "name": "team",
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
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "company",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ],
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
    "name": "CreateTeamModalMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTeamModalMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "07f408a1009ac39aa20790b4506a2bff",
    "id": null,
    "metadata": {},
    "name": "CreateTeamModalMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTeamModalMutation(\n  $input: CreateTeamInput!\n) {\n  createTeam(input: $input) {\n    team {\n      id\n      name\n      company {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8bbcc0a412d59534c33a13c2938bf52';

module.exports = node;
