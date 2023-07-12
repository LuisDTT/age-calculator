import { type DateErrors, type UserDate } from '../../interfaces/AgeCalc'

export const validateDate = (values: UserDate): DateErrors => {
  const err: { day?: string; month?: string; year?: string } = {}

  // const {day, month, year} = values
  const dayAsNumber = parseInt(values.day)
  const monthAsNumber = parseInt(values.month)
  const yearAsNumber = parseInt(values.year)

  const monthDays = new Date(yearAsNumber, monthAsNumber, 0).getDate()
  const date = new Date()
  const currentYear = date.getFullYear()
  const currentDay = date.getDate()
  const currentMonth = date.getMonth() + 1

  if (values.day.length === 0) {
    err.day = 'This field is required'
  } else if (
    isNaN(dayAsNumber) ||
    dayAsNumber <= 0 ||
    dayAsNumber > monthDays ||
    dayAsNumber > 31
  ) {
    err.day = 'Must be a valid day'
  }
  if (values.month.length === 0) {
    err.month = 'This field is required'
  } else if (isNaN(monthAsNumber) || monthAsNumber < 1 || monthAsNumber > 12) {
    err.month = 'Must be a valid month'
  }
  if (values.year.length === 0) {
    err.year = 'This field is required'
  } else if (
    isNaN(yearAsNumber) ||
    yearAsNumber < 1000 ||
    yearAsNumber > currentYear
  ) {
    err.year = 'Must be a valid year'
  } else if (yearAsNumber === currentYear) {
    if (monthAsNumber > currentMonth) {
      err.month = 'Must be a valid month'
    } else if (dayAsNumber >= currentDay) {
      err.day = 'Must be a valid day'
    }
  }
  return err
}
