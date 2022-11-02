import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Componenta from './Componenta'
import DetaliiCard from './DetaliiCard'
import Certificari from './Certificari'
import Urbanism from './Urbanism'
import Expozitii from './Expozitii'
import Schite from './Schite'

const Views = ({
  casele,
  blocuri,
  date_cipri,
  industrial,
  turism,
  birouri,
  publice,
  biserici,
  amenajari,
  concursuri,
}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/case"
          element={<Componenta categorie={casele} titlu_categorie={'Case'} />}
        />

        <Route
          path="/case/:path"
          element={<DetaliiCard date_cipri={date_cipri} />}
        />
        <Route
          path="/blocuri"
          element={
            <Componenta categorie={blocuri} titlu_categorie={'Blocuri'} />
          }
        />

        <Route
          path="/blocuri/:path"
          element={<DetaliiCard date_cipri={date_cipri} />}
        />

        <Route
          path="/industrial"
          element={
            <Componenta categorie={industrial} titlu_categorie={'Industrial'} />
          }
        />
        <Route
          path="/industrial/:path"
          element={<DetaliiCard date_cipri={date_cipri} />}
        />
        <Route
          path="/turism"
          element={<Componenta categorie={turism} titlu_categorie={'Turism'} />}
        />
        <Route
          path="/turism/:path"
          element={<DetaliiCard date_cipri={date_cipri} />}
        />
        <Route
          path="/birouri"
          element={
            <Componenta categorie={birouri} titlu_categorie={'Birouri'} />
          }
        />
        <Route
          path="/birouri/:path"
          element={<DetaliiCard date_cipri={date_cipri} />}
        />
        <Route
          path="/biserici"
          element={
            <Componenta categorie={biserici} titlu_categorie={'Biserici'} />
          }
        />
        <Route
          path="/biserici/:path"
          element={<DetaliiCard date_cipri={date_cipri} />}
        />
        <Route
          path="/publice"
          element={
            <Componenta categorie={publice} titlu_categorie={'Publice'} />
          }
        />
        <Route
          path="/publice/:path"
          element={<DetaliiCard date_cipri={date_cipri} />}
        />
        <Route
          path="/urbanism"
          element={<Urbanism date_cipri={date_cipri} />}
        />
        <Route
          path="/amenajari"
          element={
            <Componenta categorie={amenajari} titlu_categorie={'Amenajări'} />
          }
        />
        <Route
          path="/amenajari/:path"
          element={<DetaliiCard date_cipri={date_cipri} />}
        />
        <Route
          path="/expozitii"
          element={<Expozitii date_cipri={date_cipri} />}
        />
        <Route path="/schite" element={<Schite date_cipri={date_cipri} />} />
        <Route
          path="/concursuri"
          element={
            <Componenta categorie={concursuri} titlu_categorie={'Concursuri'} />
          }
        />
        <Route
          path="/concursuri/:path"
          element={<DetaliiCard date_cipri={date_cipri} />}
        />
        <Route
          path="/certificari"
          element={<Certificari date_cipri={date_cipri} />}
        />
      </Routes>
    </div>
  )
}

export default Views
