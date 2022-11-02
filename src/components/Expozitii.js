import React from 'react'
import styled from 'styled-components'
import ImageGallery from './ImageGallery'

const ExpozitiiWrap = styled.div`
  width: 80%;
  margin: 100px auto;
`

const Expozitii = ({ date_cipri }) => {
  const expozitii = date_cipri.find((item) => {
    return item.titlu_categorie === 'Expoziții'
  })

  return (
    <div>
      <ExpozitiiWrap>
        <ImageGallery galleryImages={expozitii.galleryImages} />
      </ExpozitiiWrap>
    </div>
  )
}

export default Expozitii
