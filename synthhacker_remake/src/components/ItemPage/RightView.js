import AddButton from "../buttons/AddButton";
import RemoveButton from "../buttons/RemoveButton";
import "./RightView.css";

function RightView(props) {
  return (
    <div>
      <p className="title">{props.title}</p>
      <p className="price">${props.price} USD</p>
      <AddButton
        id={props.id}
        price={props.price}
        update={props.update}
        title={props.title}
      />
      <RemoveButton
        id={props.id}
        price={props.price}
        update={props.update}
        title={props.title}
      />
    </div>
  );
}

export default RightView;

// id = "1";
// price = { price };
// update = { updateTime };
// title = { title };
