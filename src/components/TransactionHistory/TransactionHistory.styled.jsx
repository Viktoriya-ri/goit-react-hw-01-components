
import styled from '@emotion/styled';

export const TransactionHistori = styled.table`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 5px;
  text-align: center;
  background-color: beige;
  color: '#808184';
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  overflow: hidden;
`;

export const TransactionBody = styled.tbody`

`;

export const TransactionHead = styled.thead`
 border: 0px solid black;
  background-color: lightblue;
  color:' #ffffff';
  text-transform: uppercase;
`;

export const TransactionTitle = styled.th`
     width: 33.3%;
  padding: 15px 5px;
`
export const TransactionRow = styled.tr`
:nth-of-type(even) {
  background-color: '#ecf1f4';
}
`;
export const TransactionDescription = styled.td`
 padding: 15px 5px;
text-transform: capitalize;
`;
