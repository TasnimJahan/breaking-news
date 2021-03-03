import Fragment from './components/Fragment/Fragment';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import TopHeadlines from './components/TopHeadlines/TopHeadlines';


function App() {
  return (
    <div>
      <h2>React bootstrap</h2>
        <Header></Header>
        {/* <News></News> */}
        <Fragment></Fragment>
        <TopHeadlines></TopHeadlines>
    </div>
  );
}

export default App;
