export const TextInputField = ({data, onChange, field}) => {
  const currName = data[field] || '';

  const handleNameChange = (e) =>
    onChange(field, e.target.value)

  return (
    <input
      type="text"
      value={currName}
      onChange={handleNameChange}
    />
  )
}
