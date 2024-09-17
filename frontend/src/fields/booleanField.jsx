export const BooleanField = ({ data, onChange, field }) => {
  const currVal = (data || {})[field] || false;

  const handleChange = (e) =>
    onChange(field, e.target.checked)

  return (
    <input
      style={{marginLeft: 2}}
      type="checkbox"
      checked={currVal}
      onChange={handleChange}
    />
  )
}
