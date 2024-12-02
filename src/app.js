import { useState } from "react";
import Header from "./components/header";
import FeedbackList from "./components/feedbacklist";
import FeedbackData from "./data/feedbackdata";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
      }
    }

  return (
    <>
      <Header />
      <div className="container">
      <FeedbackForm />
      <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback}
        handleDelete={deleteFeedback}
        />
    
      </div>
    </>
  );
}

export default App;