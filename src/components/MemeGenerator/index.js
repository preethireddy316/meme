/* eslint-disable prettier/prettier */

import {Component} from "react";

import "./index.css"

import {Container} from "./styledComponents"

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component{
    state={imgUrl:"",topText:"",bottomText:"",
    activeFontId:fontSizesOptionsList[0].optionId,isGenerated:false}

    changeUrl = (event)=>{
        this.setState({imgUrl : event.target.value})
    }

     generateImage=()=>{
        this.setState({isGenerated:true})
    }

    top=(event)=>{
        this.setState({topText:event.target.value})
    }

     bottom=(event)=>{
        this.setState({bottomText:event.target.value})
    }

    fontChange=(event)=>{
        this.setState({activeFontId:event.target.value})
    }

render(){
    const {imgUrl,bottomText,topText,isGenerated,activeFontId} = this.state
    return(
        <>
        <div className="cont">
            <form onSubmit={this.generateImage}>
            <h1>Meme Generator</h1>
            <label htmlFor="url">Image URL</label>
            <input id="url" type="input" onChange={this.changeUrl}/>
            <label htmlFor="top">Top Text</label>
            <input id="top" type="input" onChange={this.top}/>
            <label htmlFor="bottom">Bottom Text</label>
            <input id="bottom" type="input" onChange={this.bottom}/>
            <label htmlFor="font">Font Size</label>
            <select id="font" value={activeFontId} onChange={this.fontChange}>
            {fontSizesOptionsList.map(each=>
            <option key={each.optionId}>{each.displayText}</option>)}    
            </select>
            <button type="submit">Generate</button>
            </form>
        {isGenerated&&<Container data-testid="meme" imgUrl={imgUrl} activeFontId={activeFontId}>
                <p>{topText}</p>
                <p>{bottomText}</p>
        </Container>}
        </div>
        
        </>
    )
    }
}

export default MemeGenerator