import Header from "../components/Header";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Judging from "../components/Judging";
import Question from "../components/Question";
import Rules from "../components/Rules";


const Home = () => {
    return (
        <>
           <Header/>
           <Hero/>
           <Introduction/>
           <Rules/> 
           <Judging/>
           <Question/>
        </>
    );
};

export default Home;