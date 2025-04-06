import logo from "/logo-name.svg"
// import './Header.css'

import { styled } from "styled-components";
import { useEffect, useState } from "react";

const HeaderComponent = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`


function Header() {

  const imageName = "Логотип университета"
  // состояние отображения времени
  const [now, setNow] = useState( new Date() )

  // ЮЭ обновления времени и очистки интервала
  useEffect( () => {
    const interval = setInterval( () => setNow( new Date() ), 1000 )

    return () => {
      clearInterval( interval )
    }
  }, [] );

  // const timeNow = new Date()

  return (
    <HeaderComponent>
      <img
        src = {logo}
        alt = {imageName}
        className = "logo-image"
        width = {100}
        height = {100}
        loading = {"lazy"}
      />
      <h3>Result university</h3>
      {/*<span>Текущая дата: {timeNow.toLocaleDateString()}</span>*/}
      <span>Текущее время: {now.toLocaleTimeString()}</span>
    </HeaderComponent>
  )
}

export default Header