import { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext";

export const Search = () => {
  const [value, setValue] = useState('')
  const {show} = useContext(AlertContext);

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }
    if (value.trim()) {
      console.log('Make request ', value)
    } else {
      show('Enter user data')
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        value={value}
        className="form-control"
        placeholder="Enter user nickname"
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}