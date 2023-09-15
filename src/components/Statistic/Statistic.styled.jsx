
import styled from '@emotion/styled';

export const Statistics = styled.section`
  width: 700px;
  margin: 15px auto;
  background-color: lightblue;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  overflow: hidden;
  justify-content:center;
text-align:center;


`;

export const StatisticTitle = styled.h2`

color: grey;
`;

export const StatList = styled.ul`
display:flex;
margin:auto;
padding:25px;
justify-content:center;
text-align:center;
`;

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const StatItem = styled.li`
padding:25px;
background-color:${randomColor};
`;
export const Label = styled.span`
display:flex;

`;
export const Percantage = styled.span``;
