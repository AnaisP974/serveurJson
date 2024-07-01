import Navbar from "../components/Navbar";

export default function NewDoctor() {
    // 

    return (
        <>
            <Navbar />
            <main>
                <h1>Add a new Doctor</h1>
                <section className="bg-gray-100 min-h-screen flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto">
                        <h2 className="text-2xl font-semibold mb-4">Create a Doctor</h2>

                        <form onSubmit={addDoctor}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">FullName</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        value=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">Specialty</label>
                                    <input
                                        type="text"
                                        id="specialty"
                                        name="specialty"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        value=""
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
                                    value=""
                                />
                            </div>

                            <div className="mt-4">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adresse</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    value=""
                                />
                            </div>

                            <div className="mt-4">
                                <label htmlFor="hospitalID" className="block text-sm font-medium text-gray-700">Hospiltal</label>
                                <div className="flex-auto flex flex-col items-center h-64">
                                    <div className="flex flex-col items-center relative">
                                        <div className="w-full  svelte-1l8159u">
                                            <div className="my-2 bg-white p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                                <div className="flex flex-auto flex-wrap"></div>
                                                <input value="Hôpital de Paris" className="p-1 px-2 appearance-none outline-none w-full text-gray-800  svelte-1l8159u"/>
                                                <div>
                                                    <button className="cursor-pointer w-6 h-full flex items-center text-gray-400 outline-none focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x w-4 h-4">
                                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                                                    <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-up w-4 h-4">
                                                            <polyline points="18 15 12 9 6 15"></polyline>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute shadow top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
                                            <div className="flex flex-col w-full">

                                                <div className="cursor-pointer w-full border-gray-100 rounded-t border-b 
                                            hover:bg-teal-100" style="">
                                                    <div className="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 hover:border-teal-600">
                                                        <div className="w-full items-center flex">
                                                            <div className="mx-2 leading-6  ">Python </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer w-full border-gray-100 border-b 
                                            hover:bg-teal-100 " style="">
                                                    <div className="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 border-teal-600">
                                                        <div className="w-full items-center flex">
                                                            <div className="mx-2 leading-6  ">Javascript </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cursor-pointer w-full border-gray-100 rounded-b 
                                            hover:bg-teal-100 " style="">
                                                    <div className="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative  hover:bg-teal-600 hover:text-teal-100 hover:border-teal-600">
                                                        <div className="w-full items-center flex">
                                                            <div className="mx-2 leading-6  ">Ruby </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP</label>
                                    <input
                                        type="text"
                                        id="zip"
                                        name="zip"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        value=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        value=""
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
    )
}