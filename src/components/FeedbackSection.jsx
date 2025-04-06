import Button from "./Button/Button.jsx";

export default function FeedbackSection() {


  return (
    <section>
      <h3 className = "h1">Feedback</h3>

      <form action = "">
        <label htmlFor = "name">Ваше имя</label>
        <input
          type = "text"
          className = "control"
          id = "name"
        />

        <label htmlFor = "reason">Причина образения</label>
        <select
          id = "reason"
          className = "control"
        >
          <option value = "error">Ошибка</option>
          <option value = "help">Нужна помощь</option>
          <option value = "sugest">Предложение</option>
        </select>

        <Button/>
      </form>
    </section>
  )
}