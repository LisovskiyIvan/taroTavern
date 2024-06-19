import {Home} from "./views/Home";
import {Mysteries} from "./views/Mysteries";
import {pageStore} from "./stores/pageStore";
import {observer} from "mobx-react-lite";
import {Chakra} from "./views/Charkra";
import {Numerology} from "./views/Numerology";
import {Ball} from "./views/Ball";
import {Pay} from "./views/Pay.tsx";


const App = observer(() => {


    return (

        <>
            {pageStore.getPage() == 'home' && <Home/>}
            {pageStore.getPage() == 'mysteries' && <Mysteries/>}
            {pageStore.getPage() == 'chakra' && <Chakra/>}
            {pageStore.getPage() == 'numerology' && <Numerology/>}
            {pageStore.getPage() == 'ball' && <Ball/>}
            {pageStore.getPage() == 'pay' && <Pay/>}

        </>
    );
})

export default App;

