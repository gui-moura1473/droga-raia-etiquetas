import styled from "styled-components";

const CheckGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: baseline;

  h3 {
    font-size: 1.15rem;
    color: #006c7f;
    font-weight: 400;
    margin-bottom: 0.3rem;
  }

  > div {
    display: flex;
  }
`;

const CheckGroup = styled.div`
  display: flex;
  margin-right: 2rem;
  gap: 0.5rem;

  input,
  label {
    cursor: pointer;
  }
`;

const CheckboxGroup = ({ values, setValues }) => {
  const handleChangeFarmapop = (value) => {
    setValues({
      ...values,
      farmapop: value,
    });
  };

  return (
    <CheckGroupWrapper>
      <h3>Farmácia Popular</h3>
      <div>
        <CheckGroup>
          <input
            type="checkbox"
            id="sim"
            checked={values.farmapop ? true : false}
            onChange={(e) => setValues({ ...values, farmapop: true })}
          />
          <label htmlFor="sim">Sim</label>
        </CheckGroup>
        <CheckGroup>
          <input
            type="checkbox"
            id="nao"
            checked={!values.farmapop ? true : false}
            onChange={(e) => setValues({ ...values, farmapop: false })}
          />
          <label htmlFor="nao">Não</label>
        </CheckGroup>
      </div>
    </CheckGroupWrapper>
  );
};

export default CheckboxGroup;
