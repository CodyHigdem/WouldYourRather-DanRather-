import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { handleQuestionAnswer } from '../actions/questions'
import { Link, withRouter } from "react-router-dom"

class Question extends Component {
render(){
	console.log('******************vvvvvvv')
    console.log(this.props)
	console.log('******************^^^^^^^')
	const { question } = this.props
	console.log('questionwill be: ', question)
    if (question === null){
      return <p> This Question doesnt exist yo! </p>
    }

    const {
      name, avatar, timestamp, id, optionOne, optionTwo
    } = question





	    return (


<div >
      <p>     
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className="avatar"
        /> {name} asks "Would you rather..." </p>


        <div className="question-info">
          <div>
            <span> {name} </span>
            <div> {formatDate(timestamp)} </div>


          </div>
        <div className="tweet-icons">

        </div>
      </div>

    </div>


    )
}


}


//optionOneText, optionTwoText, author 



function mapStateToProps({ authedUser, users, questions }, { id }){
  const question = questions[id]

  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser)

    /*question
      ? formatQuestion ({ optionOneText:"optionOneText", optionTwoText:"optionTwoText", author: "author" })
      : null
      */
  }
}

export default connect(mapStateToProps)(Question)

//export default connect(mapStateToProps)(Question)
//export default Question
//export default withRouter(connect(mapStateToProps)(Tweet))