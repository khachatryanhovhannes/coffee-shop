"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // console.log(data);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-white text-center">
        Get in Touch with Us
      </h1>
      <div className="flex flex-wrap justify-center items-stretch md:flex-nowrap ">
        <section className="w-full py-8 px-4 flex justify-center">
          <div className="w-full max-w-lg p-8 rounded shadow-md  border border-white text-center">
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Have a question, suggestion, or just want to say hello? We&apos;d
              love to hear from you! Reach out to us:
            </p>
            <div className="text-lg space-y-4">
              <div>
                <h3 className="text-2xl font-bold">Call Us</h3>
                <p>
                  Our friendly staff are ready to assist you with any inquiries
                  or reservations.
                </p>
                <p>
                  Phone number:
                  <a href="tel:+37499123456" className="text-yellow-400">
                    +374 99 123456
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Email Us</h3>
                <p>
                  Whether it&apos;s feedback or a partnership opportunity,
                  we&apos;re here to respond promptly.
                </p>
                <p>
                  Email:
                  <a href="mailto:info@sipspot.com" className="text-yellow-400">
                    info@sipspot.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 w-full flex flex-col items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg p-8 rounded shadow-md  border border-white"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-white text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? "bg-black border-red-500" : "bg-black"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">
                  {errors.name?.message?.toString()}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-white text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? "bg-black border-red-500" : "bg-black"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email?.message?.toString()}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-300 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline ${
                  errors.message ? "bg-black border-red-500" : "bg-black"
                }`}
                rows={5}
              />
              {errors.message && (
                <p className="text-red-500 text-xs italic">
                  {errors.message?.message?.toString()}
                </p>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-white text-black py-2 px-10 rounded-xl btn-primary"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
