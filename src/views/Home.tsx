import { Navbar } from "../components/Navbar";
import { Motto } from "../components/Motto";
import { Flex } from "antd";




export const Home = () => {
  
  

  return (
      <div className="bg-black h-[100dvh] w-[100%]">
        <Flex gap="middle" align="start" vertical className="h-[20%]">
          <Navbar />
        </Flex>
        <Motto />
      </div>
  );
}