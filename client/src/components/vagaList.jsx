import VagaCard from './vagaCard.jsx';
import axios from 'axios';

const vagasData = await axios.get('http://localhost:5000/vagas');
console.log("vagas",vagasData)
function VagaList() {
    return (
        <div className='vagas-list'> 

            {vagasData.data.map(vaga => (
                <VagaCard
                    key={vaga.id}
                    Titulo={vaga.Titulo}
                    Descricao={vaga.Descricao}
                    Salario={vaga.Salario}
                    DataLimite={vaga.DataLimite}
                />
            ))}
             
        </div>
    )
}

console.log(vagasData.data)

export default VagaList;