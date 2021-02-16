import styled from 'styled-components'

const Contents = styled.div`
    float: left;
    width: calc(100% - 300px);
    margin-left: 300px;
    @media screen and (max-width: 700px) {
        margin-left: 0px;
        width: 100%;
    }
`

export default Contents