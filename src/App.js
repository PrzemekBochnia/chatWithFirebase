import React from "react";
import NavBar from "./components/NavBar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import Chat from "./components/Chat";

const style={
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[100%] bg-gray-100 mt-10 shadow-xl border relative py-8`
}

function App() {

  const [user] = useAuthState(auth)
 
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <NavBar/>
        {user? <Chat/> : null}
        {/* <Chat/> */}
      </section>
    </div>
  );
}

export default App;
