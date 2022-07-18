import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";

import { auth } from "../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import styles from "../styles/register.module.css";

import { useDispatch } from "react-redux";
import { loadSignIn } from "../redux/actions/main";
import Link from "next/link";
import { useRouter } from "next/router";

let errorMsg;

function Register() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [userLogged, setUserLogged] = useState({});
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMEssage] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserLogged(user);
    });
  }, []);

  const showError = (error) => {
    let authError = error.message;
    let errorSplit = authError.split("/");
    let errorSplitString = errorSplit[1].toString();
    let errorMessageList = errorSplitString.split(")");
    errorMsg = errorMessageList[0].toString();
    setErrorMEssage(errorMsg);
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setShow(false);
      console.log(user);
      // router.push("/");
    } catch (error) {
      console.log(error.message);
      showError(error);
      setShow(true);
    }
  };

  return (
    <div className={styles.Auth}>
      <Container>
        <Row className={styles.AuthRow}>
          <Col lg={3}>
            <div className={styles.Authentication}>
              <div className={styles.Register}>
                <h5 className={styles.RegisterUser}>Create Account Register</h5>
                <input
                  className={styles.AuthEmail}
                  placeholder="Email..."
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                />
                <input
                  className={styles.AuthPass}
                  placeholder="Password..."
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
                {/* {console.log(errorMessage, "errorMessagejsx")} */}
                <button
                  className={styles.AuthButton}
                  onClick={() => {
                    register();
                    dispatch(loadSignIn(registerEmail));
                  }}
                >
                  Create User
                </button>
              </div>

              <hr className={styles.Hr} />
              <div className={styles.AlreadyAccount}>
                <span>
                  Already have an account?{" "}
                  <Link
                    href={{
                      pathname: "/signin",
                    }}
                  >
                    <a className={styles.SigninLink}>Sign In</a>
                  </Link>
                </span>
              </div>
              <Alert show={show} variant="danger">
                <Alert.Heading>{errorMessage}</Alert.Heading>
              </Alert>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
