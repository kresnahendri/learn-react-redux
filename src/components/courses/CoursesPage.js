import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as courseActions from '../../actions/courseActions'

import CourseList from './CourseList'

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: {
        title: ''
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
    this.props.actions.createCourse(this.state.course)
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    const { courses } = this.props
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />

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
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired // option 1
  actions: PropTypes.object.isRequired // option 2
}

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course)) // option 1
    actions: bindActionCreators(courseActions, dispatch) // option 2
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
