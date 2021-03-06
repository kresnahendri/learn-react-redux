import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as courseActions from '../../actions/courseActions'

import CourseForm from './CourseForm'

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    }

    this.updateCourseState = this.updateCourseState.bind(this)
  }

  updateCourseState(event) {
    const field = event.target.name
    let course = this.state.course
    course[field] = event.target.value

    this.setState({ course })
  }

  render() {
    return (
      <div>
        <CourseForm
          course={this.state.course}
          allAuthors={this.props.authors}
          onChange={this.updateCourseState}
          errors={this.state.errors} />
      </div>
    )
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => {
  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    category: '',
    length: ''
  }

  let authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    }
  })

  return {
    course,
    authors: authorsFormattedForDropdown
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
