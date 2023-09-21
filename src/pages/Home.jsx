import Header from "../components/Header";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Judging from "../components/Judging";
import Rules from "../components/Rules";


const Home = () => {
    return (
        <>
           <Header/>
           <Hero/>
           <Introduction/>
           <Rules/> 
           <Judging/>
        </>
    );
};

export default Home;