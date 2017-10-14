import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: {
        title: null
      }
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  onTitleChange(e) {
    const course = this.state.course
    course.title = e.target.value
    this.setState({
      course: course
    })
  }

  onClickSave(e) {
    this.props.dispatch(courseActions.createCourse(this.state.course))
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Courses</h2>

        <input
          type="text"
          value={this.state.course.title}
          onChange={this.onTitleChange} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    )
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  debugger
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CoursesPage)
