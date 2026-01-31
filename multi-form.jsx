import { useForm, useWatch } from "react-hook-form";
import { useState, useMemo } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";


const BeARider = () => {
    const { register, handleSubmit, control } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [step, setStep] = useState(1);

    const serviceCenters = useLoaderData();

    const regions = useMemo (
        () => serviceCenters.map(c => c.region),  []
    );

    const riderRegion = useWatch({ control, name: "region" });

    const districts = useMemo(() => {
        return (
            serviceCenters.find(c => c.region === riderRegion)?.districts || []
        );
    }, [riderRegion]);


    const handleRiderApplication = data => {
        axiosSecure.post("/riders", data).then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Application submitted!",
                    text: "We will contact you soon 🚴‍♂️",
                    timer: 2000,
                    showConfirmButton: false
                });
            }
        });
    };

    return (
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-green-600 mb-10">
                🚴‍♂️ Be a Rider
            </h2>

            {/* Step Indicator */}
            <div className="flex justify-center mb-8 gap-2">
                {[1, 2, 3].map(s => (
                    <div
                        key={s}
                        className={`w-10 h-2 rounded-full ${step >= s ? "bg-green-500" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>

            <form
                onSubmit={handleSubmit(handleRiderApplication)}
                className="bg-white p-8 rounded-2xl shadow-lg"
            >
                {/* STEP 1 */}
                {step === 1 && (
                    <>
                        <h3 className="text-2xl font-semibold mb-6">Rider Details</h3>

                        <input
                            {...register("name")}
                            defaultValue={user?.displayName}
                            placeholder="Name"
                            className="input input-bordered w-full mb-4"
                        />

                        <input
                            {...register("email")}
                            defaultValue={user?.email}
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />
                    </>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <>
                        <h3 className="text-2xl font-semibold mb-6">Address</h3>

                        <select
                            {...register("region")}
                            className="select select-bordered w-full mb-4"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Pick a region
                            </option>
                            {regions.map(r => (
                                <option key={r} value={r}>
                                    {r}
                                </option>
                            ))}
                        </select>

                        <select
                            {...register("district")}
                            className="select select-bordered w-full mb-4"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Pick a district
                            </option>
                            {districts.map(d => (
                                <option key={d} value={d}>
                                    {d}
                                </option>
                            ))}
                        </select>

                        <input
                            {...register("address")}
                            placeholder="Full Address"
                            className="input input-bordered w-full"
                        />
                    </>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                    <>
                        <h3 className="text-2xl font-semibold mb-6">More Details</h3>

                        <input
                            {...register("license")}
                            placeholder="Driving License"
                            className="input input-bordered w-full mb-4"
                        />

                        <input
                            {...register("nid")}
                            placeholder="NID Number"
                            className="input input-bordered w-full mb-4"
                        />

                        <input
                            {...register("bike")}
                            placeholder="Bike Model"
                            className="input input-bordered w-full"
                        />
                    </>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-10">
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={() => setStep(step - 1)}
                            className="btn btn-outline"
                        >
                            Back
                        </button>
                    )}

                    {step < 3 ? (
                        <button
                            type="button"
                            onClick={() => setStep(step + 1)}
                            className="btn bg-green-500 text-black"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="btn bg-linear-to-r from-green-500 to-green-400 text-black"
                        >
                            Submit Application
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default BeARider;
