import Imagem from './assets/image.svg';
import BgCardOne from './assets/image.png';
import BgCardTwo from './assets/image (1).png';
import BgCardThree from './assets/image (2).png';
import BgCardFour from './assets/image (3).png';
import BgCardFive from './assets/image (4).png';
import BgCardSix from './assets/image (5).png';

const App = () => {
  return (
    <>
      <main className="w-full p-10">
        <div className="flex items-center justify-between max-w-6xl m-auto w-full max-md:flex-col gap-4">
          <div className="flex flex-col gap-4 items-start max-md:order-1">
            <h1 className="font-semibold max-w-md text-3xl max-md:text-xl">
              Encontre os{' '}
              <span className="text-violet-600">melhores artigos </span> de
              programação em um só lugar
            </h1>
            <p className="font-normal text-xl max-w-lg">
              Explore o topo da programação em um só lugar! Seu destino único
              para dicas e tendências atuais.
            </p>

            <a
              className="mt-5 bg-purple-500 text-white px-7 py-2 font-bold rounded"
              href="#"
            >
              Buscar artigos
            </a>
          </div>

          <img src={Imagem} alt="" />
        </div>
      </main>

      <section className="max-w-6xl m-auto w-full">
        <h2 className="font-bold text-2xl max-md:text-center">Artigos recomendados</h2>

        <ul className="mt-16 grid gap-5 grid-cols-3 max-md:grid-cols-1 px-3">
          <li className="flex flex-col gap-2">
            <div
              className="h-32"
              style={{ backgroundImage: `url('${BgCardOne}')` }}
            ></div>
            <div className="flex flex-col gap-2 p-3">
              <h3 className="font-medium">
                O que é linguagem de programação? Conheça as principais
              </h3>
              <p>
                Uma das mais populares vertentes da tecnologia da informação, a
                área de...
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-2">
            <div
              className="h-32"
              style={{ backgroundImage: `url('${BgCardTwo}')` }}
            ></div>
            <div className="flex flex-col gap-2 p-3">
              <h3 className="font-medium">
                Python: por que a linguagem é tão usada para Data Science e
                finanças?
              </h3>
              <p>
                O mundo da programação conta com algumas opções de linguagem
                para...
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-2">
            <div
              className="h-32"
              style={{ backgroundImage: `url('${BgCardThree}')` }}
            ></div>
            <div className="flex flex-col gap-2 p-3">
              <h3 className="font-medium">
                GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários O
                popular serviço de repositório de código GitHub foi adquirido
                pela...
              </h3>
              <p>
                O popular serviço de repositório de código GitHub foi adquirido
                pela...
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-2">
            <div
              className="h-32"
              style={{ backgroundImage: `url('${BgCardFour}')` }}
            ></div>
            <div className="flex flex-col gap-2 p-3">
              <h3 className="font-medium">
                15 comandos no GIT que os desenvolvedores precisam saber
              </h3>
              <p>
                Dominar os comandos GIT é uma habilidade que se conquista com...
              </p>
            </div>
          </li>
          <li className="flex flex-col gap-2">
            <div
              className="h-32"
              style={{ backgroundImage: `url('${BgCardFive}')` }}
            ></div>
            <div className="flex flex-col gap-2 p-3">
              <h3 className="font-medium">
                GIT e GitHub: o que são e quais as diferenças entre eles?
              </h3>
              <p>
                Git e GibHub são dois softwares e controle de versão essenciais
                para...
              </p>
            </div>
          </li>
          <li className="max-h-full- flex flex-col gap-2">
            <div
              className="h-32"
              style={{ backgroundImage: `url('${BgCardSix}')` }}
            ></div>
            <div className="flex flex-col gap-2 p-3">
              <h3 className="font-medium">
                GitHub Copilot ganha integração com GPT-4 e interface
                conversacional
              </h3>
              <p>
                O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...
              </p>
            </div>
          </li>
        </ul>
      </section>

      <footer className="mt-12 p-10  bg-slate-100 w-full flex items-center justify-center">
        <form className="flex flex-col gap-3 min-w-96  max-md:px-4">
          <h2 className="font-bold text-center mb-5 text-2xl">
            Entre em contato
          </h2>

          <input
            type="text"
            placeholder="Nome"
            className="bg-white w-full font-medium px-3 py-2 text-xl rounded outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-white w-full font-medium px-3 py-2 text-xl rounded outline-none"
          />

          <textarea
            className="bg-white w-full font-medium resize-none px-3 py-2 text-xl rounded outline-none"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <a href='#' className="mt-5 bg-purple-500 text-white px-7 py-2 font-bold rounded">
            Enntrar em contato
          </a>
        </form>
      </footer>
    </>
  );
};

export default App;
