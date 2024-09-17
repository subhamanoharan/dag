import { useRef } from 'react';

export const DynamicTextInputField = ({data, onChange, onHandlesUpdate}) => {
  const textRef = useRef();

  const currText = (data?.text || '');

  const onChangeHandler = (e) => {
   const target = e.target;
   handleTextChange(target.value)
   textRef.current.style.height = "30px";
   textRef.current.style.height = `${target.scrollHeight}px`;
  };

  const handleTextChange = (text) => {
    onChange('text', text)
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
