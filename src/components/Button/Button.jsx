import classes from './button.module.css';
// import { styles } from './Button.module.css';

export default function Button({ children, onClick, isActive }) {
  console.log('Button rendered!!!', classes);
  return (
    // <button
    //   className={`classes.button ${isActive ? ' classes.active' : ''}`}
    //   onClick={onClick}
    // >
    <button
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
