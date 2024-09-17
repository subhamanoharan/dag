export const TextInputField = ({data, onChange, id, field}) => {
  const currName = data[field] || '';

  const handleNameChange = (e) =>
    onChange(field, e.target.value)
  console.log(currName)
  return (
    <input
      type="text"
      value={currName}
      onChange={handleNameChange}
    />
  )
}
