import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'flowbite-react'

function App() {
  const [count, setCount] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setCount(data))
  }, [])



  const handleAddUser = event => {
    // console.log('lol')
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user)
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)



    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const newUsers = [...count, data]
        setCount(newUsers)
        form.reset();
      })

    console.log(count)

  }
  return (
    <div className="text-3xl text-center mt-44 font-bold">
      <h1 >
        Hello world
        {count.map(user =>
          <p key={user.id}>{user.id} : {user.name} : {user.email}</p>

        )}

      </h1>

      <form onSubmit={handleAddUser} >
        <input type="text" name='name' /><br />
        <input type="email" name='email' /><br />
        <Button className='mx-auto'><input type="submit" value="Submit" /></Button>

      </form>


    </div>
  )
}

export default App
