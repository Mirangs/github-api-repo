import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchHistory from 'components/SearchHistory/SearchHistory'
import { fetchRepos, reposSelector, setSearch } from 'app/reposReducer'
import useDebounce from 'hooks/useDebounce'
import './Sidebar.scss'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { search } = useSelector(reposSelector)
  const debouncedSearch = useDebounce(search, 1000)

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(fetchRepos(debouncedSearch))
    }
  }, [debouncedSearch, dispatch])

  const onInputChange = (value: string) => {
    dispatch(setSearch(value))
  }

  return (
    <aside className="page-sidebar">
      <input
        type="text"
        id="search"
        name="search"
        className="search-input"
        onChange={({ target: { value } }) => onInputChange(value)}
      />

      <SearchHistory />
    </aside>
  )
}

export default Sidebar
