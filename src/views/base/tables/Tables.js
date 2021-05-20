import React from 'react'
import {
  // CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CInputGroup,
  // CInputGroupPrepend,
  // CInputGroupText,
  CInput
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'

import usersData from '../../users/UsersData'

// const getBadge = status => {
//   switch (status) {
//     case 'Active': return 'success'
//     case 'Inactive': return 'secondary'
//     case 'Pending': return 'warning'
//     case 'Banned': return 'danger'
//     default: return 'primary'
//   }
// }
const fields = ['no','title', 'location', 'date', 'participant', 'note']

const Tables = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader >
            </CCardHeader>
            <CCardBody>
            <CDataTable
              tableFilter={{placeholder:"search"}}
              items={usersData}
              fields={fields}
              itemsPerPage={5}
              pagination
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
