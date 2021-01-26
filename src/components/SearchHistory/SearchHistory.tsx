import React from 'react'
import { useSelector } from 'react-redux'
import { reposSelector } from 'app/reposReducer'
import './SearchHistory.scss'

const SearchHistory = () => {
  const { history } = useSelector(reposSelector)

  return (
    <section className="search-history">
      <p>Search history:</p>
      <ul className="search-history__list">
        {history.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SearchHistory
