import './FeedbackSection.css';
import Button from '../Button/Button.jsx';
import { useState } from 'react';

export default function FeedbackSection() {
  const [name, setName] = useState('');
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState('question');

  console.log(' hasError: ', hasError);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    setHasError(e.target.value.trim() === '');
  };

  return (
    <section className="feedback-section">
      <h3>Зворотній зв'язок</h3>
      <p>Ви можете залишити свій відгук тут.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ваше ім'я:</label>
        <input
          type="text"
          id="name"
          placeholder="Ваше ім'я"
          className="control"
          value={name}
          style={{
            border: hasError ? '1px solid red' : '1px solid #0ba4e0',
            marginBottom: '20px',
          }}
          onChange={handleChangeName}
        />
        <label htmlFor="reason">Оберіть причину звернення:</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        >
          {/* <option value="choicereason">Оберіть причину</option> */}
          <option value="suggestion">Пропозиція</option>
          <option value="question">Питання</option>
          <option value="complaint">Скарга</option>
        </select>
        <Button disabled={hasError}>Надіслати</Button>
      </form>
    </section>
  );
}
