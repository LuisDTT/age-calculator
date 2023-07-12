import { type UserAge, type UserDate } from '../interfaces/AgeCalc'

export const calcAge = (userDate: UserDate): UserAge => {
  const currentDateMs = new Date().getTime()
  const dateRefMs = new Date(
    `${userDate.year}-${userDate.month}-${userDate.day}`
  ).getTime()

  const difTimeMs = currentDateMs - dateRefMs

  const fullDays = Math.floor(difTimeMs / (1000 * 60 * 60 * 24))
  const years = Math.floor(fullDays / 365)
  const months = Math.floor((fullDays % 365) / (365 / 12))
  const days = Math.floor(fullDays - years * 365 - months * (365 / 12))

  return {
    years,
    months,
    days
  }
}
