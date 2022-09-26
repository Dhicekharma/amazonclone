import React from 'react';
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <img
            className='home_img'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt=''
            />

            <div className='home_row'>

            <Product 
            id='12321341'
            title='The Lean Startup: How constant Innovation Creates'
            price={11.96}
            rating={5}
            image='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
             />

        <Product 
            id='12321341'
            title='The Lean Startup: How constant Innovation Creates'
            price={11.96}
            rating={5}
            image='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
             />


            </div>

            <div className='home_row'>
            <Product 
            id='12321341'
            title='The Lean Startup: How constant Innovation Creates'
            price={11.96}
            rating={5}
            image='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
             />

            <Product 
            id='12321341'
            title='The Lean Startup: How constant Innovation Creates'
            price={11.96}
            rating={5}
            image='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
             />

              <Product 
            id='12321341'
            title='The Lean Startup: How constant Innovation Creates'
            price={11.96}
            rating={5}
            image='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
             />

           
            </div>
            
            <div className='home_row'>
             <Product 
            id='12321341'
            title='The Lean Startup: How constant Innovation Creates'
            price={11.96}
            rating={5}
            image='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
             />

            

             </div>






        </div>
    )
}

export default Home;
