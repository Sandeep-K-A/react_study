import { Formik, Field, ErrorMessage, Form } from "formik"
import { loginSchema } from "../validations/loginSchema"
import ReCAPTCHA from "react-google-recaptcha"

const Login = () => {
    const initialValues = {
        email: "",
        password: "",
        recaptcha: ""
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={(values) => { console.log(values) }}>
                {({ setFieldValue }) => (
                    <Form className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
                        <h1 className="mb-6 text-center text-3xl font-bold">
                            Login
                        </h1>

                        {/* Email */}
                        <div className="mb-4">
                            <Field
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full rounded border p-3 outline-none focus:border-blue-500"
                            />

                            <ErrorMessage
                                name="email"
                                component="p"
                                className="mt-1 text-sm text-red-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <Field
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full rounded border p-3 outline-none focus:border-blue-500"
                            />

                            <ErrorMessage
                                name="password"
                                component="p"
                                className="mt-1 text-sm text-red-500"
                            />
                        </div>

                        <div className="mb-6">
                            <ReCAPTCHA
                                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                onChange={(token) => {
                                    setFieldValue("recaptcha", token);
                                }}
                            />

                            <ErrorMessage
                                name="recaptcha"
                                component="p"
                                className="text-red-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded bg-blue-600 py-3 text-white hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login