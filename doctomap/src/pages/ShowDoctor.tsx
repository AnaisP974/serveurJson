import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

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

export default function ShowDoctor() {
    const [doctor, setDoctor] = useState<Doctor[]>([]);
    const { id } = useParams<{ id: string }>();
    const url = `http://localhost:3000/doctors?id=${id}`;

    useEffect(() => {
        const getDoctor = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                if (result.length > 0) {
                    setDoctor(result);
                } else {
                    alert('Doctor not found');
                }
            } catch (error) {
                alert('Echec du fetch');
            }
        };
        getDoctor();
    }, [id]);

    if (doctor.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <h1>Show a Doctor Profile</h1>
            <div className="flex flex-col justify-center h-screen">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                    <div className="w-full md:w-1/3 bg-white grid place-items-center">
                        <img src="../images/home_doctor.png" alt="doctor" className="rounded-xl" />
                    </div>
                    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <p className="text-gray-600 font-bold text-sm ml-1">
                                    {doctor[0].specialty}
                                </p>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="font-black text-gray-800 md:text-3xl text-xl">{doctor[0].name}</h3>
                        <p className="md:text-lg text-gray-500 text-base">{doctor[0].address}</p>
                        <p className="md:text-lg text-gray-500 text-base">{doctor[0].zip} {doctor[0].city}</p>
                        <p className="md:text-lg text-gray-500 text-base">Phone: {doctor[0].phone}</p>
                        <p className="md:text-lg text-gray-500 text-base">{doctor[0].email}</p>
                        <div className="action">
                            <a href={`/doctors/edit/${doctor[0].id}`}><button className="action__btn update">Update</button></a>
                            <button className="action__btn delete">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
