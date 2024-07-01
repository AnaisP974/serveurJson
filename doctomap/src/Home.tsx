import Navbar from './components/Navbar.tsx';
import './output.css'

export default function Home() {


  return (
    <>
    <Navbar />
    <main>
      <h1>DOCTOMAP APP</h1> 
      <section className='w-full p-12 home'>
        <a href="/doctors">
          <figure className='w-36 home__figure'>
            <img src="./images/home_doctor.png" alt="doctors" />
            <figcaption>Doctors</figcaption>
          </figure>
        </a>
        <a href="/hospitals">
          <figure className='w-36 home__figure'>
            <img src="./images/home_hospital.png" alt="hospitals" />
            <figcaption>Hospitals</figcaption>
          </figure>
        </a>
      </section>
    </main>

    </>
  )
}
