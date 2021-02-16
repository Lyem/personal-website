import Menu from '../components/menu'
import Contents from '../components/contents'
import styled from 'styled-components'

const Estilo = styled.div`
  h1{
    text-align: center;
  }
  p, ul{
    margin-left: 10%;
  }
  img{
    border-radius: 100%;
    width: 20%;
    margin-bottom:1%;
    display: none;
    margin-left: 11%;
  }
  @media screen and (max-width: 700px) {
        img{
          display: flex;
        }
    }
`

export default function Home(){
    return(
        <>
            <Menu></Menu>
            <Contents>
                <Estilo>
                  <h1>Sobre mim</h1>
                  <br></br>
                  <img src="profile.jpg"/>
                  <p>Olá meu nome é Rafael</p>
                  <p>Sou estudante de análise e desenvolvimento de sistemas na FatecItu</p>
                  <p>No momento estou estudando as seguintes tecnologias:</p>
                  <ul>
                    <li>CSS3</li>
                    <li>React + Nextjs</li>
                    <li>Java Script</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Rest api</li>
                  </ul>
                </Estilo>
            </Contents>
        </>
    )
}