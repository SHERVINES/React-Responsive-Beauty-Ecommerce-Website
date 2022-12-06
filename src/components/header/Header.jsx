import React from 'react'
import css from "./Header.module.css"

function Header() {
  return (
    <div className={css.container}>
        <div className={css.logo}>Logo</div>
        <div className={css.right}>
        
          <div className={css.menu}>

          </div>
        </div>
    </div>
  )
}

export default Header