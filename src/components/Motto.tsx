import { Button, Flex } from "antd";
import { pageStore } from "../stores/pageStore";
import vkBridge, { UserInfo } from "@vkontakte/vk-bridge";
import React, { useEffect, useState } from "react";

const buttonGoStyles: React.CSSProperties = {
  backgroundColor: "#FFC8DD",
  color: "black",
};
const buttonPayStyles: React.CSSProperties = {
    backgroundColor: "#CDB4DB",
    color: "black",
  };

export const Motto = () => {
  const [user, setUser] = useState<UserInfo>();

  useEffect(() => {
    async function fetchData() {
      const user = await vkBridge.send("VKWebAppGetUserInfo");
      setUser(user);
    }

    fetchData().then((r) => r);
  }, []);

  return (
    <Flex
      className="phFont h-[70%] text-5xl text-rose flex-col"
      justify={"center"}
      align={"center"}
    >
      {user ? (
        <h1 className="mb-[25%] sm:mb-[15%] text-center">
          Привет {user.first_name}! Посмотрим твою судьбу?
        </h1>
      ) : (
        <h1 className="mb-[25%] sm:mb-[15%] text-center">
          Загляни в будущее с Таверной Таро!
        </h1>
      )}
      <div className="w-[70%] sm:flex sm:flex-row sm:justify-evenly flex flex-col items-center" >
        <Button
          onClick={() => pageStore.setPage("mysteries")}
          type="primary"
          className="phFont bg-blue  text-black hover:scale-110 w-[30%] h-[50px] sm:w-[15%] aspect-auto text-2xl"
          style={buttonGoStyles}
        >
          Вперед
        </Button>
        <Button
          onClick={() => pageStore.setPage("pay")}
          type="primary"
          className="phFont bg-violet  text-black hover:scale-110 w-[30%] h-[50px] sm:w-[15%] aspect-auto text-lg text-wrap py-1 px-2 mt-8 sm:mt-0"
          style={buttonPayStyles}
        >
          Открыть безлимит
        </Button>
      </div>
    </Flex>
  );
};
