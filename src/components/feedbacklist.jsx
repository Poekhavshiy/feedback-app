import PropTypes from 'prop-types'
import FeedbackItem from './feedbackitem'

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.lenght === 0) {
        return <p>no feedback yet</p>
    }

  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
          <FeedbackItem 
          key={item.id} 
          item={item}
          handleDelete={handleDelete} 
          />
        ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    irating: PropTypes.number.isRequired
  })
 ),
}

export default FeedbackList
