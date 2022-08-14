import styles from "./AccountWithProfileIcon.module.css";

function AccountWithProfileIcon(props) {
  return (
    <div className={styles.accountColumn}>
      <img
        src={props.imageUrl}
        alt={props.name}
        className={styles.profileIcon}
      />
      <p>{props.name}</p>
    </div>
  );
}

export default AccountWithProfileIcon;
