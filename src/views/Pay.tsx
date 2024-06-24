import {Button} from "antd"
import React, {useState} from "react";
import vkBridge from "@vkontakte/vk-bridge";
import {pageStore} from "../stores/pageStore";
import userStatusStore from "../stores/userStatusStore.ts";
import { LeftOutlined } from "@ant-design/icons";


const buttonStyles: React.CSSProperties = {
    backgroundColor: "#FFC8DD",
    color: 'black',
    fontSize: '18px'
}


export const Pay = () => {

    const price = 29
    const [payStatus, setPayStatus] = useState(false)
    const payAccess = async () => {

        const res = await vkBridge.send("VKWebAppShowOrderBox", {
            type: 'item',
            item: 'item_id_1'
        }).then(data => data)
            .catch((error) => {
                // Ошибка
                console.log(error);
            });

        if (res) {
            // @ts-expect-error вк обосрался в типами
            userStatusStore.setUserStatus(res.success.toString())
            setPayStatus(true)

        }


    }

    return (
        <div className="bg-black h-[100dvh] w-[100%] flex flex-col justify-center items-center">
            {payStatus ? <>
                <div className="text-violet phFont text-6xl mb-16 text-center">Оплата прошла успешно</div>
                <Button style={buttonStyles} onClick={() => pageStore.setPage('home')}>На главную</Button></> : <><h1
                className="text-violet phFont text-6xl mb-16">Оплата</h1>
                <div className="text-white navFont text-lg sm:text-4xl mb-10 text-center">В бесплатном режиме установлен режим ограничения запросов. Сумма заказа: {price} голосов</div>
                <Button style={buttonStyles} onClick={() => payAccess()}>Оплатить</Button></>}
                <Button
                onClick={() => pageStore.setPage("home")}
                type="primary"
                shape="circle"
                className="w-10 h-10  absolute top-0 left-0 m-2 sm:m-6 text-md hover:scale-110 "
                style={buttonStyles}
            >
                <LeftOutlined/>
            </Button>
        </div>
    )
}