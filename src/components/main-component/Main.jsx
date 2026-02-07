import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context.jsx'

const Main =()=> {

const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  // ADD THIS ARRAY
  const promptSuggestions = [
    {
      text: "Suggest beautiful places to see on an upcoming road trip",
      icon: assets.compass_icon
    },
    {
      text: "Briefly summarize this concept: urban planning", 
      icon: assets.bulb_icon
    },
    {
      text: "Brainstorm team bonding activities for our work retreat",
      icon: assets.message_icon
    },
    {
      text: "Improve the readability of the following code",
      icon: assets.code_icon
    },
    // You can easily add more here!
    {
      text: "Explain React hooks with simple examples",
      icon: assets.code_icon
    },
    {
      text: "Create a study plan for data structures",
      icon: assets.bulb_icon
    }
  ];

  return (
    <div className='main'>
       <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon}></img>
        </div>
        <div className='main-container'>

            {!showResult
            ?<>
            <div className='greet'>
                <p><span>Hello, Dev..</span></p>
                <p>How can i help you today</p>
            </div>
            <div className="cards">
              {promptSuggestions.slice(0, 4).map((suggestion, index) => (
                <div 
                  key={index} 
                  className="card" 
                  onClick={() => onSent(suggestion.text)}
                >
                  <p>{suggestion.text}</p>
                  <img src={suggestion.icon} alt="" />
                </div>
              ))}
            </div>

           

            
            </>
            : <div className='result'>
                <div className='result-title'>
                    <img src={assets.user_icon}></img>
                    <p>{recentPrompt}</p>

                </div>
                <div className='result-data'>
                    <img src={assets.gemini_icon}></img>
                    {loading
                    ?<div className='loader'>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>

                    </div>
                    :<p dangerouslySetInnerHTML = {{__html:resultData}}></p>
                    }
                    

                </div>




            </div>
            }
            
            <div className='main-bottom'>
                <div className='search-box'>
                    <input onChange = {(e)=>setInput(e.target.value)} value = {input} type='text' placeholder='Enter a prompt here'></input>
                    <div>
                        <img src={assets.gallery_icon} alt=''></img>
                        <img src={assets.mic_icon} alt=''></img>
                      {input?<img onClick={()=>onSent()} src={assets.send_icon} alt=''></img>:null}  
                    </div>
                   
                </div>
                 <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people,so double check its responses. your privocy and Gemini Apps
                    </p>

            </div>
            </div> 
       
    </div>
  )
}

export default Main