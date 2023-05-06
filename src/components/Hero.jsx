import { logo } from '../assets';


const Hero = () => {
  return (
    <header className="w-full flex
    justify-center items-center flex-col">

      <nav className="flex justify-between
      items-center w-full mb-10 pt-3">

        <img src={logo} alt="sumz_logo" 
        className="w-28 object-contain"/>

      
       <button
         type="button"
         onClick={() => window.open('https://github.com/nawabsahab16/ai-website')}
         className="black_btn"
         >
         Github 
       </button>

      </nav>

      <h1 className="head_text">
        Summarize Articles with <br
        className="max-md:hidden"/>
        <span className= "blue_gradient">OpenAI GPT-4 </span>

      </h1>

      <h2 className="desc">
          
      
        Don't have time to read every article in full? Summize has got you covered. Our Open-Source summarizer transforms lengthy pieces into clear, concise summaries that get straight to the point. With Summize, you can stay informed without sacrificing your precious time. Give it a try today.

        
      </h2>

    </header>
  )
}

export default Hero