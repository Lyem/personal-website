import styled from 'styled-components'

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
        border-radius: 100%;
        width: 30%;
    }

    h3{
        color: white;
    }

    @media screen and (max-width: 700px) {
        img, h3{
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
                <a href="teste">Home</a>
                <a href="teste">Portifolio</a>
                <a href="teste">Sobre</a>
            </div>
        </Navigation>
    )
}