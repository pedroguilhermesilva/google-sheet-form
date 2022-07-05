type IFormInputs = {
  name: string;
  email: string;
  phone: string;
};

export default function Home() {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm<IFormInputs>();

  // const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
  //   // const data = { name, email, phone };
  //   console.log("data >>>", data);
  //   console.log("errors >>>", errors);

  //   await fetch("http://localhost:3000/api", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   });
  // };

  const handleSubmit = (e) => {
    e.prevantDefault();

    console.log("teste");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <div className="shadow-lg box-border h-auto w-auto sm:w-4/12 p-8 border-2 rounded-md bg-white">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-5">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Nome:
              </span>
            </label>
            <input
              className="w-full mt-1 px-3 py-2 border border-slate-300 
              rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
              focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              type="text"
              name="name"
              placeholder="Insira seu nome aqui"
            />
            {/* {errors && (
              <p className="mt-2 peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            )} */}
          </div>
          <div className="mb-5">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                E-mail:
              </span>
            </label>
            <input
              className="w-full mt-1 px-3 py-2 border border-slate-300 
              rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
              focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              type="email"
              name="email"
              placeholder="Insira seu e-mail aqui"
            />
            {/* {errors && (
              <p className="mt-2 peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            )} */}
          </div>
          <div className="mb-5">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Telefone:
              </span>
            </label>
            <input
              className="w-full mt-1 px-3 py-2 border border-slate-300 
              rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
              focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              type="phone"
              name="phone"
              placeholder="Insira seu telefone aqui"
            />
            {/* {errors && (
              <p className="mt-2 peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            )} */}
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </div>
  );
}
