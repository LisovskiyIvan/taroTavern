import { Flex } from "antd";
import { pageStore } from "../stores/pageStore";


const boxStyle = {
  width: "100%",
  height: '100%',
  color: "#CDB4DB",
};

const navbar = [{name: "Мистерии", link: 'mysteries'}, {name: "Нумерология", link: 'numerology'},{name: "Чаркра-чтение", link: 'chakra'},{name: "Хрустальный шар", link: 'ball'},]


export const Navbar = () => {
  return (
    
      <Flex style={boxStyle} justify={"space-around"} align={"center"} className="navFont text-sm sm:text-lg">
        {navbar.map((value, index) => <div  key={index} onClick={() => pageStore.setPage(value.link)} className=" relative hover:scale-110  after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer duration-300 hover:duration-300">{value.name}</div>)}
      </Flex>
  
  );
};
