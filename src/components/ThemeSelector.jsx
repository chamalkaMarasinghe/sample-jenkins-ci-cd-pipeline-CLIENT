import { FaChevronDown } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeSelector = () => {
  const { theme, changeTheme, themes } = useTheme();

  const themeOptions = [
    { value: themes.light, name: 'Light' },
    { value: themes.dark, name: 'Dark' }
  ];

  return (
    <div className="relative group">
      <select
        value={theme}
        onChange={(e) => changeTheme(e.target.value)}
        className="px-3 py-2 pr-8 transition-all duration-200 border rounded-lg appearance-none bg-surface text-text border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary-light text-content"
        title="Change Theme"
      >
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <FaChevronDown className="w-4 h-4 transition-colors text-text-secondary group-hover:text-primary" />
      </div>
    </div>
  );
};

export default ThemeSelector;