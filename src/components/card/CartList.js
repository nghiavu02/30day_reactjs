import React from 'react'
import styled from 'styled-components'

const StyleCardList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 100px 30px;
    padding: 0 30px;
`
const CartList = (props) => {
  return (
    <StyleCardList>
      {props.children}
    </StyleCardList>
  )
}

export default CartList
