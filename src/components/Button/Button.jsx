import classes from "./Button.module.css";

function Button({children, onClick, isActive}) {

  /*let classesButton = 'button'
  if (isActive) {
    classesButton += " active"
  }*/

  return (
    <button
      // className={classesButton}
      className = {isActive
        ? `${classes.button} ${classes.active}`
        : classes.button}
      onClick = {onClick}
    >
      {children}
    </button>
  )
}

export default Button