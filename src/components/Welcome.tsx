import data from '../../package.json';
import TheCopy from './icons/TheCopy';
import TheGithub from './icons/TheGithub';

function handleCopy() {
  navigator.clipboard.writeText(
    `
git clone git@github.com:nurRiyad/react-init.git
cd react-init
rm -rf .git && git init && git add .
git commit -s -m "Initial Commit"
npm install
code . && npm run dev
    `
  );
}

export default function Welcome() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-20">
        <div className="pb-10">
          <h1 className="text-4xl font-bold text-cyan-700 text-center">React Init</h1>
          <p className="text-cyan-700 pt-3">
            A simple boilerplate for react to start building quickly
          </p>
        </div>
        <div>
          <ul className="flex gap-4 flex-wrap max-w-5xl justify-center items-center">
            <li className="p-4 bg-cyan-700 text-white rounded-md hover:scale-110 transition-all">
              React {data.dependencies.react}
            </li>
            <li className="p-4 bg-cyan-700 text-white rounded-md hover:scale-110 transition-all">
              Vite {data.devDependencies.vite}
            </li>
            <li className="p-4 bg-cyan-700 text-white rounded-md hover:scale-110 transition-all">
              React Dom {data.dependencies['react-dom']}
            </li>
            <li className="p-4 bg-cyan-700 text-white rounded-md hover:scale-110 transition-all">
              React Router {data.dependencies['react-router-dom']}
            </li>
            <li className="p-4 bg-cyan-700 text-white rounded-md hover:scale-110 transition-all">
              TailwindCss {data.devDependencies.tailwindcss}
            </li>

            <li className="p-4 bg-cyan-700 text-white rounded-md hover:scale-110 transition-all">
              Typescript {data.devDependencies.typescript}
            </li>
            <li className="p-4 bg-cyan-700 text-white rounded-md hover:scale-110 transition-all">
              EsLint {data.devDependencies.tailwindcss}
            </li>
            <li className="p-4 bg-cyan-700 text-white rounded-md hover:scale-110 transition-all">
              Prettier {data.devDependencies.prettier}
            </li>
          </ul>
        </div>

        <div className="flex items-end font-mono p-6 m-10 bg-gray-300 rounded-lg">
          <div>
            <p>git clone git@github.com:nurRiyad/react-init.git</p>
            <p>cd react-init</p>
            <p>rm -rf .git && git init && git add .</p>
            <p>git commit -s -m "Initial Commit"</p>
            <p>npm install</p>
            <p>code . && npm run dev</p>
          </div>
          <div
            onClick={() => handleCopy()}
            className="w-6 cursor-pointer hover:scale-105 transition-all"
          >
            <TheCopy />
          </div>
        </div>

        <div>
          <a href="https://github.com/nurRiyad/react-init">
            <TheGithub />
          </a>
        </div>
      </div>
    </>
  );
}
