import assets from './assets/index'
import Projects from './components/Projects'
import Tags from './components/Tags'

const App = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center min-h-screen'>
      <div className='w-full max-w-2xl'>
        <div className='mx-10 lg:mx-0 selection:bg-slate-700 selection:text-white'>
          <div className='flex flex-row justify-center items-start mb-1 w-full'>
            <div className='flex flex-row justify-between items-center w-full mb-0 animate-fade_1'>

              <div className='flex flex-row justify-between items-center'>
                <h1 className='text-lg text-slate-900 mr-20'>Michail Christoforatos</h1>

                <div className='gap-2 flex flex-row justify-start items-center mx-4 select-none'>
                  <a href="https://twitter.com/cht5m" target='_blank' className='h-4 w-4 text-slate-600 hover:text-slate-700 transition-colors'><img src={assets.twitter} alt="twitter" /></a>
                  <a href="https://linkedin.com/in/michahl" target='_blank' className='h-4 w-4 text-slate-600 hover:text-slate-700 transition-colors'><img src={assets.linkedin} alt="linkedin" /></a>
                  <a href="https://github.com/michahl" target='_blank' className='h-4 w-4 text-slate-600 hover:text-slate-700 transition-colors'><img src={assets.github} alt="github" /></a>
                </div>  
              </div>            
            </div>
          </div>
          {/*<p className='text-sm text-slate-500 animate-fade_2'>
            Software Engineer proficient in building digital products. Skilled with tools like VSCode, Postman, and Git. Experienced with Next.js, TypeScript, React, Tailwind, Node, Express, MongoDB, and SQL. Currently learning Swift. I enjoy football, gaming, and spending time with my family.
          </p>*/}
          <Tags />
          <Projects />
          <div className='mt-5 animate-fade_3'>
            <p className='border-b pb-1'>latest blog 📖</p>

            <a href="https://blog.michahl.com/post/66c71a63777bc4f4cc9f0d43" target='_blank'>
              <div className='flex flex-row justify-between items-center text-sm mt-2 group cursor-pointer animate-fade_4'>
                <div className='flex flex-col'>
                  <p className='group-hover:underline text-slate-900'>typescript function syntaxes</p>
                  <p className='text-slate-600'>examples of typescript function syntaxes</p>
                </div>
                <p className='text-xs text-slate-900'>22/8/2024</p>
              </div>
            </a>

          </div>
          <div className='flex flex-col justify-start mt-5'>
            <div className='animate-fade_5'>
              <div className='flex items-center'>
                {/*<img src={assets.pointer} alt="pointer" className='w-4 h-4 mr-1' />*/}
                <p className='text-sm text-slate-500'>Sparti, Greece</p>
              </div>
              <a href="mailto:hi@michahl.com" className='text-sm text-slate-700'>hi@michahl.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
