import Question from "./Question";
import {useContext} from "react";
import {QuizContext} from "../context/quiz";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return <div className="quiz">
        <div>
            <div className="score">Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
            <Question/>
            <div className="next-button" onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Next question</div>
        </div>
    </div>;
};

export default Quiz;