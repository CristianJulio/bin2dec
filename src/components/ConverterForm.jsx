import React, { useState } from 'react'
import styled from 'styled-components'

const FormStyled = styled.form`
  width: 500px;
  margin: 0 auto;
  display: grid;
  place-items: center;
`

const FormTitle = styled.h2`
  text-align: center;
  font-weight: 300;
  color: #04724D;
  margin-bottom: 25px;
`

const FormP = styled.p`
  margin-bottom: 25px;
`

const FormInput = styled.input`
  all: unset;
  border: 1px solid #586F7C;
  color: #586F7C;
  padding: 10px 15px;
  width: 400px;
  border-radius: 6px;
  margin-bottom: 20px;
`

const FormButton = styled.button`
  all: unset;
  background: #04724D;
  color: #FFF;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
`

const ConverterForm = () => {
  const [value, setValue] = useState('')
  const [converted, setConverted] = useState('')

  const calculateDecimals = (binaryDigits) => {
    let result = 0
    let numToPow = 0
    const initialValue = binaryDigits.length - 1

    for (let i = initialValue; i >= 0; i--) {
      const currentDigit = Number(binaryDigits[i])
      if (currentDigit !== 0) result += Math.pow(2, numToPow)
      numToPow++
    }
    return result
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!Number(value)) return window.alert('Only numbers can be converted')
    if (value.length > 8) return window.alert('The length must be <= 8')

    setConverted(calculateDecimals(value))
  }

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormTitle>Bin2Dec</FormTitle>
      <FormP>Binary-to-decimal number converter</FormP>
      <FormInput type='number' placeholder='To convert' value={value} onChange={handleChange} autoFocus />
      <FormInput type='text' placeholder='Result' disabled value={converted} />
      <FormButton type='submit'>Convert</FormButton>
    </FormStyled>
  )
}

export default ConverterForm
