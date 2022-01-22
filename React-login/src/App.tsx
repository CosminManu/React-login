import React, {useState} from 'react';
import './App.css';
import {useForm} from 'react-hook-form';

interface FormData{
  username: string
  password: string
  repeatPassword: string
  rememberMe: boolean
}

function App() {
  const [name] = useState();
  const {register, handleSubmit, formState: { errors }} = useForm<FormData>({mode: "onChange"});
  
  const onSubmitFct = handleSubmit(( {username, password, repeatPassword, rememberMe }) => {
    console.log(username, password, repeatPassword, rememberMe)
  })

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
            <div className="text-center font-medium-xl">AppName</div>
            <div className="text-3xl font-bold text-gray-900 mt-2 text-center">LogIn</div>

        </div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
            <form action="" className="space-y-6" onSubmit={onSubmitFct}>
                <div>
                    <label htmlFor="" className="text-sm font-bold text-gray-600 block">
                    Username
                </label>
                    <input {...register("username", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: 'Username too small'
                      },
                      maxLength: {
                        value: 12,
                        message: 'Username too big'
                      }
                    })} 
                    style={{borderColor: errors.username ? "red" : ""}}
                    type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
                    {errors.username && errors.username.message}
                </div>

                <div>
                    <label htmlFor="" className="text-sm font-bold text-gray-600 block">
                    Password
                </label>
                    <input {...register("password", {
                      required: true,
                      minLength: {
                        value: 4,
                        message: 'Password too small'
                      },
                      maxLength: {
                        value: 12,
                        message: 'Password too big'
                      },
                      pattern: {
                        value: /[a-zA-Z]{3}/,
                        message: 'only characters'
                      }
                    })} 
                    style={{borderColor: errors.password ? "red" : ""}}
                    type="password" className="w-full p-2 border border-gray-300 rounded mt-1"/>
                    {errors.password && errors.password.message}
                </div>

                <div>
                    <label htmlFor="" className="text-sm font-bold text-gray-600 block">
                    Repeat Password
                </label>
                    <input {...register("repeatPassword")} type="password" className="w-full p-2 border border-gray-300 rounded mt-1"/>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input {...register("rememberMe")} type="checkbox" className="h-4 w-4 text-blue-300 rounded"/>
                        <label htmlFor="" className="ml-2 text-sm text-gray-600">
                        Remember me
                    </label>
                    </div>
                    <a href="#" className="font-medium text-sm text-blue-500">
                    Forgot Password?
                </a>
                </div>

                <div>
                    <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Submit</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default App;
