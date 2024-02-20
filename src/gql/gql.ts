/* eslint-disable */
import * as types from './graphql';



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
    "query ProductById($id: ID!) {\n  product(id: $id) {\n    id\n    categories {\n      id\n      name\n    }\n    description\n    images {\n      alt\n      height\n      id\n      url\n      width\n    }\n    name\n    price\n    rating\n  }\n}\n\nquery RelatedProducts {\n  products(take: 4) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n  }\n}": types.ProductByIdDocument,
    "query ProductsPageList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsPageListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductById($id: ID!) {\n  product(id: $id) {\n    id\n    categories {\n      id\n      name\n    }\n    description\n    images {\n      alt\n      height\n      id\n      url\n      width\n    }\n    name\n    price\n    rating\n  }\n}\n\nquery RelatedProducts {\n  products(take: 4) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n  }\n}"): typeof import('./graphql').ProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsPageList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsPageListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
