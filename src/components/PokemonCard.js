import styled from "styled-components";

const Container = styled.div`
  padding-left: 15px;
  width: 250px;
  margin: 16px;
`;

const PokemonImg = styled.img`
  height: 210px;
  background-color: #f2f2f2;
`;

const PokemonNumber = styled.p`
  font-size: 12px;
  color: #888;
  font-weight: bold;
`;

const PokemonName = styled.p`
  font-size: 22px;
  color: #000;
`;

const PokemonType = styled.button`
  background-color: red;
`;

// gera uma cor aleatória em hexadecimal
const randoColor = () => {
  return ('#'+((1<<24)*Math.random()|0).toString(16))
}

export default function PokemonCard({imgSrc, name, number, typeList}) {
  return(
    <Container>
      <PokemonImg src={imgSrc} />
      <PokemonNumber>#{number}</PokemonNumber>
      <PokemonName>{name}</PokemonName>
      {typeList.map((tipo) => {
         return <PokemonType style={{backgroundColor: randoColor()}}>&nbsp;{tipo}&nbsp;</PokemonType>
       })}
    </Container>
  )
}
