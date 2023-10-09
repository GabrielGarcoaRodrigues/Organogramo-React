import './App.css';
import Banner from './componentes/Banner/index';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';
function App() {

  const times = [
    {
      nome: 'Programador',
      corPrimaria: '#57c782',
      corSecundaria: '#D9f7e9',
    },
    {
      nome: 'Designer',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff',
    },
    {
      nome: 'Analista',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2',
    },
    {
      nome: 'Front-end',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8',
    },
    {
      nome: 'Back-end',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5d9',
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)} times={times.map( time => time.nome)}/>
      {times.map(time => {
          return <Time 
              titulo={time.nome} 
              corPrimaria={time.corPrimaria} 
              corSecundaria={time.corSecundaria} 
              key={time.nome}
              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />
      })}
    
    </div>
  );
}

export default App;
