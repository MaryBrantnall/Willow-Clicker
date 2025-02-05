
import RewardTable from '../components/RewardTable'
import Willow from '../components/Willow'
import './App.css'

function App() {

  const buttons = [{Clicks:'100', Reward:'Counter goes up by 10'},{Clicks:'1000', Reward:"Auto-Click is activated"},
  {Clicks:'10,000', Reward:'Level Up!'}];


  return(
    <>
      <div className="App">
        <header className="App-header">
          <Willow />
        </header>
        <div className="rewards">
          <RewardTable data={buttons}/>
        </div>
      </div>
    </>
  )
}

export default App
