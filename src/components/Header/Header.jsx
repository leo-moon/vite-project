import { useState, useEffect } from 'react';
// import './header.css';
import dayjs from 'dayjs';
import logo from '/logo55x55.png';
import { styled } from 'styled-components';
import MenuButton from '../MenuButton/MenuButton';

const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  //   justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  /* background-color: #0582ca; */

  background-color: initial;
  background-image: linear-gradient(
    -225deg,
    rgb(0, 116, 116) 0%,
    rgb(0, 48, 104) 51%,
    rgb(0, 116, 116) 100% 100%
  );

  color: rgb(1, 245, 240);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const logoStyle = {
  width: '45px',
  height: '45px',
};

export default function Header() {
  const [now, setNow] = useState(dayjs());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <StyledHeader>
      <div style={{ marginTop: 8, marginRight: 8, marginLeft: '-16px' }}>
        <MenuButton />
      </div>
      <a href="https://nlu.edu.ua" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="" style={logoStyle} />
      </a>
      <h3 style={{ margin: 0, marginLeft: '1rem' }}>Header</h3>
      <p style={{ marginLeft: 'auto', marginRight: '1rem' }}>User: John Doe</p>

      <span style={{ justifyContent: 'flex-end' }}>
        Time: {now.format('HH:mm:ss')}
      </span>
    </StyledHeader>
  );
}
