import './Modal.css'

// секция модального окна (по умолчанию скрыто)
export default function Modal( {children, open} ) {
  return <dialog open = {open}>
    {children}
  </dialog>
}