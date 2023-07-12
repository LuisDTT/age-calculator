import './AgeCalculator.css'
import { AgeCalcForm } from './AgeCalcForm'
import { useState } from 'react'
import { type UserAge } from '../interfaces/AgeCalc'

const INITIAL_STATE = {
  days: '--',
  years: '--',
  months: '--'
}

export const AgeCalculator = (): JSX.Element => {
  const [age, setAge] = useState<UserAge>(INITIAL_STATE)

  const setUserAge = (userAge: UserAge = INITIAL_STATE): void => {
    setAge(userAge)
  }

  return (
    <div className="age-calc-container">
      <AgeCalcForm setUserAge={setUserAge} />
      <div className="show-age-calc">
        <div className="show-age-calc__info">
          <p className="show-age-calc__info-txt">
            <span className="show-age-calc__info-txt--accent">{age.years}</span>
            years
          </p>
          <p className="show-age-calc__info-txt">
            <span className="show-age-calc__info-txt--accent">
              {age.months}
            </span>
            months
          </p>
          <p className="show-age-calc__info-txt">
            <span className="show-age-calc__info-txt--accent">{age.days}</span>
            days
          </p>
        </div>
      </div>
    </div>
  )
}
