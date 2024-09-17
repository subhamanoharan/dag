export const SelectTypeInputField = ({data, field, onChange}) => {
  const inputType = (data || {})[field] || 'Text';

  const handleTypeChange = (e) =>
    onChange(field, e.target.value)

  return (
    <select style={{marginLeft: 2}} value={inputType} onChange={handleTypeChange}>
      <option value="Text">Text</option>
      <option value="File">File</option>
    </select>
  )
}
