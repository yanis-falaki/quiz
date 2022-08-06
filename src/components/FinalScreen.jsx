export const FinalScreen = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: "0" }}>Your score was:</h1>
        <h1 style={{ margin: "0" }}>
          {props.score}/{props.quizLength}
        </h1>
        <button style={{ marginTop: "30px" }} onClick={props.reset}>
          Try Again?
        </button>
      </div>
    </>
  );
};
