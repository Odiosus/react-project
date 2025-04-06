import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import { useState } from "react";

export default function EffectSection() {

  // состояние модального окна по умолчанию — скрыто (false)
  const [isModalOpen, setIsModalOpen] = useState( false )

  // изменение состояния модального окна — отображено (true)
  function openModal() {
    setIsModalOpen( true )
  }

  return (
    <section>
      <h3>Effect</h3>

      <Button onClick = {openModal}>
        Открыть информацию
      </Button>

      <Modal open = {isModalOpen}>
        <h3>Hello from modal!</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet at cupiditate deserunt enim harum
          impedit ipsum iusto labore laboriosam magnam necessitatibus nemo, nesciunt nulla numquam quasi recusandae
          repellendus, repudiandae!
        </p>
        <Button onClick = {() => setIsModalOpen( false )}>
          Close modal
        </Button>
      </Modal>
    </section>
  )
}

