import React from 'react'
import {
  // CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  // CCardHeader,
  CCol,
  CRow,
  CImg,
  // CCollapse,
  // CFade,
  // CSwitch,
  // CLink,
  CLabel
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
// import { DocsLink } from 'src/reusable'


const Cards = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <div>
              <CImg
                src={'avatars/meeting.png'}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
            </div>
            <CRow>
              <CCol>
              <p style={{fontWeight:"bold"}}><CIcon name="cil-location-pin"/>PISANGAN TIMUR,JAKARTA</p>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
              <span style={{fontWeight:"bold",fontSize:24}}>Meeting With CEO</span><br/>
              <span>17 Agustus 2020</span>
              </CCol>
            </CRow>
            </CCardBody>
            <CCardFooter>
            <CRow>
              <CCol>
              <div class="c-avatar">
              <CImg
                  src={'avatars/1.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                  />
              </div>
              <CLabel style={{textOverflow:"ellipsis"}}>Rio jandi</CLabel>
              </CCol>
              <CCol>
              <div class="c-avatar">
              <CImg
                  src={'avatars/1.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                  />
              </div>
              <CLabel style={{textOverflow:"ellipsis"}}>Dimas p.</CLabel>
              </CCol>
              <CCol>
              <div class="c-avatar">
              <CImg
                  src={'avatars/1.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                  />
              </div>
              <CLabel style={{textOverflow:"ellipsis"}}>Raditsian</CLabel>
              </CCol>
            </CRow>
            </CCardFooter>
            <CCardFooter>
              <p style={{fontWeight:"bold"}}>Note :</p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <div>
              <CImg
                src={'avatars/meeting.png'}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
            </div>
            <CRow>
              <CCol>
              <p style={{fontWeight:"bold"}}><CIcon name="cil-location-pin"/>PISANGAN TIMUR,JAKARTA</p>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
              <span style={{fontWeight:"bold",fontSize:24}}>Meeting With CEO</span><br/>
              <span>17 Agustus 2020</span>
              </CCol>
            </CRow>
            </CCardBody>
            <CCardFooter>
            <CRow>
              <CCol>
              <div class="c-avatar">
              <CImg
                  src={'avatars/1.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                  />
              </div>
              <CLabel style={{textOverflow:"ellipsis"}}>Rio jandi</CLabel>
              </CCol>
              <CCol>
              <div class="c-avatar">
              <CImg
                  src={'avatars/1.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                  />
              </div>
              <CLabel style={{textOverflow:"ellipsis"}}>Dimas p.</CLabel>
              </CCol>
              <CCol>
              <div class="c-avatar">
              <CImg
                  src={'avatars/1.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                  />
              </div>
              <CLabel style={{textOverflow:"ellipsis"}}>Raditsian</CLabel>
              </CCol>
            </CRow>
            </CCardFooter>
            <CCardFooter>
              <p style={{fontWeight:"bold"}}>Note :</p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardBody>
            <div>
              <CImg
                src={'avatars/meeting.png'}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
            </div>
            <CRow>
              <CCol>
              <p style={{fontWeight:"bold"}}><CIcon name="cil-location-pin"/>PISANGAN TIMUR,JAKARTA</p>
              </CCol>
            </CRow>
            <CRow>
              <CCol>
              <span style={{fontWeight:"bold",fontSize:24}}>Meeting With CEO</span><br/>
              <span>17 Agustus 2020</span>
              </CCol>
            </CRow>
            </CCardBody>
            <CCardFooter>
            <CRow>
              <CCol>
              <div class="c-avatar">
              <CImg
                  src={'avatars/1.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                  />
              </div>
              <CLabel style={{textOverflow:"ellipsis"}}>Rio jandi</CLabel>
              </CCol>
              <CCol>
              <div class="c-avatar">
              <CImg
                  src={'avatars/1.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                  />
              </div>
              <CLabel style={{textOverflow:"ellipsis"}}>Dimas p.</CLabel>
              </CCol>
              <CCol>
              <div class="c-avatar">
              <CImg
                  src={'avatars/1.jpg'}
                  className="c-avatar-img"
                  alt="admin@bootstrapmaster.com"
                  />
              </div>
              <CLabel style={{textOverflow:"ellipsis"}}>Raditsian</CLabel>
              </CCol>
            </CRow>
            </CCardFooter>
            <CCardFooter>
              <p style={{fontWeight:"bold"}}>Note :</p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Cards
