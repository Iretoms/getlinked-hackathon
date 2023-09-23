import Header from "../components/Header";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Judging from "../components/Judging";
import Prices from "../components/Prices";
import Question from "../components/Question";
import Rules from "../components/Rules";
import Timeline from "../components/Timeline";


const Home = () => {
    return (
        <>
           <Header/>
           <Hero/>
           <Introduction/>
           <Rules/> 
           <Judging/>
           <Question/>
           <Timeline/>
           <Prices/>
        </>
    );
};

export default Home;