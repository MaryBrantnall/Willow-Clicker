const RewardTable = (props) => {

    const arrData = props.data;

    return(
    <table className='rewardTable'>
    <tr><th>Number of Clicks</th><th>Reward</th></tr>
    {arrData.map(d=>(
    <tr><td>{d.Clicks}</td><td>{d.Reward}</td></tr>
    ))}
    </table>
    )

  }
  
  export default RewardTable