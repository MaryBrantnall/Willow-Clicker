import WillowBunny from '../public/Willow_Bunny.png';
import { useState, useEffect } from 'react'
import LevelUp from './LevelUp';

const Willow = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        let interval;

        if(count >= 1000) {
            interval = setInterval(() => {
                setCount((prevCount) => prevCount + 10);
            }, 500);
        }
            
        return () => clearInterval(interval);
        }, [count]);
    


    function handleClick(){
        setCount(count + 1)

        if(count >= 10){
            setCount(count + 10)
        }

      }

    return(
        <>
        <LevelUp count={count} />
        <h1>Willow Clicker!</h1>
        <img onClick={handleClick} height="300px" src={WillowBunny} className="App-logo" alt="logo" />
        <h2>Click on Willow the Rabbit!</h2>
        <h3>Number of Clicks: {count}</h3>
    </>)

}
  
  export default Willow