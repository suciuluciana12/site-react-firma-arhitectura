import React, { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Views from './components/Views'
import date_cipri from './dateCipri.json'

function App() {
  const [casele, setCasele] = useState([])
  const [blocuri, setBlocuri] = useState([])
  const [industrial, setIndustrial] = useState([])
  const [turism, setTurism] = useState([])
  const [birouri, setBirouri] = useState([])
  const [biserici, setBiserici] = useState([])
  const [publice, setPublice] = useState([])
  const [amenajari, setAmenajari] = useState([])
  const [concursuri, setConcursuri] = useState([])

  useEffect(() => {
    if (date_cipri.length == 0) return //ma scoate din functie
    // console.log(date_cipri)
    setCasele(
      date_cipri.filter((item) => {
        return item.titlu_categorie === 'Case'
      }),
    )
    setBlocuri(
      date_cipri.filter((item) => {
        return item.titlu_categorie === 'Blocuri'
      }),
    )
    setIndustrial(
      date_cipri.filter((item) => {
        return item.titlu_categorie === 'Industrial'
      }),
    )
    setTurism(
      date_cipri.filter((item) => {
        return item.titlu_categorie === 'Turism'
      }),
    )
    setBirouri(
      date_cipri.filter((item) => {
        return item.titlu_categorie === 'Birouri'
      }),
    )

    setBiserici(
      date_cipri.filter((item) => {
        return item.titlu_categorie === 'Biserici'
      }),
    )
    setPublice(
      date_cipri.filter((item) => {
        return item.titlu_categorie === 'Publice'
      }),
    )
    setAmenajari(
      date_cipri.filter((item) => {
        return item.titlu_categorie === 'Amenajări'
      }),
    )

    setConcursuri(
      date_cipri.filter((item) => {
        return item.titlu_categorie === 'Concursuri'
      }),
    )
  }, [date_cipri])

  return (
    <div className="page-container">
      {date_cipri && (
        <div className="content-wrap">
          <Header />
          <Views
            casele={casele}
            blocuri={blocuri}
            date_cipri={date_cipri}
            industrial={industrial}
            turism={turism}
            birouri={birouri}
            publice={publice}
            biserici={biserici}
            amenajari={amenajari}
            concursuri={concursuri}
          />
        </div>
      )}
      <Footer />
    </div>
  )
}

export default App
