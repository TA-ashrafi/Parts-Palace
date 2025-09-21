'use client'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import StartupLoader from './StartupLoader'

const ThemeProvider = ({ children }) => {
    const isDark = useSelector(state => state.theme.isDark)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark])

    const handleLoadingComplete = () => {
        setIsLoading(false)
    }

    return (
        <>
            {isLoading && <StartupLoader onComplete={handleLoadingComplete} />}
            <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 ${isLoading ? 'overflow-hidden' : ''}`}>
                {!isLoading && children}
            </div>
        </>
    )
}

export default ThemeProvider