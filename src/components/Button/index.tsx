import styles from './Button.module.scss';

export function Button(props: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button type="button" className={styles.button} {...props}>
      {props.children}
    </button>
  );
}
