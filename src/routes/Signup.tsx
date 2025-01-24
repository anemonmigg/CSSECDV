/*
TODO: Signup form should accomodate the following fields:
- Full Name
- Email
- Phone Number
- Profile Photo
- Secure password
*/

function Signup() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form action="submit" className="h-2/3 w-1/5 bg-blue-300 rounded-3xl p-6 flex flex-col items-center">
        <h1 className="text-white text-6xl font-bold">Signup</h1>
        <div className="w-full flex flex-col">
          <label htmlFor="fname" className="text-2xl">First Name</label>
          <input type="text" name="fname"/>
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="email" className="text-2xl">Email</label>
          <input type="text" name="email"/>
        </div>

        <div>
          <label htmlFor="pnumber"></label>
          <input type="text" name="pnumber"/>
        </div>
        
        <div>
          <label htmlFor="profile-photo"></label>
          <input type="file" name="profile-photo"/>
        </div>

        <div>
          <label htmlFor="password"></label>
          <input type="password" name="password"/>
        </div>

        <button>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Signup