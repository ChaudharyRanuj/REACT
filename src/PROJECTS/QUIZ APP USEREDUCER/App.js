import React from "react";
import { useReducer, useEffect } from "react";
import Header from "./Header";
import StarterScreen from "./StarterScreen";
import Question from "./Question";
import Error from "./Error";
import Loader from "./Loader";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";
import Main from "./Main";
import Footer from "./Footer";
const initialState = {
  questions: [],
  totalPoints: 0,
  index: 0,
  answer: null,
  errorMessage: null,
  status: "LOADING",
  seconds: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "READY":
      return {
        ...state,
        questions: [...action.payload],
        status: action.type,
      };
    case "ACTIVE":
      return {
        ...state,
        status: action.type,
        seconds: state.questions.length * 60,
      };
    case "TIMER":
      const secondRemaining = state.seconds - action.payload;
      return {
        ...state,
        seconds: secondRemaining,
        status: secondRemaining === 0 ? "FINISH QUIZ" : state.status,
      };
    case "ANSWERED":
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        totalPoints:
          action.payload === question.correctOption
            ? state.totalPoints + question.points
            : state.totalPoints,
      };
    case "NEXT QUESTION":
      return { ...state, index: action.payload, answer: null };
    case "FINISH QUIZ":
      return {
        ...state,
        status: action.type,
      };
    case "RESTART QUIZ":
      return {
        ...initialState,
        questions: state.questions,
        status: "READY",
      };
    case "ERROR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}

export default function App() {
  const [
    { questions, status, index, answer, errorMessage, totalPoints, seconds },
    dispatch,
  ] = useReducer(reducer, initialState);
  console.log(seconds);
  const totalQuestions = questions.length;
  const maximumPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(function () {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "READY", payload: data }))
      .catch((err) => dispatch({ type: "ERROR", payload: err.message }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "LOADING" && <Loader />}
        {status === "ERROR" && <Error errorMessage={errorMessage} />}
        {status === "READY" && <StarterScreen dispatch={dispatch} />}
        {status === "ACTIVE" && (
          <>
            <ProgressBar
              index={index}
              totalQuestions={totalQuestions}
              answer={answer}
              totalPoints={totalPoints}
              maximumPoints={maximumPoints}
            />
            <Question
              questions={questions}
              index={index}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <>
                <Timer dispatch={dispatch} seconds={seconds} />
               { answer !== null && <NextButton
                  dispatch={dispatch}
                  index={index}
                  totalQuestions={totalQuestions}
                />}
              </>
            </Footer>
          </>
        )}
      </Main>

      {status === "FINISH QUIZ" && (
        <FinishScreen
          dispatch={dispatch}
          maximumPoints={maximumPoints}
          totalPoints={totalPoints}
        />
      )}
    </div>
  );
}
