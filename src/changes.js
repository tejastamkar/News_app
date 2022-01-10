import React, {components} from 'react';
import ImageCarousel from 'react-elastic-carousel';

class App extends components{
    state={
        items: [
            {id: 1, title: 'item #1'},
            {id: 2, title: 'item #2'}
        ]
    }
    render(){
        const{items}= this.state;
        return(
            <ImageCarousel>
                {items.map(item=> <div key={item.id}>{item.title}</div>)}
            </ImageCarousel>
        )
    }
}