import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

import feijoada from "../images/feijoada.png"

export default class Test extends React.Component {

  componentWillMount() {
    this.setState({
      children: [feijoada],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: createChildren(20),
      })
    }, 100);
  }


  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={5}
        minimumPlaceholderTime={1000}
        placeholderItem={<div style={{ height: 150, background: '#900' }}>Placeholder</div>}

        // Carousel configurations
        numberOfCards={1}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}

        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}

        chevronWidth={24}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );  
  }
} 

const createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);
