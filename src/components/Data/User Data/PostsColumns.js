import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'User Id',
   
    accessor: 'id',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Creator First Name',
    
    accessor: 'first_name',
    sticky: 'left'
  },
  {
    Header: 'Creator Last Name',
    accessor: 'last_name',
    sticky: 'left'
  },
  {
    Header: 'Created At',
    
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy')
    }
  },
  {
    Header: 'Country',
   
    accessor: 'country'
  },
  {
    Header: 'User Phone',
    
    accessor: 'phone'
  },
  {
    Header: 'User Email',
    
    accessor: 'email'
  },
  
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    
    accessor: 'id'
  },
  {
    Header: 'Name',
   
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
       
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
   
    columns: [
      {
        Header: 'Date of Birth',
        
        accessor: 'date_of_birth'
      },
      {
        Header: 'Country',
       
        accessor: 'country'
      },
      {
        Header: 'Phone',
        
        accessor: 'phone'
      }
    ]
  }
]
