import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'
import { AppThunk, RootState } from './store'

export interface Repo {
  name: string
  language: string
  description: string
}

export type Repos = Repo[]

interface InitialState {
  repos: Repos
  isLoading: boolean
  error: string
  search: string
  history: string[]
}

const initialState: InitialState = {
  repos: [],
  isLoading: false,
  error: '',
  search: '',
  history: [],
}

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setRepos: (state: InitialState, action: PayloadAction<Repos>) => {
      state.repos = action.payload
    },
    setLoading: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state: InitialState, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    setSearch: (state: InitialState, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setHistory: (state: InitialState, action: PayloadAction<string[]>) => {
      state.history = action.payload
    },
    addHistoryItem: (state: InitialState, action: PayloadAction<string>) => {
      state.history =
        state.history.length < 5
          ? [...state.history, action.payload]
          : [...state.history.slice(-4), action.payload]
    },
  },
})

export const {
  setRepos,
  setLoading,
  setError,
  setSearch,
  setHistory,
  addHistoryItem,
} = reposSlice.actions

export const fetchRepos = (searchUser: string): AppThunk => async (
  dispatch
) => {
  const BASE_URL = 'https://api.github.com'
  dispatch(setLoading(true))
  dispatch(setSearch(searchUser))
  try {
    const res = await fetch(`${BASE_URL}/users/${searchUser}/repos`)
    const json = await res.json()
    const reposMapped = json.map(({ name, description, language }: Repo) => ({
      name,
      description,
      language,
    }))
    dispatch(setRepos(reposMapped))
    dispatch(addHistoryItem(searchUser))
  } catch (err) {
    dispatch(setError(err))
  } finally {
    dispatch(setLoading(false))
  }
}

export const reposSelector = (state: RootState) => state.repos
