import React from 'react'
import useTheme from '../context/theme';

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme()

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
    if (darkModeStatus) {
      darkTheme()
    } else {
      lightTheme()
    }
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full after:transition-transform peer-checked:after:translate-x-full"></div>
      <span className="ml-3 text-sm font-medium text-[var(--color-text)]">Toggle Theme</span>
    </label>
  );
}
