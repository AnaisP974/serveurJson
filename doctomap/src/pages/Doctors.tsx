import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    phone: string;
    email: string;
    address: string;
    zip: string;
    city: string;
    url: string;
    hopitalID: number;
}
interface Doctors {
    doctors: Doctor[];
}


export default function Doctors() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // je fetch ma data
        const getDoctors = async() => {
            try {
                const response = await fetch("http://localhost:3000/doctors")
                const result = await response.json()
                // je mets à jour mon state locale 
                setData(result)
                console.log(data);
            }catch(error) {
                // handle error
                alert('Echec du fetch ')
            }
        }
        getDoctors()
    }, [data]);

    return (
    <>
    <Navbar />
    <main>
        <h1>All Doctors</h1>
        <div className="bg-gray-100 py-32">
            <div className="max-w-sm mx-auto my-10">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                        {data.map((doctor: Doctor) => (
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
                        ))

                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    </main>

    </>

    )
}