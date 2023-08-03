import { useQuery } from "@apollo/client"
import { gql } from "./__generated__"

const GET_REPOSITORIES = gql(/* GraphQL */ `
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
  if (error) return <p>Error :(</p>

  return data?.search?.nodes?.map(({ name, id }: any) => (
    <div key={id}>
      <p>{name}</p>
    </div>
  ))
}
