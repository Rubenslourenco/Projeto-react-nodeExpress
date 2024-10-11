import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "213543584864",
      name: "Rubens",
      idade: "28",
      email: "rubens@gmail.com",
    },
    {
      id: "9746545465864",
      name: "Aline",
      idade: "33",
      email: "line@gmail.com",
    },
  ];
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
            <p>Idade: <span>{user.idade}</span></p>
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
