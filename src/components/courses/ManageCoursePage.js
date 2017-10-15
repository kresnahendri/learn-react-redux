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
  }

  render() {
    return (
      <div>
        <CourseForm
          course={this.state.course}
          allAuthors={[]}
          errors={this.state.errors} />
      </div>
    )
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
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

  return { course }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
