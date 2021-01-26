import React from 'react'
import { Repo } from 'app/reposReducer'
import './SearchItem.scss'

const SearchItem: React.FC<Repo> = ({ name, description, language }) => (
  <section className="search-item">
    <h4 className="search-item__title">{name || '-'}</h4>
    <p>
      Language: <b>{language || '-'}</b>
    </p>
    <p>
      Description: <b>{description || '-'}</b>
    </p>
  </section>
)

export default SearchItem
