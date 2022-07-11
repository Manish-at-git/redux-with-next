import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadUsers } from "../redux/actions/main";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  console.log(data);
  // const [newName, setName] = useState("");

  return (
    <div className={styles.container}>
      <p> {data.users}</p>

      {console.log(data)}
    </div>
  );
}

export default Home;
