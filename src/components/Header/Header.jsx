import logo from "/logo-name.svg"
// import './Header.css'

import { styled } from "styled-components";

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
  const timeNow = new Date()

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
      <span>Текущее время: {timeNow.toLocaleTimeString()}</span>
    </HeaderComponent>
  )
}

export default Header