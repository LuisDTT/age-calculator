import './AgeCalcForm.css'
import iconArrow from '../assets/icon-arrow.svg'
import { type UserAge } from '../interfaces/AgeCalc'
import { useAgeCalcForm } from '../hooks/useAgeCalcForm'

interface Props {
  setUserAge: (userAge?: UserAge) => void
}

export const AgeCalcForm = (setUserAge: Props): JSX.Element => {
  const { err, handleBlur, handleChange, handleSubmit } =
    useAgeCalcForm(setUserAge)

  return (
    <form className="age-calc__form" onSubmit={handleSubmit}>
      <div className="age-calc__box">
        <label
          className={`age-calc__box-lbl ${
            err.day !== undefined ? 'title-error' : ''
          }`}
          htmlFor="inputDay"
        >
          Day
        </label>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          className={`age-calc__box-input ${
            err.day !== undefined ? 'input-error' : ''
          }`}
          type="text"
          placeholder="DD"
          id="inputDay"
          name="day"
          maxLength={2}
        />
        {err.day !== undefined ? (
          <span className="age-calc__box-txt-err">{err.day}</span>
        ) : (
          ''
        )}
      </div>
      <div className="age-calc__box">
        <label
          className={`age-calc__box-lbl ${
            err.month !== undefined ? 'title-error' : ''
          }`}
          htmlFor="inputMon"
        >
          Month
        </label>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          className={`age-calc__box-input ${
            err.month !== undefined ? 'input-error' : ''
          }`}
          type="text"
          placeholder="MM"
          id="inputMon"
          name="month"
          maxLength={2}
        />
        {err.month !== undefined ? (
          <span className="age-calc__box-txt-err">{err.month}</span>
        ) : (
          ''
        )}
      </div>
      <div className="age-calc__box">
        <label
          className={`age-calc__box-lbl ${
            err.year !== undefined ? 'title-error' : ''
          }`}
          htmlFor="inputYear"
        >
          Year
        </label>
        <input
          onBlur={handleBlur}
          onChange={handleChange}
          className={`age-calc__box-input ${
            err.year !== undefined ? 'input-error' : ''
          }`}
          type="text"
          placeholder="YYYY"
          id="inputYear"
          name="year"
          maxLength={4}
        />
        {err.year !== undefined ? (
          <span className="age-calc__box-txt-err">{err.year}</span>
        ) : (
          ''
        )}
      </div>
      <div className="age-calc__btn-box">
        <button className="age-calc__btn">
          <img
            src={iconArrow}
            alt="Icon Arrow"
            className="age-calc__btn-icon"
          />
        </button>
      </div>
    </form>
  )
}
