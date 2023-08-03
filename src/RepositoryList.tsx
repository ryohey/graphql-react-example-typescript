import { useQuery } from "@apollo/client"
import { gql } from "./__generated__"

const GET_REPOSITORIES = gql(`
  query GetRepositories {
    search(query: "swift", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          id
          name
        }
      }
    }
  }
`)

export function RepositoryList() {
  const { loading, error, data } = useQuery(GET_REPOSITORIES)

  if (loading) return <p>Loading...</p>
  if (error || data === undefined) return <p>Error :(</p>

  return data.search?.nodes?.map(
    (node) =>
      node &&
      node.__typename === "Repository" && (
        <div key={node.id}>
          <p>{node.name}</p>
        </div>
      )
  )
}
