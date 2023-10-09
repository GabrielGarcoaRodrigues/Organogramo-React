import Card from '../Card'
import './Time.css'

const Time = (props) => {
    if(props.colaboradores.length === 0){
        return null
    } 
    return (
        <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.titulo}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Card key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corPrimaria={props.corPrimaria}/>)}
            </div>
        </section>
        
    )
}

export default Time