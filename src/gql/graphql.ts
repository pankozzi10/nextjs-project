/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type ProductBaseFragment = { id: string, description: string, name: string, price: number, rating?: number | null, categories: Array<{ id: string, name: string }>, images: Array<{ id: string, alt: string, height: number, url: string, width: number }> };

export type CartAddItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
}>;


export type CartAddItemMutation = { cartAddItem: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number } }> } };

export type CartChangeItemQuantityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartChangeItemQuantityMutation = { cartChangeItemQuantity: { id: string } };

export type CartFindOrCreateMutationVariables = Exact<{ [key: string]: never; }>;


export type CartFindOrCreateMutation = { newCart: { id: string } };

export type CartRemoveItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartRemoveItemMutation = { cartRemoveItem: { id: string } };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, images: Array<{ id: string, alt: string, height: number, url: string, width: number }> } }> } | null };

export type CategoriesPageListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CategoriesPageListQuery = { categories: { data: Array<{ id: string, name: string, description: string, slug: string, products: Array<{ images: Array<{ alt: string, height: number, id: string, url: string, width: number }> }> }>, meta: { total: number } } };

export type CategoryProductsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type CategoryProductsQuery = { category?: { id: string, products: Array<{ id: string, description: string, name: string, price: number, rating?: number | null, categories: Array<{ id: string, name: string }>, images: Array<{ id: string, alt: string, height: number, url: string, width: number }> }> } | null };

export type CollectionBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionBySlugQuery = { collection?: { description: string, id: string, name: string, products: Array<{ id: string, description: string, name: string, price: number, rating?: number | null, categories: Array<{ id: string, name: string }>, images: Array<{ id: string, alt: string, height: number, url: string, width: number }> }> } | null };

export type HomePageQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;


export type HomePageQuery = { collections: { data: Array<{ id: string, description: string, name: string, slug: string, products: Array<{ id: string, images: Array<{ id: string, alt: string, height: number, url: string, width: number }> }> }> }, products: { data: Array<{ id: string, description: string, name: string, price: number, rating?: number | null, categories: Array<{ id: string, name: string }>, images: Array<{ id: string, alt: string, height: number, url: string, width: number }> }> } };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductByIdQuery = { product?: { id: string, description: string, name: string, price: number, rating?: number | null, categories: Array<{ id: string, name: string }>, images: Array<{ id: string, alt: string, height: number, url: string, width: number }> } | null };

export type RelatedProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type RelatedProductsQuery = { products: { data: Array<{ id: string, description: string, name: string, price: number, rating?: number | null, categories: Array<{ id: string, name: string }>, images: Array<{ id: string, alt: string, height: number, url: string, width: number }> }> } };

export type ProductsPageListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsPageListQuery = { products: { data: Array<{ id: string, description: string, name: string, price: number, rating?: number | null, categories: Array<{ id: string, name: string }>, images: Array<{ id: string, alt: string, height: number, url: string, width: number }> }>, meta: { total: number } } };

export type SearchPageProductListQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchPageProductListQuery = { products: { data: Array<{ id: string, description: string, name: string, price: number, rating?: number | null, categories: Array<{ id: string, name: string }>, images: Array<{ id: string, alt: string, height: number, url: string, width: number }> }>, meta: { count: number } } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ProductBaseFragmentDoc = new TypedDocumentString(`
    fragment ProductBase on Product {
  id
  categories {
    id
    name
  }
  description
  images {
    id
    alt
    height
    url
    width
  }
  name
  price
  rating
}
    `, {"fragmentName":"ProductBase"}) as unknown as TypedDocumentString<ProductBaseFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {
  cartAddItem(id: $id, input: $input) {
    id
    items {
      quantity
      product {
        id
        name
        price
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartChangeItemQuantityDocument = new TypedDocumentString(`
    mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartChangeItemQuantityMutation, CartChangeItemQuantityMutationVariables>;
export const CartFindOrCreateDocument = new TypedDocumentString(`
    mutation CartFindOrCreate {
  newCart: cartFindOrCreate(input: {items: [{productId: "1", quantity: 0}]}) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartFindOrCreateMutation, CartFindOrCreateMutationVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($id: ID!, $productId: ID!) {
  cartRemoveItem(id: $id, productId: $productId) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    id
    items {
      quantity
      product {
        id
        name
        price
        images {
          id
          alt
          height
          url
          width
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CategoriesPageListDocument = new TypedDocumentString(`
    query CategoriesPageList($take: Int, $skip: Int) {
  categories(take: $take, skip: $skip) {
    data {
      id
      name
      description
      slug
      products {
        images {
          alt
          height
          id
          url
          width
        }
      }
    }
    meta {
      total
    }
  }
}
    `) as unknown as TypedDocumentString<CategoriesPageListQuery, CategoriesPageListQueryVariables>;
export const CategoryProductsDocument = new TypedDocumentString(`
    query CategoryProducts($slug: String) {
  category(slug: $slug) {
    id
    products {
      ...ProductBase
    }
  }
}
    fragment ProductBase on Product {
  id
  categories {
    id
    name
  }
  description
  images {
    id
    alt
    height
    url
    width
  }
  name
  price
  rating
}`) as unknown as TypedDocumentString<CategoryProductsQuery, CategoryProductsQueryVariables>;
export const CollectionBySlugDocument = new TypedDocumentString(`
    query CollectionBySlug($slug: String!) {
  collection(slug: $slug) {
    description
    id
    name
    products {
      ...ProductBase
    }
  }
}
    fragment ProductBase on Product {
  id
  categories {
    id
    name
  }
  description
  images {
    id
    alt
    height
    url
    width
  }
  name
  price
  rating
}`) as unknown as TypedDocumentString<CollectionBySlugQuery, CollectionBySlugQueryVariables>;
export const HomePageDocument = new TypedDocumentString(`
    query HomePage($take: Int!, $skip: Int!) {
  collections {
    data {
      id
      description
      name
      products {
        id
        images {
          id
          alt
          height
          url
          width
        }
      }
      slug
    }
  }
  products(take: $take, skip: $skip) {
    data {
      ...ProductBase
    }
  }
}
    fragment ProductBase on Product {
  id
  categories {
    id
    name
  }
  description
  images {
    id
    alt
    height
    url
    width
  }
  name
  price
  rating
}`) as unknown as TypedDocumentString<HomePageQuery, HomePageQueryVariables>;
export const ProductByIdDocument = new TypedDocumentString(`
    query ProductById($id: ID!) {
  product(id: $id) {
    ...ProductBase
  }
}
    fragment ProductBase on Product {
  id
  categories {
    id
    name
  }
  description
  images {
    id
    alt
    height
    url
    width
  }
  name
  price
  rating
}`) as unknown as TypedDocumentString<ProductByIdQuery, ProductByIdQueryVariables>;
export const RelatedProductsDocument = new TypedDocumentString(`
    query RelatedProducts {
  products(take: 5) {
    data {
      ...ProductBase
    }
  }
}
    fragment ProductBase on Product {
  id
  categories {
    id
    name
  }
  description
  images {
    id
    alt
    height
    url
    width
  }
  name
  price
  rating
}`) as unknown as TypedDocumentString<RelatedProductsQuery, RelatedProductsQueryVariables>;
export const ProductsPageListDocument = new TypedDocumentString(`
    query ProductsPageList($take: Int, $skip: Int) {
  products(take: $take, skip: $skip) {
    data {
      ...ProductBase
    }
    meta {
      total
    }
  }
}
    fragment ProductBase on Product {
  id
  categories {
    id
    name
  }
  description
  images {
    id
    alt
    height
    url
    width
  }
  name
  price
  rating
}`) as unknown as TypedDocumentString<ProductsPageListQuery, ProductsPageListQueryVariables>;
export const SearchPageProductListDocument = new TypedDocumentString(`
    query SearchPageProductList($search: String) {
  products(search: $search) {
    data {
      ...ProductBase
    }
    meta {
      count
    }
  }
}
    fragment ProductBase on Product {
  id
  categories {
    id
    name
  }
  description
  images {
    id
    alt
    height
    url
    width
  }
  name
  price
  rating
}`) as unknown as TypedDocumentString<SearchPageProductListQuery, SearchPageProductListQueryVariables>;