import { BsSearch } from "react-icons/bs";
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 30px;
  padding-top: 20px;
  width: 89%;
  background-color: #000000;
 
`;

const StyButton = styled.button`
  padding: 9px;
  border-radius: 5px;
  border-color: 'white';
  margin: 8px;
  background-color: #f53e16;
`;

const Titulo = styled.div`
   font-size: 40px;
   color:#000000;
   padding-left: 30px;
`;


export default function PokemonSearch(props) {
  let input;
  
  return (
    <>
    <Titulo>Pokédex</Titulo>
    <Container>
         <div>
            <label style={{color:'white'}}>Name ou Number</label>
         </div>     
         <div>
            <input ref={(n) => input = n} type="text" />
            <StyButton type="button"  onClick={(n) => props.filterPoke(input.value)}><BsSearch style={{color:'white'}}/></StyButton>
         </div>  
    </Container>   
    </>
  );
}
