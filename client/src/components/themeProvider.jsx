import React from 'react'
import { useSelector } from 'react-redux'

const ThemeProvider = ({children}) => {
    const {theme} = useSelector(state => state.theme)
  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <div className='bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen'>
        {children}
      </div>
    </div>
  )
}

export default ThemeProvider