import { gql } from 'apollo-boost';

const GET_EMAIL = gql`
  query {
    repository(owner:"octocat", name:"Hello-World") {
      issues(last:20, states:CLOSED) {
        edges {
          node {
            title
            url
            labels(first:5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

const BAD_EMAIL = gql`
  query {
    repository(owner:"111111", name:"Hello-World") {
      issues(last:20, states:CLOSED) {
        edges {
          node {
            title
            url
            labels(first:5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

const MY_REPOSITORY_LIST = gql`
  query {
    user(login: "pmaier983") {
      id
      repositories(first: 3) {
        edges {
          node {
            name
            createdAt
          }
        }
      }
    }
  }
`;

export { GET_EMAIL, BAD_EMAIL, MY_REPOSITORY_LIST };
