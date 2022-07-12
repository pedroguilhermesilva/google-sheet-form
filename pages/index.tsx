import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type IFormInputs = {
  name: string;
  email: string;
  phone: string;
};

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Nome não pode ser vazio!"),
    email: yup
      .string()
      .email("Deve ser um email válido!")
      .required("E-mail não pode ser vazio!"),
    phone: yup
      .string()
      .min(12, "Telefone deve ter pelo menos 12 caracteres")
      .max(13, "Telefone deve ter no máximo 13 caracteres")
      .required("Telefone não pode ser vazio"),
  })
  .required();

export default function Home() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data: IFormInputs) => {
    const { name, email, phone } = data;

    const dataForm = { name, email, phone };

    await fetch("/api", {
      method: "POST",
      body: JSON.stringify(dataForm),
    });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-800">
      <div className="shadow-lg box-border h-auto w-auto sm:w-4/12 p-8 border-2 rounded-md bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="mb-5">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Nome:
              </span>
            </label>
            <input
              className={`w-full mt-1 px-3 py-2 border border-slate-300 
              rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              ${
                errors.name
                  ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500"
                  : "focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              }`}
              type="text"
              name="name"
              placeholder="Insira seu nome aqui"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && (
              <p className="mt-2 peer-invalid:visible text-pink-600 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                E-mail:
              </span>
            </label>
            <input
              className={`w-full mt-1 px-3 py-2 border border-slate-300 
              rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              ${
                errors.email
                  ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500"
                  : "focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              }`}
              type="email"
              name="email"
              placeholder="google-sheet-form@.com"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <p className="mt-2 peer-invalid:visible text-pink-600 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">
                Telefone:
              </span>
            </label>
            <input
              className={`w-full mt-1 px-3 py-2 border border-slate-300 
              rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none 
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              ${
                errors.phone
                  ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500"
                  : "focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              } `}
              type="phone"
              name="phone"
              placeholder="(00) 00000-0000"
              {...register("phone", {
                required: true,
              })}
            />
            {errors.phone && (
              <p className="mt-2 peer-invalid:visible text-pink-600 text-sm">
                {errors.phone.message}
              </p>
            )}
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
