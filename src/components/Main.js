import { useQuiz } from "../contexts/QuizContext";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Timer from "./Timer";
import Progress from "./Progress";
import Question from "./Question";
import Footer from "./Footer";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";

function Main() {
  const { status } = useQuiz();
  return (
    <main className="main">
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
      {status === "ready" && <StartScreen />}
      {status === "active" && (
        <>
          <Progress />
          <Question />

          <Footer>
            <Timer />
            <NextButton />
          </Footer>
        </>
      )}
      {status === "finished" && <FinishScreen />}
    </main>
  );
}

export default Main;
