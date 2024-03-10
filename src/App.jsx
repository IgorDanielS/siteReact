import { getImageUrl } from './utils.js';

function Menu({
    link,
    titulo,
    link2,
    titulo2,
    link3,
    titulo3,
}){
  return(
    <>
    <div className="menu">
      <a className="tituloHeader" href={link}>  <h1>{titulo}</h1></a>
      <a className="tituloHeader" href={link2}> <h1>{titulo2}</h1></a>
      <a className="tituloHeader" href={link3}> <h1>{titulo3}</h1></a>
    </div>
    </>
  );
}
function Catalogo({
  nome,
  img,
  desc,
  preco,


}) {
  return (
    <>    
    <div className="item">
      <div className="item-img">
       <img className="item-img-alterar" src={img}/>
      </div>
      <div className="item-nome">
        <h3 className='item-nome-texto'>{nome}</h3>
      </div>
      <div className="item-info">
        <div className="item-desc">
          <p className="item-desc-texto">{desc}</p>
        </div>
        <div className="item-preco">
          <p className="item-preco-text">{preco}</p>
        </div>
      </div>    
    </div>

      
      
      
    </>
  );
}

export default function Gallery() {
  return (
      
      <><Menu
      link="https://www.google.com/"
      titulo="HOME"
      link2="https://www.google.com/"
      titulo2="CATÁLOGO"
      link3="https://www.google.com/"
      titulo3="SOBRE"
      />

      <div className="catalogo-container">
      <Catalogo
      img="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/soladosa/catalog/2413/2413-marco-r-347-00-preto-1.JPG"
      nome="Sapato social"
      desc="Sapato social para eventos sociais"
      preco="R$300,00"
      />
      <Catalogo
      img="https://i.pinimg.com/236x/6f/16/23/6f16231fed3803d73646e9cb0900f7b6.jpg"
      nome="Sapato social"
      desc="Sapato social para eventos sociais"
      preco="R$300,00"
      />
      <Catalogo
      img="https://static.vecteezy.com/ti/fotos-gratis/p1/2200284-sapato-vermelho-sobre-fundo-branco-gratis-foto.jpg"
      nome="Sapato social"
      desc="Sapato social para eventos sociais"
      preco="R$300,00"
      />
       <Catalogo
      img="https://cloviscalcados.vteximg.com.br/arquivos/ids/633379-460-460/Tenis-Chuck-Taylor-Cano-Alto-Converse-All-Star-CT04940004-0320494_045-01.jpg?v=637577448332730000"
      nome="Sapato social"
      desc="Sapato social para eventos sociais"
      preco="R$300,00"
      />
       <Catalogo
      img="https://www.zapatillas-minimalistas.com/16819-home_default/groundies-universe-nubuck-mulher.jpg"
      nome="Sapato social"
      desc="Sapato social para eventos sociais"
      preco="R$300,00"
      />
       <Catalogo
      img="https://img.freepik.com/fotos-premium/tenis-sapatos-isolados-no-fundo-branco-vista-lateral_849973-11.jpg"
      nome="Sapato social"
      desc="Sapato social para eventos sociais"
      preco="R$300,00"
      />
      

      </div>
      </>
  );
}