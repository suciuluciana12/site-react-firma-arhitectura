import React from 'react'
import styled from 'styled-components'
import ImageGallery from './ImageGallery'

const UrbanismWrap = styled.div`
  width: 80%;
  margin: 100px auto;
`

const Urbanism = ({ date_cipri }) => {
  const urbanism = date_cipri.find((item) => {
    return item.titlu_categorie === 'Urbanism'
  })

  return (
    <div>
      <UrbanismWrap>
        <ImageGallery galleryImages={urbanism.galleryImages} />
      </UrbanismWrap>
    </div>
  )
}

export default Urbanism
