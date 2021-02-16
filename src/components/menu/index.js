import styled from 'styled-components'
import Link from 'next/link'

const Navigation = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 300px;
    height: 100%;
    text-align: center;
    position: fixed;
    a{
        display: block;
        color: white;
        padding: 5%;
        text-decoration: none;
    }
    a:hover{
        background-color: ${({ theme }) => theme.colors.select};
    }

    img{
        margin-top: 5%;
        border-color: ${({ theme }) => theme.colors.select};
        border-style: solid;
        border-radius: 100%;
        width: 40%;
    }

    h3{
        color: white;
    }

    @media screen and (max-width: 700px) {
        img, h3, a{
            display: none;
        }
        width: 0px;
    }
`

export default function Menu(){
    return(
        <Navigation>
            <img src="profile.jpg" />
            <h3>Rafael Corrêa de Melo</h3>
            <div>
                <Link href="/">Home</Link>
                <Link href="/portifolio">Portifolio</Link>
                <Link href="contact">Contato</Link>
            </div>
        </Navigation>
    )
}