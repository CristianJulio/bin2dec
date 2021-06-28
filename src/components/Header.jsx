import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
  padding: 25px 0;
`

const Header = () => {
  return (
    <HeaderStyled>
      <div className='wrapper'>
        <h1>Bin2Dec</h1>
      </div>
    </HeaderStyled>
  )
}

export default Header
