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
    <div>
      <form action="submit">
        <h1>Signup</h1>
        <div>
          <label htmlFor="fname"></label>
          <input type="text" name="fname"/>
        </div>

        <div>
          <label htmlFor="email"></label>
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