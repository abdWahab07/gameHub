import React from 'react'
import Catalogue from '../navbar/catalogue'

const FooterCatalogue = () => {
  return (
    <>
    <h6 className="text-white fw-bold text-uppercase mb-3">catalogue</h6>
    {Catalogue.map((cat) => (
      <p >
        <a className="text-decoration-none text-danger" href={`www.${cat.link}.com`}>{cat.link}</a>
      </p>
    ))}
  </>
  )
}

export default FooterCatalogue
