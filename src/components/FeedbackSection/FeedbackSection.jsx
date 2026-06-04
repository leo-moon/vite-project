import './FeedbackSection.css';
import Button from '../Button/Button.jsx';
import { useState, useRef } from 'react';

function StateVsRef() {
  //   const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setShowInput(true);
    }
  }

  return (
    <div>
      <h3>Input value: {showInput && inputRef.current.value} </h3>
      <input
        ref={inputRef}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
        // onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default function FeedbackSection() {
  //   const [name, setName] = useState('');
  //   const [hasError, setHasError] = useState(false);
  //   const [reason, setReason] = useState('first');
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'first',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // function toggleError() { setHasError((prev) => !prev);
  //   }

  const handleChangeName = (e) => {
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
      hasError: e.target.value.trim() === '',
    }));
  };
  //   name.trim() === '' ? setHasError(true) : setHasError(false);
  console.log(
    'hasError: name.trim().length',
    form.hasError,
    form.name.trim().length > 0
  );
  return (
    <section className="feedback-section">
      <h3>Зворотній зв'язок</h3>

      {/* <Button onClick={toggleError}>
        Toggle Error
      </Button> */}

      <p>Ви можете залишити свій відгук тут.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ваше ім'я:</label>
        <input
          type="text"
          id="name"
          placeholder="Ваше ім'я"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? '1px solid red' : '1px solid #0ba4e0',
            marginBottom: '20px',
          }}
          onChange={handleChangeName}
        />
        <label htmlFor="reason">Оберіть причину звернення:</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, reason: e.target.value }))
          }
        >
          {/* <option value="choicereason">Оберіть причину</option> */}
          <option value="first"> </option>
          <option value="suggestion">Пропозиція</option>
          <option value="question">Питання</option>
          <option value="complaint">Скарга</option>
        </select>

        <Button
          disabled={form.hasError || form.name.trim().length === 0}
          isActive={form.name.trim().length > 0}
        >
          Надіслати
        </Button>
      </form>
      <hr />
      <StateVsRef />
    </section>
  );
}
