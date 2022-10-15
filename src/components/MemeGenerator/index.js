import "./index.css"

import "./styledComponents.js"
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

const MemeGenerator extends Component{
    state={imgUrl:"",topText:"",bottomText:"",activeFontId:"",isGenerated:false}

    changeUrl = (event)=>{
        this.setState(event.target.value)
    }

    const generateImage=()=>{
        this.setState({isGenerated:true})
    }

render(){
    return(
        <>
        <div className="cont">
            <div>
            <h1>Meme Gene</h1>
            <label htmlFor="url">Image URL</label>
            <input id="url" type="input"/>
            <label htmlFor="top">Top Text</label>
            <input id="top" type="input"/>
            <label htmlFor="bottom">Bottom Text</label>
            <input id="bottom" type="input"/>
            <label htmlFor="font">Bottom Text</label>
            <select id="font" value={activeFontId} onChange={this.fontChange}>
            {fontSizesOptionsList.map(each=>
            <option key={each.optionId}>{each.displayText}</option>)}    
            </select>
            <button type="button" onClick={generateImage}>Generate</button>
            </div>
        {isGenerated&&<Container imgUrl={imgUrl} activeFontId={activeFontId}>
                <p>top</p>
                <p>bottom</p>
        </Container>}
        </div>
        
        </>
    )
    }
}

export default MemeGenerator