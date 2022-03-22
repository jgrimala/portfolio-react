import Header from "./jsx/components/Header";
import Hero from "./jsx/Hero";
import About from "./jsx/About";
import Education from "./jsx/Education";
import Experience from "./jsx/Experience";
import Footer from "./jsx/components/Footer";
import "./Styles/main.scss";

function App() {
	return (
		<div className="App">
			<Header title={"Julie G"} subTitle={"Web Developer"}></Header>
			<Hero></Hero>
			<About></About>
			<Education></Education>
			<Experience></Experience>
			<Footer></Footer>
		</div>
	);
}

export default App;
