const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" },
      ],
    },
    {
      id: 2,
      title: "Aprendendo Redux",
      lessons: [
        { id: 3, title: "Terceira aula" },
        { id: 4, title: "Quarta aula" },
      ],
    },
  ],
};

//O reducer recebe dois parametros.
//O primeiro é o estado anterior antes da alteração
//Recebe uma action como segundo parametro
export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    console.log(action);
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
