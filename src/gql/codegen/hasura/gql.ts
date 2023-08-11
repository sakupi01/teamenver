/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateTeam($name: String!) {\n  insert_teams(objects: {name: $name}) {\n    returning {\n      admin_id\n      name\n      id\n    }\n  }\n}\n\nmutation CreateBoard($is_public: Boolean!, $team_id: uuid!) {\n  insert_boards(objects: {is_public: $is_public, team_id: $team_id}) {\n    returning {\n      id\n      created_at\n      is_public\n      user_id\n      team_id\n    }\n  }\n}\n\nmutation CreateDetails($board_id: uuid!) {\n  insert_board_details(objects: {board_id: $board_id}) {\n    returning {\n      id\n      board_id\n    }\n  }\n}\n\nmutation UpdateDetails($id: uuid!, $framework: String!) {\n  update_board_details(where: {id: {_eq: $id}}, _set: {framework: $framework}) {\n    returning {\n      id\n      framework\n    }\n  }\n}": types.CreateTeamDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateTeam($name: String!) {\n  insert_teams(objects: {name: $name}) {\n    returning {\n      admin_id\n      name\n      id\n    }\n  }\n}\n\nmutation CreateBoard($is_public: Boolean!, $team_id: uuid!) {\n  insert_boards(objects: {is_public: $is_public, team_id: $team_id}) {\n    returning {\n      id\n      created_at\n      is_public\n      user_id\n      team_id\n    }\n  }\n}\n\nmutation CreateDetails($board_id: uuid!) {\n  insert_board_details(objects: {board_id: $board_id}) {\n    returning {\n      id\n      board_id\n    }\n  }\n}\n\nmutation UpdateDetails($id: uuid!, $framework: String!) {\n  update_board_details(where: {id: {_eq: $id}}, _set: {framework: $framework}) {\n    returning {\n      id\n      framework\n    }\n  }\n}"): (typeof documents)["mutation CreateTeam($name: String!) {\n  insert_teams(objects: {name: $name}) {\n    returning {\n      admin_id\n      name\n      id\n    }\n  }\n}\n\nmutation CreateBoard($is_public: Boolean!, $team_id: uuid!) {\n  insert_boards(objects: {is_public: $is_public, team_id: $team_id}) {\n    returning {\n      id\n      created_at\n      is_public\n      user_id\n      team_id\n    }\n  }\n}\n\nmutation CreateDetails($board_id: uuid!) {\n  insert_board_details(objects: {board_id: $board_id}) {\n    returning {\n      id\n      board_id\n    }\n  }\n}\n\nmutation UpdateDetails($id: uuid!, $framework: String!) {\n  update_board_details(where: {id: {_eq: $id}}, _set: {framework: $framework}) {\n    returning {\n      id\n      framework\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;