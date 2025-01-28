/*
TODO: Signup form should accomodate the following fields:
- Full Name
- Email
- Phone Number
- Profile Photo
- Secure password
*/

import FormInput from "../components/FormInput"
import SubmitButton from "../components/SubmitButton"

function Signup() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form action="submit" className="h-2/3 lg:h-3/4 w-3/4 sm:w-2/3 md:w-1/3 lg:w-1/3 xl:w-1/5 bg-blue-300 rounded-3xl p-6 flex flex-col items-center gap-4 pb-16">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">Signup</h1>
        <FormInput name="Name"/>
        <FormInput name="Email"/>
        <FormInput name="Profile Picture"/>
        <FormInput name="Phone Number"/>
        <FormInput name="Password"/>
        <SubmitButton name="Signup"/>
      </form>
    </div>
  )
}

export default Signup