import React,{Component} from 'react';
import {View,Text,FlatList,Dimensions} from 'react-native';
import { connect } from 'react-redux';
import {requestAPI} from '../../redux/action'

var {height, width} = Dimensions.get('window');

const CardList = ({description,Language,url}) =>
{
    //console.log("response....",description,Language,);
    return (
        <View>
        <View style={{width:width,height:width/3,zindex:2,backgroundColor:'#fff',url,margin:5}}>
            <Text style={{color:'#88AAFF'}}>{url}</Text>
            <Text>{description}</Text>
            <Text>{Language}</Text>
           
            </View>
            
            </View>
           
    );

}
 class Overview extends Component
{
constructor(props)
{
    super(props);
    this.state={
       apiresponse : {}
    }
    
}

componentWillMount()
{
  this.callApi();
}

 callApi = () => 
{
    let mob = 'ritu'
    this.props.requestAPI(mob).then(response => {
       console.log("response....",JSON.stringify(response));
       this.setState({apiresponse:response})
    })
} 

//_keyExtractor = (item, index) => item.id;
_renderItem = (item,index) =>
{
     console.log("item...",item.item.description)
    console.log("item...",item.item.archive_url)
    return(
        <CardList  description={item.item.description} Language={item.item.language} url={item.item.languages_url}/>
    );
}
    render()
    {
        return(
            <View>
                <FlatList
                    data={this.state.apiresponse}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
      />
             </View>

        );
    }
}

export default connect(
    null,
    {
        requestAPI
    },
  )(Overview);