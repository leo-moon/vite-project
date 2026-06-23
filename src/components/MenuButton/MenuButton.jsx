import './menubutton.css';

export default function MenuButton() {
  return (
    <button tabIndex={0} type="button" className="menu-button">
      <div>
        <span className="menu-button__ripple" />
        <svg viewBox="0 0 24 24" className="menu-button__icon">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18v-2H3z" />
        </svg>
      </div>
    </button>
  );
}
