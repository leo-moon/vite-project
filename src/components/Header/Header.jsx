import { useState, useEffect } from 'react';
// import './header.css';
import dayjs from 'dayjs';
import logo from '/logo55x55.png';
import { styled } from 'styled-components';

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
        <button
          tabIndex={0}
          type="button"
          style={{
            border: 10,
            boxSizing: 'border-box',
            display: 'inline-block',
            fontFamily: 'Roboto, sans-serif',
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            cursor: 'pointer',
            textDecoration: 'none',
            margin: 0,
            padding: 12,
            outline: 'none',
            fontSize: 0,
            fontWeight: 'inherit',
            position: 'relative',
            overflow: 'visible',
            transition: '450ms cubic-bezier(0.23, 1, 0.32, 1)',
            width: 48,
            height: 48,
            background: 'none',
          }}
        >
          <div>
            <span
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
            <svg
              viewBox="0 0 24 24"
              style={{
                display: 'inline-block',
                color: 'rgba(0, 0, 0, 0.87)',
                fill: 'rgb(255, 255, 255)',
                height: 24,
                width: 24,
                userSelect: 'none',
                transition: '450ms cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </div>
        </button>
      </div>
      <a href="https://nlu.edu.ua" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="" style={logoStyle} />{' '}
      </a>
      <h3 style={{ margin: 0, marginLeft: '1rem' }}>Header</h3>
      <p style={{ marginLeft: 'auto', marginRight: '1rem' }}>User: John Doe</p>

      <span style={{ justifyContent: 'flex-end' }}>
        Time: {now.format('HH:mm:ss')}
      </span>
    </StyledHeader>
  );
}
