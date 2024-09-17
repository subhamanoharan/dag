export const NumberField = ({data, onChange, field}) => {
  const currNo = data[field];

  const handleNumberChange = (e) =>
    onChange(field, e.target.value)

  return (
    <input
      type="number"
      value={currNo}
      onChange={handleNumberChange}
    />
  )
}
