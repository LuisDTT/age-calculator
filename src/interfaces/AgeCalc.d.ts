export interface UserDate {
  day: string
  month: string
  year: string
}

export interface DateErrors {
  day?: string
  month?: string
  year?: string
}

export interface UserAge {
  years: number | string
  months: number | string
  days: number | string
}

export interface UseAgeCalcForm {
  Param: {
    setUserAge: (userAge?: UserAge) => void
  }
  Return: {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    err: DateErrors
  }
}
