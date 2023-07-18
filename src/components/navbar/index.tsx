
import { SelectedPage } from '@/shared/types';
import Link from './LInk'

type Props = {
   isTopOfPage: boolean;
   selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void
}

function Navbar({isTopOfPage, selectedPage, setSelectedPage}: Props) {
   const flexBetween = "flex items-center justify-center"

   const navbarBackground =isTopOfPage ? '' : "bg-red-100 drop-shadow"


  return (
   <>
   
   <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={`https://play-lh.googleusercontent.com/mLvvgUXJVZeu-GbqWZfr8ug74V7d8Od9yU2AOvUUptiki9wIH-BJHataFTJI_J0TlQ`} height={50} width={50} />

            {/* RIGHT SIDE */}
  
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
              
              <Link 
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />


              <Link 
              page="Benefits" 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage} />

              <Link 
              page="Our Classes" 
              selectedPage={selectedPage}
               setSelectedPage={setSelectedPage} />

              <Link 
               page="Contact Us" 
               selectedPage={selectedPage}
               setSelectedPage={setSelectedPage}/>


               <p>Sign In</p>
               <button className='bg-red-500 p-2 text-black'>Learn more</button>
                              
              </div>
          </div>
        </div>
      </div>

    </div>
    </nav>


   </>
  )
}

export default Navbar