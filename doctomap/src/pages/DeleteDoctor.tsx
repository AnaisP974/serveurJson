import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import {Profile} from '../Interface/Profile.tsx'

export default function DeleteDoctor() {
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState<Profile[]>([]);
    const { id } = useParams<{ id: string }>();

    const getDoctor = async () => {
        try {
            const response = await fetch(`http://localhost:3000/doctors?id=${id}`);
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

    useEffect(() => {
        getDoctor();
    }, []);

    if (doctor.length === 0) {
        return <div>Loading...</div>;
    }

    const deleteDoctor = async () => {
        try {
            const response = await fetch(
                `http://localhost:3000/doctors/${id}`,
                {
                    method: 'DELETE',
                }
              );
            console.log(response);
            alert('Suppression réussie, vous allez être redirigé vers la page d\'accueil.');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar />
            <h1>Delete a Doctor</h1>
            <div className="flex flex-col justify-center h-screen">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                    
                    <div className="w-full  bg-white flex flex-col space-y-2 p-3">
                        
                        <h3 className="font-black text-gray-800 md:text-3xl text-xl">Vous êtes sur le point de supprimer {doctor[0].name}, souhaitez vous poursuivre ?</h3>
                        
                        <div className="action">
                            <a href={`/doctors/${doctor[0].id}`}><button className="action__btn goBack">Bo back</button></a>
                            <button className="action__btn delete" onClick={() => deleteDoctor()}>Delete, I'm sure !</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}