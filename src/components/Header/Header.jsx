import { useState, useEffect } from 'react';
// import './header.css';
import dayjs from 'dayjs';
import logo from '/logo55x55.png';
import { styled } from 'styled-components';

const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
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
      <img src={logo} alt="" style={logoStyle} />
      <h3>Header</h3>

      <span>Time: {now.format('HH:mm:ss')}</span>
    </StyledHeader>
  );
}
