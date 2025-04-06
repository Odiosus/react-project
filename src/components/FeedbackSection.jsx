import Button from "./Button/Button.jsx";
import { useState } from "react";

export default function FeedbackSection() {

  const [name, setName] = useState('')
  const [hasError, setHasError] = useState(true)
  const [reason, setReason] = useState('help')

  function handleNameChange(event) {
    setName(event.target.value)
    setHasError(event.target.value.trim().length === 0)
  }

  function toggleError() {
    setHasError((prev) => !prev)
  }

  return (
    <section>
      <h3 className = "h1">Feedback</h3>

      <Button onClick = {toggleError}>Toggle Error</Button>

      <form action = "">
        <label htmlFor = "name">Ваше имя</label>
        <input
          type = "text"
          className = "control"
          id = "name"
          value = {name}
          onChange = {handleNameChange}
          placeholder = {"Введите ваше имя..."}
          style = {{
            border: hasError
              ? '1px solid red'
              : null
          }}
        />

        <label htmlFor = "reason">Причина образения</label>
        <select
          id = "reason"
          className = "control"
          value = {reason}
          onChange = {event => setReason(event.target.value)}
        >
          <option value = "error">Ошибка</option>
          <option value = "help">Нужна помощь</option>
          <option value = "sugest">Предложение</option>
        </select>

        <pre>
          Name: {name}
          <br/>
          Reason: {reason}
        </pre>

        <Button
          disabled = {hasError}
          isActive = {!hasError}
        >
          Отправить
        </Button>
      </form>
    </section>
  )
}