import Styled from 'styled-components'

const Img = Styled.img`
 color: palevioletred;
  font-size: 1em;
  margin: auto;
  padding:auto;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover{
    -webkit-filter: grayscale(50%); /* Safari 6.0 - 9.0 */
    filter: grayscale(50%);
  }
`


export const ImgProducts = Styled.img`
  display: block;
  width:100%;
  height:auto;
`

export const Opacity = Styled.div`
   & > Overlay,
   &:hover > Overlay,
   & > Overlay:focus {
    opacity:0;
   }   
  
`


export const Overlay = Styled.div`
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: .5s ease;
  opacity:1;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  
`

export const MapHere1 = Styled(Img)`
  border-color: #2461cc;
`

export const MapHere2 = Styled(Img)`
  border-color: tomato;
`
export const MapHere3 = Styled(Img)`
  border-color: #795548;
`
