import Button from "antd/es/button"
import Title from "antd/es/typography/Title"
import { pageStore } from "../stores/pageStore"


export const NotReady = () => {

    const headStyle: React.CSSProperties = {
        color: '#CDB4DB',
        margin: '5%',
        textAlign: 'center',
        marginBottom: '50px'
    }

    const buttonStyle: React.CSSProperties = {
        backgroundColor: "#FFC8DD",
        color: 'black',
        width: '100px',
        height: '40px',
        fontSize: '20px'
    }

    return <>
    <Title style={headStyle} >Эта страница пока находится в разработке</Title><Button type="primary" style={buttonStyle} onClick={()=> pageStore.setPage('home')}>Назад</Button>
    </> 
}