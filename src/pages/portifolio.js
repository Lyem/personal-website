import Menu from '../components/menu'
import Contents from '../components/contents'
import styled from 'styled-components'
import Link from 'next/link'

const Estilo = styled.div`
  h1{
    text-align: center;
  }
  img{
      margin-top: 5%;
      border-color: ${({ theme }) => theme.colors.select};
      margin-left: 10%;
      float: left;
      border-style: solid;
  }
  img:hover{
      cursor: pointer;
  }
`

export default function Portifolio(){
    return(
        <>
            <Menu></Menu>
            <Contents>
                <Estilo>
                    <h1>Esses são alguns de meus trabalhos</h1>
                    <Link href="/"><img width="30%" src="personalwebsite.png"></img></Link>
                </Estilo>
            </Contents>
        </>
    )
}