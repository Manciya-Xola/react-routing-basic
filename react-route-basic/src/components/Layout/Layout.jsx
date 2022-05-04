import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header'

import { PrimaryButton } from '../Button/Button.style'

function Layout({children}) {
  return (
    <div>
      <Header/>
        <PrimaryButton secondary={true}/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout