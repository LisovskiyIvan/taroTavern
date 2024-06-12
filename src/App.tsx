import { Home } from "./views/Home";
import vkBridge from "@vkontakte/vk-bridge";
import { Mysteries } from "./views/Mysteries";
import {pageStore} from "./stores/pageStore";
import { observer } from "mobx-react-lite";
import { Chakra } from "./views/Charkra";
import { Numerology } from "./views/Numerology";
import { Ball } from "./views/Ball";
import { useEffect } from "react";
import { useUser } from "./hooks/useUser";
import requestStore from "./stores/requestStore";








const App = observer(() => {

  if(requestStore.getCount() == 2) console.log('раюотает')
  useEffect(() => {
    async function fetchData() {
      const user = await vkBridge.send('VKWebAppGetUserInfo');
      useUser(user)
    }
    fetchData();
    
  }, []);
  

  return (
    
    <>
    {pageStore.getPage() == 'home' && <Home />}
    {pageStore.getPage() == 'mysteries' && <Mysteries />}
    {pageStore.getPage() == 'chakra' && <Chakra />}
    {pageStore.getPage() == 'numerology' && <Numerology />}
    {pageStore.getPage() == 'ball' && <Ball />}
    
    </>
  );
})

export default App;

