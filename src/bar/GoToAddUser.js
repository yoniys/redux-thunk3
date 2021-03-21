import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

function GoToAddUserButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <Button  color="primary"
    variant="contained" onClick={handleClick}>
      Go to add users
    </Button>
  );
}
export default GoToAddUserButton