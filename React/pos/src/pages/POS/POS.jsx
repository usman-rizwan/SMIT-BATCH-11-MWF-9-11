import { Button } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

function POS() {
  return <div>
    <div className="flex justify-between">
    <h1>POS</h1>
    <Button onClick={async()=> await signOut(auth)}>Logout</Button>
    </div>
  </div>;
}

export default POS;
