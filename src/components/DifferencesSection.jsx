import Button from "./Button/Button.jsx";

import { differences } from "../data.js";
import { useState } from "react";

function DifferencesSection() {

  const [contentType, setContentType] = useState(null)

  /*После нажатия меняет выводимое содержимое на страницу.
  * В аргументы передаётся "type" из data.js*/
  function HandleClick(type) {
    setContentType(type)
  }

  /*let tabContent = null
  if (contentType) {
    tabContent = <p>{differences[contentType]}</p>
  } else {
    tabContent = <p>Нажми на кнопку</p>
  }*/


  return (
    <section>
      <h3>Чем мы отличеамся от других?</h3>

      {/*вариант № 1
          {contentType
            ? <p>{differences[contentType]}</p>
            : <p>Нажми на кнопку</p>}*/}

      {/*вариант № 2
          {!contentType
            ? <p>Нажми на кнопку</p>
            : null}
          {contentType
            ? <p>{differences[contentType]}</p>
            : null}*/}

      {/*вариант № 3*/}
      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}

      {/*вариант № 2
          {tabContent}*/}

      <Button
        isActive = {contentType === 'way'}
        onClick = {() => HandleClick('way')}
      >
        Подход
      </Button>
      <Button
        isActive = {contentType === 'easy'}
        onClick = {() => HandleClick('easy')}
      >
        Доступность
      </Button>
      <Button
        isActive = {contentType === 'program'}
        onClick = {() => HandleClick('program')}
      >
        Концентрация
      </Button>

    </section>
  )
}

export default DifferencesSection