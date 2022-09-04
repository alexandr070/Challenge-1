import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import React from "react";
import ReactDom from "react-dom";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseModal} ></div>
};

const Modal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onCloseModal} >Закрыть</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<BackDrop onCloseModal={props.onCloseModal} />, document.getElementById('backdrop'))}
      {ReactDom.createPortal(<Modal title={props.title} message={props.message} onCloseModal={props.onCloseModal} />, document.getElementById('modal'))}

    </React.Fragment>
  );
};

export default ErrorModal;
