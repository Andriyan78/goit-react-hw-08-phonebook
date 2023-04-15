import styled from 'styled-components';

export const Container = styled.div`
  padding: 33px;
  background-color: #def68e;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 600px;
  height: 570px;
  padding: 20px;
  background-color: #cbea65;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 30%) 3px 5px 10px 3px;
`;

export const SectionStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`;

export const SectionTitle = styled.h2`
  margin-top: 0;
  font-size: 24px;
`;