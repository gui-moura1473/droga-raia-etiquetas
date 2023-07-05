import { styled } from 'styled-components'

const TextAreaWrapper = styled.div`
  display: flex;
  position: relative;
  justify-self: center;
  width: 80%;
  margin-bottom: 1rem;

  label {
    position: absolute;
    left: .5rem;
    cursor: pointer;
  }

  label:hover {
    color: rgb(155, 155, 155);
  }

  textarea {
    resize: none;
    padding: 1.6rem .5rem .3rem .5rem;
    outline: none;
    font-family: inherit;
    border-radius: 4px;
    border: none;
    width: 100%;
    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, .1);
    color: rgb(107, 107, 107);
    height: 8rem;
  }
`

function TextAreaContato({ label, id, value, setValue }) {
  return (
    <TextAreaWrapper>
        <label htmlFor={id}>
            {label}
        </label>
        <textarea
            id={id}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    </TextAreaWrapper>
  )
}

export default TextAreaContato