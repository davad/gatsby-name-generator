import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '../Layout';
import ButtonPrimary from '../Buttons';

class RandomPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomName: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { names } = this.props;
    const random = Math.floor(Math.random() * names.length);
    this.setState({ randomName: names[random] });
  }

  render() {
    return (
      <Flex justify="center" wrap={['wrap', 'wrap', 'nowrap']}>
        <Box m={[1]} width={[1, 1 / 2, 1 / 4]}>
          <ButtonPrimary onClick={this.handleClick}>Random!</ButtonPrimary>
        </Box>
        <Box m={[1]} width={[1, 1 / 2, 1 / 2]} style={{ lineHeight: '3rem' }}>
          {this.state.randomName}
        </Box>
      </Flex>
    );
  }
}

RandomPicker.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default RandomPicker;
