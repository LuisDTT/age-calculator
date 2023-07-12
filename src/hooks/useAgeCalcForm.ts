import { useState } from 'react'
import {
  type UseAgeCalcForm,
  type DateErrors,
  type UserDate
} from '../interfaces/AgeCalc'
import { calcAge } from '../utilities/calcAge'
import { validateDate } from '../utilities/validations/validateDate'

const INITIAL_STATE = {
  Date: {
    day: '',
    month: '',
    year: ''
  },
  Err: {}
}

export const useAgeCalcForm = ({
  setUserAge
}: UseAgeCalcForm['Param']): UseAgeCalcForm['Return'] => {
  const [date, setDate] = useState<UserDate>(INITIAL_STATE.Date)
  const [err, setErr] = useState<DateErrors>(INITIAL_STATE.Err)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target
    setDate({ ...date, [name]: value })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    setErr(validateDate(date))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setErr(validateDate(date))
    if (Object.keys(err).length === 0) {
      setUserAge(calcAge(date))
    } else {
      setUserAge()
    }
  }

  return {
    handleSubmit,
    handleBlur,
    handleChange,
    err
  }
}
