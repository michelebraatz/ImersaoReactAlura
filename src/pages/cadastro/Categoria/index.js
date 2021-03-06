import React, { useState } from 'react';
import PageDefault from '../../../Components/PageDefault';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');


  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          nomeDaCategoria
        ]);
        
      }}>
        
        <div>
          <label>
            Nome da Categoria:
            <input type="text"
            value={nomeDaCategoria}
            onChange={function funcaoHandlerQueOErroPediu(infosDoEvento){
              setNomeDaCategoria(infosDoEvento.target.value);
            }}
            />
          </label>
        </div>

        <div>    
          <label>
            Descrição:
            <input type="text"
            value={nomeDaCategoria}
            onChange={function funcaoHandlerQueOErroPediu(infosDoEvento){
              setNomeDaCategoria(infosDoEvento.target.value);              
            }}
            />
          </label>
        </div>

        <div>    
          <label>
          Cor:
          <input type="color"
          value={nomeDaCategoria}
          onChange={function funcaoHandlerQueOErroPediu(infosDoEvento){
            setNomeDaCategoria(infosDoEvento.target.value);
          }}
          />
          </label>  
        </div>
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>

      {/* <Link to="/">
        Ir para home
      </Link> */}
    </PageDefault>
  )
}

export default CadastroCategoria;
