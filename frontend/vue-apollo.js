import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";
// import { createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "@apollo-cache-inmemory";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.VUE_APP_GRAPHQL_URL || "https://the-soft-drive.herokuapp.com/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default apolloClient;