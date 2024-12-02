import {useState} from 'react'
import Card from "./shared/Card"
import Button from './shared/Button'

function FeedbackForm() {
  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
  <Card>
    <form >
      <h2>
        rate stuff
        </h2>
        {/*rating select stuff*/}
        <div className="input-group">
          <input onChange={handleTextChange} 
          type="text" 
          placeholder="leave review"
          value={text}
          />
          <Button type="submit" version='secondary'>
            Send
          </Button>
        </div>
    </form>
  </Card>
  )
}

export default FeedbackForm
