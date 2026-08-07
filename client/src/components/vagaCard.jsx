import './vagaCard.css';

function VagaCard({ Titulo, Descricao, Salario, DataLimite }) {
    return (
        <div className='vaga-card'>
            <p>Titulo: {Titulo}</p>
            <p>Descrição: {Descricao}</p>
            <p>Salario: {Salario}</p>
            <p>Data limite: {DataLimite}</p>
        </div>
    );
};

export default VagaCard;