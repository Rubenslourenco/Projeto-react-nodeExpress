import { useEffect ,useState } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";


function Home() {
  const [users, setUsers] = useState([])

  async function getUsers() {
   const usersFromApi = await api.get('/usuarios')

   setUsers(usersFromApi.data)
   
  }

  useEffect(() =>{
      getUsers()
  }, [])

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuarios</h1>
        <input placeholder="Nome" type="text" name="nome" id="" />
        <input  placeholder="Idade" type="number" name="idade" id="" />
        <input placeholder="E-mail" type="email" name="email" id="" />
        <button type="button">Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}
    
    </div>
  );
}

export default Home;
