import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';


function ListButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/list");
  }

  return (
    <Button
    color="primary"
    variant="contained"
     onClick={handleClick}>
      Go to list of users
    </Button>
  );
}
export default ListButton