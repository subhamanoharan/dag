import { useRef } from 'react';

export const DynamicTextInputField = ({data, field, onChange, onHandlesUpdate}) => {
  const textRef = useRef();

  const currText = ((data || {})[field] || '');

  const onChangeHandler = (e) => {
   const target = e.target;
   handleTextChange(target.value)
   textRef.current.style.height = "30px";
   textRef.current.style.height = `${target.scrollHeight}px`;
  };

  const handleTextChange = (text) => {
    onChange(field, text)
    const matches = text.match(/{{\w+}}/g)
    onHandlesUpdate((matches || []).map(m =>
      m.replaceAll('}', '').replaceAll('{', '')
    ))
  }

  return (
    <textarea
      value={currText}
      ref={textRef}
      onChange={onChangeHandler}
      style={{ resize: 'none', overflow: 'hidden', height: '30px', minHeight: '30px'}}
    />
  )
}
