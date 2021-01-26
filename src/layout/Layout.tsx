import React from 'react'
import Header from 'components/Header/Header'
import Sidebar from 'components/Sidebar/Sidebar'
import './Layout.scss'

const Layout: React.FC = ({ children }) => (
  <main className="main-page">
    <Header />
    <Sidebar />
    {children}
  </main>
)

export default Layout
