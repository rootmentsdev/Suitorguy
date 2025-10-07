import { useState } from "react";
import bgimg from "../assets/image@2x.png";
import { IoPersonOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        const formURL = "https://script.google.com/macros/s/AKfycbzkJQMuZnW--6uPvzzT2ZLeL9YZ-YBvxtIdScR-LOJgFNJOPuzM8rfZfXtDu3hlHeTUYg/exec";
        const formDataToSubmit = new FormData();
        formDataToSubmit.append("fullName", formData.fullName);
        formDataToSubmit.append("email", formData.email);
        formDataToSubmit.append("phone", formData.phone);
        formDataToSubmit.append("message", formData.message);

        try {
            await fetch(formURL, {
                method: "POST",
                mode: "no-cors", // Google Forms require this
                body: formDataToSubmit,
            });

            setMessage("Message sent successfully ✅");
            setFormData({ fullName: "", email: "", phone: "", message: "" }); // Reset form
        } catch (error) {
            setMessage(`Error sending message ❌`, error);
        }
        setLoading(false);
    };

    return (
        <div
            style={{ backgroundImage: `url(${bgimg})` }}
            className="w-full h-[120vh] bg-cover bg-center BonaNova relative flex justify-center items-center"
        >
            {/* Transparent black overlay */}
            <div className="absolute inset-0 bg-[#0427B999]/40"></div>

            <div className="absolute top-[100px] md:left-[100px] left-[50px] BonaNova text-white">
                <h4 className="md:text-xl">Get In Touch</h4>
                <h2 className="text-2xl md:text-6xl">
                    We'd Love to <br />
                    Hear From You
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="">
                <div className="relative top-[140px] md:mx-0 mx-5 text-white text-xl BonaNova z-10">
                    <div className="flex flex-col gap-5">
                        {/* Full Name Field */}
                        {/* <div className="relative md:w-[450px] m-auto w-[300px]">
                            <div className="absolute inset-y-0 left-3 flex items-center text-white z-10">
                                <IoPersonOutline />
                            </div>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full sm:w-[100px] pl-10 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 BonaNova"
                            />
                        </div> */}
                        <div className="relative md:w-[450px] m-auto w-[300px]">
                            <div className="absolute inset-y-0 left-3 flex items-center text-white z-10">
                                <IoPersonOutline />
                            </div>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 BonaNova"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="relative md:w-[450px] m-auto w-[300px]">
                            <div className="absolute inset-y-0 left-3 flex items-center text-white z-10">
                                <CiMail />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 BonaNova"
                            />
                        </div>

                        {/* Phone Number Field */}
                        <div className="relative md:w-[450px] m-auto w-[300px]">
                            <div className="absolute inset-y-0 left-3 flex items-center text-white z-10">
                                <FiPhone />
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 BonaNova"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="relative md:w-[450px] m-auto w-[300px]">
                            <textarea
                                name="message"
                                placeholder="Type your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full h-[200px] pl-5 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 BonaNova"
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="float-right cursor-pointer bg-white text-black py-2 px-10"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {/* Message Status */}
                    {message && (
                        <p className="text-white text-center mt-4">{message}</p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default GetInTouch;
