import styled from "styled-components";

const InputComPaddingMaior = styled.input`
  padding-left: 2.5rem !important;

  + span {
    color: #616161;
    position: absolute;
    top: 26px;
    left: 12px;
  }
`;

const InputMoney = ({ value, onChange, ...props }) => {
  return (
    <>
      <InputComPaddingMaior value={value} onChange={onChange} {...props} />
      <span>R$</span>
    </>
  );
};

export default InputMoney;
