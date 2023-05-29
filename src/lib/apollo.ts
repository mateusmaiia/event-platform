import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.hygraph.com/v2/cli95692u0f4p01t2edir2y72/master',
    cache: new InMemoryCache()
})