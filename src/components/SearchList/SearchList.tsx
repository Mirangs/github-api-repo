import React from 'react'
import { useSelector } from 'react-redux'
import { reposSelector } from 'app/reposReducer'
import SearchItem from 'components/SearchItem/SearchItem'
import './SearchList.scss'

const SearchList: React.FC = () => {
  const { repos } = useSelector(reposSelector)

  return (
    <ul className="search-list">
      {repos.map((repo, index) => (
        <li key={index}>
          <SearchItem {...repo} />
        </li>
      ))}
    </ul>
  )
}

export default SearchList
