/** 
  Task 1: In the Vote box, add a downvote button to the right of Upvote.
  Task 2: The number in the red box indicates the number of total vote received. It should be incremented by 1 when Upvote is pressed and decremented by 1 when downvote is pressed.
  Task 3: Each button will remain in the pressed position after it is clicked. If it is clicked again, the vote will be canceled. For instance, if Upvote is clicked, then the total vote is 1, but if Upvote is clicked again, total vote becomes 0. Only one button can remain in the pressed position. For instance, if Upvote is pressed down and the vote is 1, when Downvote is clicked, Upvote will automatically bounce and Downvote will be pressed down. Total vote changes from 1 to -1. This guarantess that the vote can only have 3 possible values: -1, 0, and 1 
**/
function Vote({ onVote, isDarkMode }) {
  const [vote, setVote] = React.useState(null);

  const handleUpvote = () => {
    if (vote === "upvote") {
      setVote(null);
      onVote(0);
    } else {
      setVote("upvote");
      onVote(1);
    }
  };

  const handleDownvote = () => {
    if (vote === "downvote") {
      setVote(null);
      onVote(0);
    } else {
      setVote("downvote");
      onVote(-1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-bold mb-4">Vote</div>
      <div className="flex">
        <button
          onClick={handleUpvote}
          className={`px-4 py-2 mr-2 rounded ${
            vote === "upvote"
              ? "bg-green-500 text-white"
              : isDarkMode
              ? "bg-yellow-100 text-black hover:bg-green-200"
              : "bg-gray-200 hover:bg-green-200"
          }`}
        >
          Upvote
        </button>
        <button
          onClick={handleDownvote}
          className={`px-4 py-2 rounded ${
            vote === "downvote"
              ? "bg-red-500 text-white"
              : isDarkMode
              ? "bg-yellow-100 text-black hover:bg-red-200"
              : "bg-gray-200 hover:bg-red-200"
          }`}
        >
          Downvote
        </button>
      </div>
    </div>
  );
}

function Credit() {
  const [totalVotes, setTotalVotes] = React.useState(0);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleVotes = (voteChange) => {
    setTotalVotes((prevVotes) => {
      if (voteChange === 0) return 0;
      if (prevVotes === voteChange) return 0;
      return voteChange;
    });
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("bg-gray-100");
    document.body.classList.toggle("bg-gray-800");
    document.body.classList.toggle("text-white");
    document.querySelector(".card").classList.toggle("bg-white");
    document.querySelector(".card").classList.toggle("bg-grey-900");
    document.querySelector(".card").classList.toggle("text-white");
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white card">
      <div className="mb-4 text-center">
        <div className="text-xl font-bold mb-2">Total Votes Received</div>
        <div
          className={`shadow-sm w-16 h-16 rounded-full mx-auto text-lg font-semibold flex items-center justify-center`}
          style={{
            borderColor: isDarkMode ? "yellow" : "blue",
            borderWidth: "2px"
          }}
        >
          {totalVotes}
        </div>
      </div>
      <Vote onVote={handleVotes} isDarkMode={isDarkMode} />
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleThemeToggle}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 ml-2"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<Credit />, document.getElementById("root"));
