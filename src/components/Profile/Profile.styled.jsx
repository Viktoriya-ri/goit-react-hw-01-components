import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 540px;
  margin: 0 auto;
  padding: 50px 50px;

  background-color: lightgreen;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

`;

export const Description = styled.div`
    justify-content: center;
    text-align:center;
`;

export const Avatar = styled.img`
    border-radius:50%;
    border: 3px solid red;

`;

export const AvatarName = styled.p`
    color: red;
    font-weight:bold;
    margin-top:20px;
`;
export const Tag = styled.p`
 margin-top: 10px;
`;
export const Location = styled.p`
    margin-top:10px;
`;

export const Stats = styled.ul`
display:flex;
 justify-content: center;


`;

export const Quantiny = styled.span`
    display:block;
`;
export const Label = styled.span`
  :not(:last-child){
    margin-right: 25px;
    color: red;
  }

`;
