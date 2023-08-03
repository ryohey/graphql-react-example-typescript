import { gql } from "./__generated__"
import {
  Avatar_OrganizationFragment,
  Avatar_UserFragment,
} from "./__generated__/graphql"

gql(`
  fragment Avatar_user on User {
    id
    name
    avatarUrl
  }
`)

gql(`
  fragment Avatar_organization on Organization {
    id
    name
    avatarUrl
  }
`)

export interface AvatarProps {
  user: Avatar_UserFragment | Avatar_OrganizationFragment
}

export function Avatar({ user }: AvatarProps) {
  return (
    <span key={user.id}>
      <img width={20} height={20} src={user.avatarUrl} />{" "}
      <span>{user.name}</span>
    </span>
  )
}
