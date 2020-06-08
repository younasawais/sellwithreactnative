import React from 'react';
import Card from '../components/Card';

function ViewImageScreen(props){
    return(
        <Card secondLineText='149 $' description='Jacket for sale' 
        src={require("../assets/material2/jacket.jpg")} />
    )
}

export default ViewImageScreen;