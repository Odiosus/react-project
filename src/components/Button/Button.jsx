import classes from "./Button.module.css";

function Button({children, isActive, ...props}) {

  /*let classesButton = 'button'
  if (isActive) {
    classesButton += " active"
  }*/

  return (
    <button
      // className={classesButton}
      {...props}
      className = {isActive
        ? `${classes.button} ${classes.active}`
        : classes.button}
    >
      {children}
    </button>
  )
}

export default Button