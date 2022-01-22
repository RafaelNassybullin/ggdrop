import {Banner} from "./Head/Banner/Banner";
import {BlackFriday} from "./Section-EventBlackFriday/BlackFriday/BlackFriday";
import {Cases} from "./Section-Cases/Cases/Cases";
import {CountDownWrapper} from "./Section-CountDown/CountDownWrapper/CountDownWrapper";
import {Footer} from "./Footer-Section/Footer/Footer";

export function App() {
    return (
        <>
            <Banner/>
            <CountDownWrapper/>
            <BlackFriday/>
            <Cases/>
            <Footer/>
        </>
    );
}

