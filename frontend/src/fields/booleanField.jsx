export const BooleanField = ({ data, onChange }) => {
  const currVal = data?.booleanVal || false;

  const handleChange = (e) =>
    onChange('booleanVal', e.target.checked)

  return (
    <input
      style={{marginLeft: 2}}
      type="checkbox"
      checked={currVal}
      onChange={handleChange}
    />
  )
}
