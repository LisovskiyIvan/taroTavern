import Button from "antd/es/button"
import Title from "antd/es/typography/Title"
import { pageStore } from "../stores/pageStore"


export const NotReady = () => {

    const headStyle: React.CSSProperties = {
        color: '#CDB4DB',
        margin: '5%'
    }

    const buttonStyle: React.CSSProperties = {
        backgroundColor: "#FFC8DD",
        color: 'black'
    }

    return <>
    <Title style={headStyle}>Эта страница пока находится в разработке</Title><Button type="primary" style={buttonStyle} onClick={()=> pageStore.setPage('home')}>Назад</Button>
    </> 
}