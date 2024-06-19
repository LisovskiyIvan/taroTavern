import {Button, Flex} from "antd"
import {pageStore} from "../stores/pageStore"
import vkBridge, {UserInfo} from "@vkontakte/vk-bridge";
import React, {useEffect, useState} from "react";


const buttonStyles: React.CSSProperties = {
    backgroundColor: "#FFC8DD",
    color: 'black'
}

export const Motto = () => {

    const [user, setUser] = useState<UserInfo>()

    useEffect(() => {
        async function fetchData() {
            const user = await vkBridge.send('VKWebAppGetUserInfo');
            setUser(user)
        }

        fetchData().then(r => r)
    }, []);

    return (
        <Flex className="phFont h-[70%] text-5xl text-rose flex-col" justify={'center'} align={'center'}>
            {user ?
                <h1 className="mb-[25%] sm:mb-[15%] text-center">Привет {user.first_name}! Посмотрим твою судьбу?</h1> :
                <h1 className="mb-[25%] sm:mb-[15%] text-center">Загляни в будущее с Таверной Таро!</h1>}


            <Button onClick={() => pageStore.setPage('mysteries')} type="primary"
                    className="phFont bg-blue  text-black hover:scale-110 w-[30%] h-[50px] sm:w-[15%] aspect-auto text-2xl"
                    style={buttonStyles}>Вперед</Button>
        </Flex>
    )
}