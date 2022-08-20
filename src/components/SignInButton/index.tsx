import {FaGithub} from 'react-icons/fa'
import styles from './styles.module.scss'
import {FiX } from 'react-icons/fi'
import {signIn,signOut, useSession} from 'next-auth/react' 



export function SignInButton() {
  const {data: session} = useSession();
  console.log(session)


  return session ? 
  (
    <button type="button" className={styles.signInButton}>
      <FaGithub color='#04d371'/>
      {session.user.name}

      <FiX 
      color='#a8a8b3' 
      className={styles.closeButton}
      onClick={()=> signOut()}
       />
    </button>
  ) : 
  (
    <button 
    type="button" 
    className={styles.signInButton}
    onClick={() => signIn('github')}
    >
      <FaGithub color='#eba417'/>
      Sign in with Github
    </button>
  )
}