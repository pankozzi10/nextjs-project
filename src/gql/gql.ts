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
    "query CategoriesPageList($take: Int, $skip: Int) {\n  categories(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      slug\n      products {\n        images {\n          alt\n          height\n          id\n          url\n          width\n        }\n      }\n    }\n    meta {\n      total\n    }\n  }\n}\n\nquery CategoryProducts($slug: String) {\n  category(slug: $slug) {\n    id\n    products {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n  }\n}": types.CategoriesPageListDocument,
    "query CollectionBySlug($slug: String!) {\n  collection(slug: $slug) {\n    description\n    id\n    name\n    products {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n  }\n}": types.CollectionBySlugDocument,
    "query HomePage($take: Int!, $skip: Int!) {\n  collections {\n    data {\n      id\n      description\n      name\n      products {\n        id\n        images {\n          id\n          alt\n          height\n          url\n          width\n        }\n      }\n      slug\n    }\n  }\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        id\n        alt\n        height\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n  }\n}": types.HomePageDocument,
    "query ProductById($id: ID!) {\n  product(id: $id) {\n    id\n    categories {\n      id\n      name\n    }\n    description\n    images {\n      alt\n      height\n      id\n      url\n      width\n    }\n    name\n    price\n    rating\n  }\n}\n\nquery RelatedProducts {\n  products(take: 4) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n  }\n}": types.ProductByIdDocument,
    "query ProductsPageList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsPageListDocument,
    "query SearchPageProductList($search: String) {\n  products(search: $search) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n    meta {\n      count\n    }\n  }\n}": types.SearchPageProductListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesPageList($take: Int, $skip: Int) {\n  categories(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      slug\n      products {\n        images {\n          alt\n          height\n          id\n          url\n          width\n        }\n      }\n    }\n    meta {\n      total\n    }\n  }\n}\n\nquery CategoryProducts($slug: String) {\n  category(slug: $slug) {\n    id\n    products {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n  }\n}"): typeof import('./graphql').CategoriesPageListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionBySlug($slug: String!) {\n  collection(slug: $slug) {\n    description\n    id\n    name\n    products {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n  }\n}"): typeof import('./graphql').CollectionBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HomePage($take: Int!, $skip: Int!) {\n  collections {\n    data {\n      id\n      description\n      name\n      products {\n        id\n        images {\n          id\n          alt\n          height\n          url\n          width\n        }\n      }\n      slug\n    }\n  }\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        id\n        alt\n        height\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n  }\n}"): typeof import('./graphql').HomePageDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductById($id: ID!) {\n  product(id: $id) {\n    id\n    categories {\n      id\n      name\n    }\n    description\n    images {\n      alt\n      height\n      id\n      url\n      width\n    }\n    name\n    price\n    rating\n  }\n}\n\nquery RelatedProducts {\n  products(take: 4) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n  }\n}"): typeof import('./graphql').ProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsPageList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsPageListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchPageProductList($search: String) {\n  products(search: $search) {\n    data {\n      id\n      categories {\n        id\n        name\n      }\n      description\n      images {\n        alt\n        height\n        id\n        url\n        width\n      }\n      name\n      price\n      rating\n    }\n    meta {\n      count\n    }\n  }\n}"): typeof import('./graphql').SearchPageProductListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
