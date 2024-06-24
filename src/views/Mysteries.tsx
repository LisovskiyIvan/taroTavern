import {Button, Modal, Tooltip} from "antd";
import {pageStore} from "../stores/pageStore";
import React, {KeyboardEventHandler, useState} from "react";
import Title from "antd/es/typography/Title";
import {LeftOutlined, UpOutlined} from "@ant-design/icons";
import {Loading} from "../components/Loading";
import requestStore from "../stores/requestStore";
import userStatusStore from "../stores/userStatusStore.ts";


const buttonStyles: React.CSSProperties = {
    backgroundColor: "#FFC8DD",
    color: "black",
};
const titleStyles: React.CSSProperties = {
    color: "#CDB4DB",
    padding: "1rem",
};

export const Mysteries = () => {
    const [prompt, setPrompt] = useState("");
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState<number | undefined>(0);
    const [modal, setModal] = useState(false);

    const handleChange = (e: never) => {
        // @ts-expect-error все норм
        setPrompt(e.target.value);
    };


    const useFetchData = async () => {

        if (prompt == "") return


        if (userStatusStore.getUserStatus() === 'false') {
            setCount(requestStore.getCount());

            if (count != undefined && count >= 10) {
                setModal(true);
                return false;
            }
            if (modal) return false;

            requestStore.increment();
        }
        setPrompt("")
        setData("");
        setLoading(true);


        const res = await fetch(`${import.meta.env.VITE_URL}/llama/generate`, {
            method: "POST",
            body: JSON.stringify({
                prompt: prompt,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const reader = res.body?.pipeThrough(new TextDecoderStream()).getReader();
        setLoading(false);
        while (true) {
            const r = await reader?.read();
            if (r?.done) break;
            // let tr = await translate(JSON.stringify(r?.value).slice(34).split("").reverse().slice(5).reverse().join("").replaceAll("\\n\\n", "\n").replaceAll("\\n", "\n"), "en", "ru")
            // console.log(tr)
            // setData((prev) => prev + tr)
            setData(
                (prev) =>
                    prev +
                    JSON.stringify(r?.value)
                        .slice(34)
                        .split("")
                        .reverse()
                        .slice(5)
                        .reverse()
                        .join("")
                        .replaceAll("\\n\\n", "\n")
                        .replaceAll("\\n", "\n")
            );

        }
    };



    const _handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") useFetchData().then(r => r);
    };

    const handleOk = () => {
        pageStore.setPage('pay')
        setModal(false);
    };

    const handleCancel = () => {
        setModal(false);
    };

    return (
        <div className="bg-black h-[100dvh] w-[100%] flex flex-col justify-end items-center">
            <Title level={2} className="phFont w-[80%] sm:w-[100%] text-center" style={titleStyles}>
                Здесь лежат ответы на все ваши вопросы
            </Title>
            <div
                className="w-[95%] sm:w-[80%] h-[75%] bg-notblack border-rose border-2 rounded-lg p-2 text-rose overflow-y-auto text-lg">
                {data}{" "}
                {loading && (
                    <div className="absolute top-[40%] left-[45%] sm:left-[48%] z-30">
                        <Loading/>
                    </div>
                )}
            </div>
            <div className="m-[5%] h-[70px] w-[90%] sm:w-[50%] flex  items-center justify-between ">
                <input
                    value={prompt}
                    onChange={handleChange}
                    onKeyDown={_handleKeyDown}
                    placeholder="Четко и развернуто формулируйте вопросы"
                    type="text"
                    className="w-[90%] h-[100%] text-md px-2 mr-8 border-2 rounded-lg outline-none focus:border-rose transition duration-200"
                />
                <Tooltip title="отправить">
                    <Button
                        onClick={() => {
                            useFetchData().then(r => r);
                        }}
                        type="primary"
                        shape="circle"
                        className="w-14 h-14 hover:scale-105 hover:text-rose"
                        style={buttonStyles}
                    >
                        <UpOutlined/>
                    </Button>
                </Tooltip>
            </div>
            <Modal
                title="Превышен лимит бесплатных запросов"
                open={modal}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>
                    Был превышен лимит бесплатных запросов, для продолжения пожалуйста
                    совершите единовременный платеж. Это необходимо для продолжения работы
                    приложения
                </p>
            </Modal>
            <Button
                onClick={() => pageStore.setPage("home")}
                type="primary"
                shape="circle"
                className="w-10 h-10 sm:w-12 sm:h-12 absolute top-0 left-0 m-2 sm:m-6 text-md hover:scale-110 "
                style={buttonStyles}
            >
                <LeftOutlined/>
            </Button>
        </div>
    );
};
