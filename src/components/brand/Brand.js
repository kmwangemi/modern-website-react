import {
   google,
   slack,
   atlassian,
   dropbox,
   shopify
} from './imports'

import './brand.css'

const Brand = () => {
   return (
      <div className='gpt3__brand section__padding'>
         <div>
            <img src={google} loading='lazy' alt="google" />
         </div>
         <div>
            <img src={slack} loading='lazy' alt="slack" />
         </div>
         <div>
            <img src={atlassian} loading='lazy' alt="atlassian" />
         </div>
         <div>
            <img src={dropbox} loading='lazy' alt="dropbox" />
         </div>
         <div>
            <img src={shopify} loading='lazy' alt="shopify" />
         </div>
      </div>
   )
}

export default Brand
