import axios from 'axios';
import { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { login, search } from '../../helpers/axios-api-client';

export const LoginForm = () => {
  const handleLogin = async (email, password) => {
    /*  await login(email, password);
    axios
      .post('https://nox-podcast-api.vercel.app/login', { email: 'test@example.com', password: '123456' })
      .then((data) => console.log(data))
      .catch(console.log('nonono')); */

    await search({ text: 'v' });
  };

  /* axios
    .post('https://nox-podcast-api.vercel.app/login', { email: 'test@example.com', password: '123456' })
    .then((data) => console.log(data.data))
    .catch(console.log('nonono')); */

  return (
    <div>
      <button
        className="bg-white"
        onClick={() => {
          axios
            .get('https://nox-podcast-api.vercel.app/search?text=v')
            .then((data) => console.log(data))
            .catch(console.log('nonono'));
        }}
      >
        search
      </button>
      <button
        className="bg-white mx-2"
        onClick={() => {
          axios
            .post('https://nox-podcast-api.vercel.app/login', { email: 'test@example.com', password: '123456' })
            .then((data) => console.log(data.data))
            .catch(console.log('nonono'));
        }}
      >
        Login
      </button>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.table(values);
          handleLogin(values.email, values.password);
        }}
      >
        {(formik) => {
          return (
            <Form>
              <div className="w-5/6 space-y-4 mx-auto mt-20">
                <div className="flex items-center text-lg mb-6 md:mb-8 bg-transparent border border-gray-800 rounded-lg rounded-br-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentcolor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <Field
                    className="w-full px-4 py-2 text-white bg-transparent focus:ring-0 focus:outline-none "
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="E-mail address"
                  />
                </div>
                <div className="flex items-center text-lg mb-6 md:mb-8 bg-transparent border border-gray-800 rounded-lg rounded-br-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentcolor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <Field
                    className="w-full px-4 py-2 text-white bg-transparent focus:outline-none"
                    type="password"
                    name="password"
                    label="password"
                    placeholder="Password"
                  />
                </div>

                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  className={`py-2 px-4 bg-blue-600 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-2xl shadow-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full`}
                  type="submit"
                >
                  Login
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
