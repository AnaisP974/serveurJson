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

export default function EditDoctor() {
    const [doctor, setDoctor] = useState<Doctor | null>(null);
    const { id } = useParams<{ id: string }>();
    const url = `http://localhost:3000/doctors?id=${id}`;

    useEffect(() => {
        const getDoctor = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                if (result.length > 0) {
                    setDoctor(result[0]);
                } else {
                    alert('Doctor not found');
                }
            } catch (error) {
                alert('Echec du fetch');
            }
        };
        getDoctor();
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.target.name)
        console.log(e.target.value)
        const { name, value } = e.target;
        if (doctor) {
            setDoctor({ ...doctor, [name]: value });
        }
    };

    if (!doctor) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <main>
                <h1>Edit a Doctor</h1>
                <section className="bg-gray-100 min-h-screen flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto">
                        <h2 className="text-2xl font-semibold mb-4">{doctor.name}</h2>

                        <form action="#" method="POST">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">FullName</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        value={doctor.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">Specialty</label>
                                    <input
                                        type="text"
                                        id="specialty"
                                        name="specialty"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        value={doctor.specialty}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    value={doctor.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="mt-4">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adresse</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    value={doctor.address}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP</label>
                                    <input
                                        type="integer"
                                        id="zip"
                                        name="zip"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        value={doctor.zip}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        value={doctor.city}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
