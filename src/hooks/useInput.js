import { useState } from "react";

// кастомный хук для инпута с value и onChange. По умолчанию defaultValue=''
export default function useInput(defaultValue='') {
  const [value, setValue] = useState(defaultValue)

  return {
    value,
    onChange: (event) => setValue(event.target.value)
  }

}