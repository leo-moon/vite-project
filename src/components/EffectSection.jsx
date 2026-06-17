import { useState, useEffect, useCallback } from 'react';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import useInput from './hooks/useInput';

export default function EffectSection() {
  const input = useInput('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  //   function openModal() {
  //     // alert('Відкрито ефекти! Модально вікно відкриється з ефектами.');
  //     setIsModalOpen(true);
  //   }

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section className="effect-section">
      <h3>Ефекти</h3>

      <Button style={{ margin: '10px' }} onClick={() => setIsModalOpen(true)}>
        Відкрити ефекти
      </Button>

      {isModalOpen && (
        <Modal open={isModalOpen}>
          <h4 style={{ textAlign: 'center' }}>Hello from Modal</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button onClick={() => setIsModalOpen(false)}>Закрити</Button>
        </Modal>
      )}
      {loading && <p>Завантаження...</p>}
      {!loading && (
        <>
          <input
            type="text"
            placeholder="Пошук користувачів"
            className="control"
            {...input}
          />
          {/* <h6>{input.value}</h6> */}
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
