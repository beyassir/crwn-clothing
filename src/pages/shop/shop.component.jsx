import React from 'react';

import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
class ShopPage extends React.Component{
    constructor(props){
        super();
        this.state = SHOP_DATA;
    }
    render(){
        const {collections} = this.state;
        return(
        <div className="shop-page">
            {
                this.state.map(({id, ...OtherCollectionProps}) => (
                     (
                        <CollectionPreview key={id} {...OtherCollectionProps} />
                    )
                ))
            }
        </div>);
    }
}

export default ShopPage;