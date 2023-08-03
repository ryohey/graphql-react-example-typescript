import { gql } from "./__generated__"
import { RepositoryRow_RepositoryFragment } from "./__generated__/graphql"

gql(`
  fragment RepositoryRow_repository on Repository {
    id
    name
  }
`)

export interface RepositoryRowProps {
  repository: RepositoryRow_RepositoryFragment
}

export function RepositoryRow({ repository }: RepositoryRowProps) {
  return (
    <div key={repository.id}>
      <p>{repository.name}</p>
    </div>
  )
}
