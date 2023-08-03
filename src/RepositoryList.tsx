import { gql, useQuery } from "@apollo/client"

export function RepositoryList() {
  const { loading, error, data } = useQuery(gql`
    query {
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

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.search.nodes.map(({ name, id }: any) => (
    <div key={id}>
      <p>{name}</p>
    </div>
  ))
}
