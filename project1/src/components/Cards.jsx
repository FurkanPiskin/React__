import {Card as BootstrapCard} from 'react-bootstrap';
import styles from './cards.module.css'
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';
function AppCard({to,title}) {
  return (
    <BootstrapCard className={styles.card} >
      <BootstrapCard.Body className={styles.cardbody}>
        <BootstrapCard.Title className={styles.title}>{title}</BootstrapCard.Title>
       
        
       <Link to={to}><Button className={styles.button} variant="light">Go somewhere</Button></Link>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default AppCard;