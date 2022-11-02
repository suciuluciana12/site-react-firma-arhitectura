import React from 'react'
import styled from 'styled-components'
import ImageGallery from './ImageGallery'

const SchiteWrap = styled.div`
  width: 80%;
  margin: 100px auto;
`

const Schite = ({ date_cipri }) => {
  const schite = date_cipri.find((item) => {
    return item.titlu_categorie === 'Schițe'
  })

  return (
    <div>
      <SchiteWrap>
        <ImageGallery galleryImages={schite.galleryImages} />
      </SchiteWrap>
    </div>
  )
}

export default Schite
