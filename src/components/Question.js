import Answer from "./Answer";

const Question = ({questions}) => {
    console.log("question", questions);
    return <div>
        <div className="question">Text of the question</div>
        <div className="answers">
            <Answer/>
            <Answer/>
            <Answer/>
            <Answer/>
        </div>
    </div>;
};

export default Question;