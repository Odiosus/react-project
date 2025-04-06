import Button from "./Button/Button.jsx";
import { useRef, useState } from "react";

// компонент с инпутом ввода текста по нажатию Enter
function StateVsRef() {

  // состояние юз.реф на инпут
  const input = useRef()
  const [show, setShow] = useState(false)

  // устанавливаем смену состояния после нажатия Энтер
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setShow(true)
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref = {input}
        type = "text"
        className = 'control'
        onKeyDown = {handleKeyDown}
      />
    </div>
  )
}

// компонент фидбэка
export default function FeedbackSection() {

  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  })

  /*const [name, setName] = useState('')
  const [hasError, setHasError] = useState(true)
  const [reason, setReason] = useState('help')*/

  function handleNameChange(event) {
    /*setName(event.target.value)
    setHasError(event.target.value.trim().length === 0)*/
    setForm(prev => ({
      ...prev,
      name: event.target.value,
      HasError: event.target.value.trim().length === 0,
    }))
  }

  /*function toggleError() {
    setHasError((prev) => !prev)
  }*/

  return (
    <section>
      <h3 className = "h1">Feedback</h3>

      {/*<Button onClick = {toggleError}>Toggle Error</Button>*/}

      <form
        action = ""
        style = {{marginBottom: '1rem'}}
      >
        <label htmlFor = "name">Ваше имя</label>
        <input
          type = "text"
          className = "control"
          id = "name"
          value = {form.name}
          onChange = {handleNameChange}
          placeholder = {"Введите ваше имя..."}
          style = {{
            border: form.hasError
              ? '1px solid red'
              : null
          }}
        />

        <label htmlFor = "reason">Причина образения</label>
        <select
          id = "reason"
          className = "control"
          value = {form.reason}
          onChange = {event => setForm(prev => ({
            ...prev,
            reason: event.target.value,
          }))}
        >
          <option value = "error">Ошибка</option>
          <option value = "help">Нужна помощь</option>
          <option value = "sugest">Предложение</option>
        </select>

        {/*<pre>
          // Name: {form.name}
          // <br/>
          // Reason: {form.reason}
          {JSON.stringify(form, null, 2)}
        </pre>*/}

        <Button
          disabled = {form.hasError}
          isActive = {!form.hasError}
        >
          Отправить
        </Button>
      </form>

      <StateVsRef/>
    </section>
  )
}