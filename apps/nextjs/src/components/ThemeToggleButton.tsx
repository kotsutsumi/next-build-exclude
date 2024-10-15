/**
 * ThemeToggleButton Component
 */
'use client'
import { useTheme } from 'next-themes'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

import { Button } from './ui/button'

export default function ThemeToggleButton() {
    const { theme, setTheme } = useTheme()

    return (
        <div>
            <Button
                variant="ghost"
                onClick={() => {
                    if (theme === 'light') {
                        setTheme('dark')
                    } else {
                        setTheme('light')
                    }
                }}
            >
                {theme !== 'light' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </Button>
        </div>
    )
}

// EOF
