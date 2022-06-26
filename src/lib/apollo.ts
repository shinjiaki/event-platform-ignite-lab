import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vcff3r1du801uk25if4ivg/master',
  cache: new InMemoryCache()
})