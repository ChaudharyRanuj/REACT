import { useContext, createContext, useEffect, useReducer, React } from "react";

const SECS_PER_QUESTION = 30;
const LOADING = "LOADING";
const READY = "READY";
const ACTIVE = "ACTIVE";
const ERROR = "ERROR";

const NEW_ANSWER = "NEW ANSWER";
const TIMER = "TIMER";
const ANSWERED = "ANSWERED";
const FINISH_QUIZ = "FINISH QUIZ";
const RESTART_QUIZ = "RESTART QUIZ";
const NEXT_QUESTION = "NEXT QUESTION";

const QuizContext = React.createContext();

const initialState = {
  questions: [],
  totalPoints: 0,
  index: 0,
  answer: null,
  errorMessage: null,
  status: LOADING,
  seconds: null,
};

function reducer(state, action) {
  switch (action.type) {
    case READY:
      return {
        ...state,
        questions: [...action.payload],
        status: action.type,
      };
    case ACTIVE:
      return {
        ...state,
        status: action.type,
        seconds: state.questions.length * SECS_PER_QUESTION,
      };
    case TIMER:
      const secondRemaining = state.seconds - action.payload;
      return {
        ...state,
        seconds: secondRemaining,
        status: secondRemaining === 0 ? FINISH_QUIZ : state.status,
      };
    case ANSWERED:
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        totalPoints:
          action.payload === question.correctOption
            ? state.totalPoints + question.points
            : state.totalPoints,
      };
    case NEXT_QUESTION:
      return { ...state, index: action.payload, answer: null };
    case FINISH_QUIZ:
      return {
        ...state,
        status: action.type,
      };
    case RESTART_QUIZ:
      return {
        ...initialState,
        questions: state.questions,
        status: READY,
      };
    case ERROR:
      return { ...state, errorMessage: action.payload, status: action.type };
    default:
      return state;
  }
}

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, errorMessage, totalPoints, seconds },
    dispatch,
  ] = useReducer(reducer, initialState);

  const totalQuestions = questions.length;
  const maximumPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(function () {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "READY", payload: data }))
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err.message });
      });
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        errorMessage,
        totalPoints,
        seconds,
        dispatch,
        totalQuestions,
        maximumPoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
function useQuiz() {
  const context = useContext(QuizContext);
  return context;
}

export { QuizProvider, useQuiz };
