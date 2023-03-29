import { useForm } from 'react-hook-form';
import { RouterProvider } from 'react-router-dom';
import router from '../router/router';
import './App.css';

function App() {

  const { register, handleSubmit } = useForm();

  const handleLogin = data => {
    console.log(data);
  }

  return (
    <div className="App">
      <RouterProvider router={router} />


      {/* Put this part before </body> tag */}
      <input type="checkbox" id="login_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="login_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className=' flex'>
            <div className="w-full max-w-xs">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(handleLogin)}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                    email
                  </label>
                  <input {...register("email")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                  </label>
                  <input {...register('password')} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                  <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                  <input value="Sign In" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" />

                  <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                  </a>
                </div>
              </form>
              <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
              </p>
            </div>
            <div>
              <button className=' btn btn-primary w-full'>Login With Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default App;
