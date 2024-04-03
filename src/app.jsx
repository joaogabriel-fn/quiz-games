import { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'set_api_data') {
    return { ...state, apiData: action.apiData };
  }

  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    currentQuestion: 0,
    apiData: [],
  });

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/joaogabriel-fn/fake-data/main/videogame-questions.json?token=GHSAT0AAAAAACQPV72HBZ4CDJFHGSBOAO7OZQNMXBA',
    )
      .then((r) => r.json())
      .then((apiData) => dispatch({ type: 'set_api_data', apiData }))
      .catch((err) => alert(err.message));
  }, []);
  return (
    <div className="app">
      <main className="main">
        <h4>Pergunta</h4>
        <ul className="options">
          <li>
            <button className="btn btn-option">Resposta</button>
          </li>
          <li>
            <button className="btn btn-option">Resposta</button>
          </li>
          <li>
            <button className="btn btn-option">Resposta</button>
          </li>
          <li>
            <button className="btn btn-option">Resposta</button>
          </li>
        </ul>
        <div>
          <button className="btn btn-ui">Próxima</button>
        </div>
      </main>
    </div>
  );
};

export { App };
