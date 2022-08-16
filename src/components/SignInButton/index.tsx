import {FaGithub} from 'react-icons/fa'
import styles from './styles.module.scss'
import {FiX } from 'react-icons/fi'

export function SignInButton() {

  const isUserLoggedIn = true;

  return isUserLoggedIn ? 
  (
    <button type="button" className={styles.signInButton}>
      <FaGithub color='#04d371'/>
      Mizfema

      <FiX color='#a8a8b3' className={styles.closeButton} />
    </button>
  ) : 
  (
    <button type="button" className={styles.signInButton}>
      <FaGithub color='#eba417'/>
      Sign in with Github
    </button>
  )
}