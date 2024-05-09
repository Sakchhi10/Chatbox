
import Routers from "./routes/Router";

function App() {
  // const [loggedIn, setLoggedIn] = useState(
  //   localStorage.getItem("loggedIn") === "true"
  // );

  // useEffect(() => {
  //   // Store the login status in localStorage
  //   localStorage.setItem("loggedIn", loggedIn);
  // }, [loggedIn]);
  return (<Routers/>
    // <>
    //   {/* {loggedIn ? ( */}
    //     <Adminapp />
    //   {/* ) : (
    //     <UserModule loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    //   )} */}
    // </>
  );
}

export default App;
