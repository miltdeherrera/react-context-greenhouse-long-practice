import './LightSwitch.css';
import { useContext } from 'react';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();
  let classString

  return (
    <div className={['light-switch', themeName].join(' ')}>
      <div className="on"
        onClick={() => {
          setThemeName('day');
        }}>DAY</div>
      <div className="off"
        onClick={() => {
          setThemeName('night');
        }}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;