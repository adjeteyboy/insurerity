import { useQuery, gql } from '@apollo/client'

export const GET_COMPLIANTS = gql`
  query MyQuery {
    complaint {
      complaintId
      complaint
      id
      company {name}
      source
      type
    }
  }
`

export const useComplaints = () => {
  const { data, error, loading } = useQuery(GET_COMPLIANTS)

  return { data, error, loading }
}