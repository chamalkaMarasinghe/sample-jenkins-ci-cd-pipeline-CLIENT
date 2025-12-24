import { useTheme } from "../../context/ThemeContext"
import { ReactComponent as LightModeIcon } from "../../assets/icons/light-toggle.svg"
import { ReactComponent as DarkModeIcon } from "../../assets/icons/dark-toggle.svg"

const ThemeToggleButton = () => {
  const { theme, changeTheme, themes } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light
    changeTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className={`mx-8 relative w-16 h-8 rounded-[20px] p-1 transition-all duration-300 focus:outline-none ${
        theme === themes.light 
          ? "bg-[#B0B0B0]" // Light mode: #B0B0B0 (light gray)
          : "bg-[#6B6B6B]" // Dark mode: #6B6B6B (darker gray)
      }`}
    >
      {/* Inner container - 56x24px */}
      <div className="relative h-6 w-14">
        {/* Active circle - moves based on theme */}
        <div
          className={`absolute top-0 w-6 h-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
            theme === themes.light ? "left-0" : "left-8"
          }`}
        />
        
        {/* Light mode icon - always at left position */}
        <div className="absolute top-0 left-0 flex items-center justify-center w-6 h-6">
          <LightModeIcon
            className={`transition-colors duration-300 ${
              theme === themes.light 
                ? "text-[#5C5381]" // Active: dark purple #5C5381
                : "text-white" // Inactive: white
            }`}
            // style={{ 
            //   width: "16.25px", 
            //   height: "16.25px"
            // }}
          />
        </div>

        {/* Dark mode icon - always at right position */}
        <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6">
          <DarkModeIcon
            className={`transition-colors duration-300 ${
              theme === themes.dark 
                ? "text-black" // Active: black
                : "text-white" // Inactive: white
            }`}
            // style={{ 
            //   width: "13.68px", 
            //   height: "15px"
            // }}
          />
        </div>
      </div>
    </button>
  )
}

export default ThemeToggleButton