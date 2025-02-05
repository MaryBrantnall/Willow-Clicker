import { useState, useEffect } from 'react'

const LevelUp = (props) => {

  let clicks = props.count
  const [level, setLevel] = useState(1)

  useEffect(() => {
    if (clicks == 10000){
      setLevel((prevLevel) => prevLevel + 1)
      alert("Wow, you leveled up!")
    }
  }, [clicks])

  

    return(
      <h5>Level: {level}</h5>
    )

  }
  
  export default LevelUp