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
    "\n  fragment Avatar_user on User {\n    id\n    name\n    avatarUrl\n  }\n": types.Avatar_UserFragmentDoc,
    "\n  fragment Avatar_organization on Organization {\n    id\n    name\n    avatarUrl\n  }\n": types.Avatar_OrganizationFragmentDoc,
    "\n  query GetRepositories {\n    search(query: \"swift\", type: REPOSITORY, first: 10) {\n      nodes {\n        ...RepositoryRow_repository\n      }\n    }\n  }\n": types.GetRepositoriesDocument,
    "\n  fragment RepositoryRow_repository on Repository {\n    id\n    name\n    owner {\n      ...Avatar_user\n      ...Avatar_organization\n    }\n  }\n": types.RepositoryRow_RepositoryFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Avatar_user on User {\n    id\n    name\n    avatarUrl\n  }\n"): (typeof documents)["\n  fragment Avatar_user on User {\n    id\n    name\n    avatarUrl\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Avatar_organization on Organization {\n    id\n    name\n    avatarUrl\n  }\n"): (typeof documents)["\n  fragment Avatar_organization on Organization {\n    id\n    name\n    avatarUrl\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetRepositories {\n    search(query: \"swift\", type: REPOSITORY, first: 10) {\n      nodes {\n        ...RepositoryRow_repository\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetRepositories {\n    search(query: \"swift\", type: REPOSITORY, first: 10) {\n      nodes {\n        ...RepositoryRow_repository\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment RepositoryRow_repository on Repository {\n    id\n    name\n    owner {\n      ...Avatar_user\n      ...Avatar_organization\n    }\n  }\n"): (typeof documents)["\n  fragment RepositoryRow_repository on Repository {\n    id\n    name\n    owner {\n      ...Avatar_user\n      ...Avatar_organization\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;