import './button.css';

export default function Button({ children, onClick, isActive }) {
  return (
    <button className={`button ${isActive ? 'active' : ''}`} onClick={onClick}>
      {/* <button className={isActive ? 'button active' : 'button'}`} onClick={onClick}> */}
      {children}
    </button>
  );
}
