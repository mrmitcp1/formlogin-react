import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Home from "./component/home";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const acounts = [{
    email:'viet@gmail.com',
    password:'1'
  }]
  const [form,setForm]=useState({email:'',password:'',isRemember: false})
  const [isValid,setValid] = useState(false)
  const [isLoggIn,setLogin] = useState(false)
  const [message,setMessage] = useState('')

   const handleChange = (event) => {
   form[event.target.name]=event.target.value
     setForm({...form})
     checkValidForm()
  }

  const handleChangeCheckbox = () => {
   form.isRemember = !form.isRemember
    setForm({...form})
    checkValidForm()
  }

  const checkValidForm = () =>{
    const {email,password} = form
    let checkAcount = acounts.find(item=>item.email===email&&item.password===password)
    if (checkAcount){
      setValid(true)
    }
    else {
      setValid(false)
    }
  }

  const handleSubmit = () =>{
    if (isValid){
      setLogin(true)
    }else {
      setMessage('sai thong tin')
    }
  }

  const handleLogOut = () =>{
    if (!form.isRemember){
      form.email=''
      form.password=''
      setForm({...form})
      setMessage('')
    }
    setLogin(false)
  }

  if (isLoggIn) return (<Home onLogOut = {handleLogOut} />)
  return (
      <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
          <form>
            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            {message}
            <div className="form-floating">
              <input className="form-control email" type="email" name="email" placeholder="name@example.com" value={form.email} onChange={handleChange} />
              <label>Email address</label>
            </div>
            <div className="form-floating">
              <input className="form-control password" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
              <label>Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" checked={form.isRemember} onChange={handleChangeCheckbox} /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleSubmit} >Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
          </form>
        </div>
      </div>
  );
}

export default App;
