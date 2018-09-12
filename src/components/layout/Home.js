import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render () {
    console.log(this.props);
    return (
      <div>
        Home
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, null)(Home);
