import React from "react";
import SHOP_DATA from "./shop_data";
import Collection from "../../component/collection-component/collection-component";
class Shop extends React.Component{
    constructor(props){
        super()
        this.state={
            collection : SHOP_DATA
        }
    }
    render(){
        const {collection}=this.state
        return(<div>
            {collection.map(({id,...otherCollectionprops})=>
                <Collection key={id} {...otherCollectionprops} /> 
            )}
        </div>   
        )
    }
}
export default Shop