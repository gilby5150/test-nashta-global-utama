import React, { lazy } from 'react'
// import {Link} from 'react-router-dom'
import {
  CContainer,
  CCardGroup,
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInput,
  CImg,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  // CFormLabel,
  // CFormControl
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const Dashboard = () => {
  return (
    <>
      <div className="c-app c-default-layout flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-start">
                <CCol md="8">
                    <CCardGroup style={{ width: '65rem' }}>
                    <CCard>
                        <CCardBody>
                        <CForm>
                            <h1>+ Add Event</h1>
                            <CRow>
                            <CCol xs>
                            <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                                <CInputGroupText>
                                <CIcon name="cil-pencil" />
                                </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput type="text" placeholder="Title" autoComplete="title" />
                            </CInputGroup>
                            </CCol>
                            <CCol xs>
                            <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                                <CInputGroupText>
                                <CIcon name="cil-location-pin" />
                                </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput type="text" placeholder="Location" autoComplete="location" />
                            </CInputGroup>
                            </CCol>
                            </CRow>
                            <CRow>
                            <CCol xs>
                            <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                                <CInputGroupText>
                                <CIcon name="cil-user" />
                                </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput type="text" placeholder="Participant" autoComplete="participant" />
                            </CInputGroup>
                            </CCol>
                            <CCol xs>
                            <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                                <CInputGroupText>
                                <CIcon name="cil-calendar" />
                                </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput type="text" placeholder="Date" autoComplete="date" />
                            </CInputGroup>
                            </CCol>
                            </CRow>
                            <CRow>
                            <CCol>
                            <div class="form-group">
                              <textarea placeholder="Note" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            </CCol>
                            </CRow>
                            <CRow>
                            <CCol xs="6">
                                <CButton color="secondary" className="px-4">Upload Image</CButton>
                            </CCol>
                            </CRow>
                              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <CRow>
                              <CCol xs="6">
                                <CButton color="primary" className="px-4">Submit</CButton>
                              </CCol>
                            </CRow>
                              </div>
                        </CForm>
                        </CCardBody>
                    </CCard>
                    <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                        <CCardBody className="text-center">
                        <div>
                        <CImg
                          src={'avatars/meeting.png'}
                          className="c-avatar-img"
                          alt="admin@bootstrapmaster.com"
                        />
                        </div>
                        </CCardBody>
                    </CCard>
                    </CCardGroup>
                </CCol>
                </CRow>
            </CContainer>
            </div>
    </>
  )
}

export default Dashboard
