import { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import './output.css'
import {Profile} from './Interface/Profile.tsx'


export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  const getFiveDoctors = async () => {
    try{
      const response = await fetch('http://localhost:3000/doctors?_limit=5');
      const dataDoc = await response.json();
      setDoctors(dataDoc)
    } catch (e){
      console.log(e)
    }
  }
  const getFiveHospitals = async () => {
    try{
      const response = await fetch('http://localhost:3000/hospitals?_limit=5');
      const dataHos = await response.json();
      setHospitals(dataHos)
    } catch (e){
      console.log(e)
    }
  }
   getFiveDoctors()
   getFiveHospitals()
  return (
    <>
    <Navbar />
    <main>
      <h1>DOCTOMAP APP</h1> 
      <section className='w-full p-12 home'>
        <div className="column">
          <a href="/doctors">
            <figure className='w-36 home__figure'>
              <img src="./images/home_doctor.png" alt="doctors" />
              <figcaption>See all Doctors</figcaption>
            </figure>
          </a>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {doctors.map((doctor: Profile) => (
                <li className="p-3 flex justify-between items-center user-card" key={doctor.id}>
                  <div className="flex items-center">
                    <span className="ml-3 font-medium">{doctor.name}</span>
                  </div>
                  <div>
                    <a href={"/doctors/"+doctor.id}>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                      </button>
                    </a>
                  </div>
                </li>
              ))}  
            </ul>
          </div>
        </div>

        <div className="column">
          <a href="/hospitals">
            <figure className='w-36 home__figure'>
              <img src="./images/home_hospital.png" alt="hospitals" />
              <figcaption>See all Hospitals</figcaption>
            </figure>
          </a>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {hospitals.map((hospital: Profile) => (
                <li className="p-3 flex justify-between items-center user-card" key={hospital.id}>
                  <div className="flex items-center">
                    <span className="ml-3 font-medium">{hospital.name}</span>
                  </div>
                  <div>
                    <a href={"/doctors/"+hospital.id}>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                      </button>
                    </a>
                  </div>
                </li>
              ))}  
            </ul>
          </div>
        </div>
      </section>
    </main>

    </>
  )
}
