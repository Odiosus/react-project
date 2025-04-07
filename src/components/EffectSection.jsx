import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import { useCallback, useEffect, useState } from "react";
import useInput from "../hooks/useInput.js";

export default function EffectSection() {

  // устанавливаем кастомный хук
  const input = useInput()
  // состояние модального окна по умолчанию — скрыто (false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  // состояние загрузки, по умолчанию false
  const [loading, setLoading] = useState(false)
  // состояние получения списка юзеров (пустой массив)
  const [users, setUsers] = useState([])


  // переменная колбэк с запросом получения списка юзеров
  const fetchUsers = useCallback(async() => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }, []);

  // запрашиваем и обновляем переменную со списком юзеров
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers]);

  /*// (перенсено в onClick) изменение состояния модального окна — отображено (true)
  function openModal() {
    setIsModalOpen( true )
  }*/

  return (
    <section>
      <h3>Effect</h3>

      <Button onClick = {() => {
        setIsModalOpen(true)
      }}
        style = {{marginBottom:'1rem'}}
      >
        Открыть информацию
      </Button>

      <Modal open = {isModalOpen}>
        <h3>Hello from modal!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet at cupiditate deserunt enim harum
          impedit ipsum iusto labore laboriosam magnam necessitatibus nemo, nesciunt nulla numquam quasi recusandae
          repellendus, repudiandae!
        </p>
        <Button
          onClick = {() => setIsModalOpen(false)}>
          Close modal
        </Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input
            type = "text"
            className = 'control'
            // разворачиваем кастомный инпут-хук
            {...input}
          />
          <h6>{input.value}</h6>
          <ul>
            {/*добавляем фильтрацию*/}
            {users.filter(
              user => user.name.toLowerCase().includes(
                input.value.toLowerCase())).map((user) => (
                  // отображаем всех, если неотфильтровано через фильтр
                  <li key = {user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

