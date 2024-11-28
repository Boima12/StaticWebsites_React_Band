import styles from './App.module.css';

import Co_navbar from './pages/navbar/navbar';
import Co_slides from './pages/slides/slides';
import Co_theband from './pages/theband/theband';
import Co_tour from './pages/tour/tour';
import Co_contact from './pages/contact/contact';
import Co_map from './pages/map/map';
import Co_footer from './pages/footer/footer';


function App() {

  return (
    <div className={styles.main}>

      <Co_navbar />
      <Co_slides />
      <Co_theband />
      <Co_tour />
      <Co_contact />
      <Co_map />
      <Co_footer />

    </div>
  )
}

export default App
