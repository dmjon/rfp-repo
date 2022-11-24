import { Auth } from 'aws-amplify';



async function signOut() {
  try {
      await Auth.signOut();
  } catch (error) {
      console.log('error signing out: ', error);
  }
}
export default function Navbar(){

  const signedInOrNot = () => {
    const [signedUser, setSignedUser] = useState(false);
    useEffect(() => {
      authListener();
    }, []);
  
    async function authListener() {
      Hub.listen("auth", (data) => {
        switch (data.payload.event) {
          case "signIn":
            return setSignedUser(true);
          case "signOut":
            return setSignedUser(false);
        }
      });
      try {
        await Auth.currentAuthenticatedUser();
        setSignedUser(true);
      } catch (err) {}
    }
  }


  return(
    <>
    <div class="p-5 bg-primary text-white text-center">
      <h1>Request For Purchase</h1>
      <p>Resize this responsive page to see the effect!</p>
    </div><nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="crud-requests">CRUD - Requests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          <button onClick={signOut} className="btn btn-secondary">Log Out</button>
        </div>
      </nav>
      </>
  )
}