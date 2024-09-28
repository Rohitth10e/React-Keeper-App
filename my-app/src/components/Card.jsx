import DeleteIcon from '@mui/icons-material/Delete';

function Card(props) {

  function handleClick(){
    props.onCheck(props.id);
  }

  return (
    <div className="card">
      <h1>{props.title}</h1>
      <div className="card-details">
        <p>{props.content}</p>
      </div>
      <div className="card-foot">
        <button className="deleteBtn" onClick={handleClick}> <DeleteIcon/> </button>
      </div>
    </div>
  );
}

export default Card;
