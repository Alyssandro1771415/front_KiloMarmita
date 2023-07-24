import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

import feijoada from "../images/feijoada.png"
import kilomarmita from "../images/kilomarmita.png"
import lasanha from "../images/lasanha.png"

export default class Test extends React.Component {

  componentWillMount() {
    this.setState({
      children: [feijoada, kilomarmita, lasanha],
      activeItemIndex: 1,
    });

    setTimeout(() => {
      this.setState({
        children: createChildren(3),
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
        placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

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

const createChildren = () => [
    <div key="feijoada" style={{ height: 450, width: 800}}>
      <img src={feijoada} alt="Feijoada" style={{ width: '100%', height: '100%' }} />
    </div>,
    <div key="kilomarmita" style={{ height: 450, width: 800 }}>
      <img src={kilomarmita} alt="Kilomarmita" style={{ width: '100%', height: '100%' }} />
    </div>,
    <div key="lasanha" style={{ height: 450, width: 800 }}>
      <img src={lasanha} alt="Lasanha" style={{ width: '100%', height: '100%' }} />
    </div>
  ];
  
  
  
  
