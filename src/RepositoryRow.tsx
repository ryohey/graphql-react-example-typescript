import { RepositoryDataFragment } from "./__generated__/graphql"

export interface RepositoryRowProps {
  repository: RepositoryDataFragment
}

export function RepositoryRow({ repository }: RepositoryRowProps) {
  return (
    <div key={repository.id}>
      <p>{repository.name}</p>
    </div>
  )
}
