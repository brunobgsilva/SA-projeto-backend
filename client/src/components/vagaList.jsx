import VagaCard from './vagaCard.jsx';
import axios from 'axios';

const vagasData = await axios.get('http://localhost:4545/vagas');
console.log("vagas",vagasData)
function VagaList() {
    return (
        <div className='vagas-list'> 

            {vagasData.data.map((vaga) => {
                <VagaCard
                    Titulo={vaga.Titulo}
                    Descricao={vaga.Descricao}
                    Salario={vaga.Salario}
                    DataLimite={vaga.DataLimite}
                />
            })}
             
            <VagaCard 
                Titulo={vagasData.data[0].Titulo} 
                Descricao={vagasData.data[0].Descricao} 
                Salario={vagasData.data[0].Salario} 
                DataLimite={vagasData.data[0].DataLimite} 
            />
            
            <VagaCard 
                Titulo={vagasData.data[1].Titulo} 
                Descricao={vagasData.data[1].Descricao} 
                Salario={vagasData.data[1].Salario} 
                DataLimite={vagasData.data[1].DataLimite} 
            />

            <VagaCard 
                Titulo={vagasData.data[2].Titulo} 
                Descricao={vagasData.data[2].Descricao} 
                Salario={vagasData.data[2].Salario} 
                DataLimite={vagasData.data[2].DataLimite} 
            />

            <VagaCard 
                Titulo={vagasData.data[3].Titulo} 
                Descricao={vagasData.data[3].Descricao} 
                Salario={vagasData.data[3].Salario} 
                DataLimite={vagasData.data[3].DataLimite} 
            />
        </div>
    )
}

console.log(vagasData.data)

export default VagaList;