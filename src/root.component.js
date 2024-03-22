export default function Root(props) {
  //return <section>{props.name} is mounted!</section>;
  return <div style={{textAlign:'center',
    border: '3px',padding:'20px'
   }}>
    {props.name} is mounted
  </div>


}