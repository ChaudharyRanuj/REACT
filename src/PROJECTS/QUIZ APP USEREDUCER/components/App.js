import { useQuiz } from "../context/QuizProvider";
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

export default function App() {
  const { status, answer } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "LOADING" && <Loader />}
        {status === "ERROR" && <Error />}
        {status === "READY" && <StarterScreen />}
        {status === "ACTIVE" && (
          <>
            <ProgressBar />
            <Question />
            <Footer>
              <>
                <Timer />
                {answer !== null && <NextButton />}
              </>
            </Footer>
          </>
        )}
      </Main>
      {status === "FINISH QUIZ" && <FinishScreen />}
    </div>
  );
}
