/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SendInvitationsInput = {|
  emails: string,
  clientMutationId?: ?string,
|};
export type OnboardingSendInvitesMutationVariables = {|
  input: SendInvitationsInput
|};
export type OnboardingSendInvitesMutationResponse = {|
  +sendInvitations: ?{|
    +teamMembers: ?$ReadOnlyArray<?{|
      +id: string,
      +user: ?{|
        +email: ?string
      |},
    |}>
  |}
|};
export type OnboardingSendInvitesMutation = {|
  variables: OnboardingSendInvitesMutationVariables,
  response: OnboardingSendInvitesMutationResponse,
|};
*/


/*
mutation OnboardingSendInvitesMutation(
  $input: SendInvitationsInput!
) {
  sendInvitations(input: $input) {
    teamMembers {
      id
      user {
        email
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
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OnboardingSendInvitesMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SendInvitationsPayload",
        "kind": "LinkedField",
        "name": "sendInvitations",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TeamMember",
            "kind": "LinkedField",
            "name": "teamMembers",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OnboardingSendInvitesMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SendInvitationsPayload",
        "kind": "LinkedField",
        "name": "sendInvitations",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TeamMember",
            "kind": "LinkedField",
            "name": "teamMembers",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
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
    "cacheID": "260787571159f47c3a133c16ef01e0d2",
    "id": null,
    "metadata": {},
    "name": "OnboardingSendInvitesMutation",
    "operationKind": "mutation",
    "text": "mutation OnboardingSendInvitesMutation(\n  $input: SendInvitationsInput!\n) {\n  sendInvitations(input: $input) {\n    teamMembers {\n      id\n      user {\n        email\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4b665922c2f72914deb9a4bcee91222e';

module.exports = node;
