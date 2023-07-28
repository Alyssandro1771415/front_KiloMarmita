import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import "./Carousel.css"

import feijoada from "../images/feijoada.png"
import kilomarmita from "../images/kilomarmita.png"
import lasanha from "../images/lasanha.png"

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: createChildren(),
      activeItemIndex: 1,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.changeSlide, 5000); // 30 seconds
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeSlide = () => {
    const { activeItemIndex } = this.state;
    const numChildren = this.state.children.length;
    const nextSlideIndex = (activeItemIndex + 1) % numChildren;
    this.setState({ activeItemIndex: nextSlideIndex });
  };

  render() {
    const { activeItemIndex, children } = this.state;

    return (
      <ItemsCarousel
        // Placeholder configurations
        numberOfPlaceholderItems={3}
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

        chevronWidth={250}
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
  <div className='container d-flex justify-content-center' key="feijoada" style={{ height: 400, width: 600 }}>
    <img src={feijoada} alt="Feijoada" style={{ width: '85%', height: '100%' }} />
  </div>,
  <div className='container d-flex justify-content-center' key="kilomarmita" style={{ height: 400, width: 600 }}>
    <img src={kilomarmita} alt="Kilomarmita" style={{ width: '85%', height: '100%' }} />
  </div>,
  <div className='container d-flex justify-content-center' key="lasanha" style={{ height: 400, width: 600 }}>
    <img src={lasanha} alt="Lasanha" style={{ width: '85%', height: '100%' }} />
  </div>
];
