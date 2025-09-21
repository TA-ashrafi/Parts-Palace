'use client'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/lib/features/theme/themeSlice'

const ThemeToggle = () => {
    const dispatch = useDispatch()
    const isDark = useSelector(state => state.theme.isDark)

    const handleToggle = () => {
        dispatch(toggleTheme())
    }

    return (
        <button
            onClick={handleToggle}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <SunIcon size={18} className="text-yellow-500" />
            ) : (
                <MoonIcon size={18} className="text-gray-600 dark:text-gray-300" />
            )}
        </button>
    )
}

export default ThemeToggle