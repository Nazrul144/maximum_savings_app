import React from 'react'
import UserLandingPageCard from './UserLandingPageCard/UserLandingPageCard'

const Fasion = () => {
  return (
    <div>
       <div className="flex flex-col items-center justify-center pt-22">
            <h1 className={`text-[#000000] font-bold text-5xl ${interFont.className}`}>Fashion</h1>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 pt-11">
                {/*Card*/}
                <UserLandingPageCard imageName="fashion_style" descriptionBoldText="Paucek and Lage –"
                    descriptionLightText="Happy World Rainforest Day 🌿" descriptionFont={interFont} buttonName="Redeem"
                    buttonFont={montSerrat} bookMarkIcon="bookmark" />

                <UserLandingPageCard imageName="black_friday" descriptionBoldText="Paucek and Lage –"
                    descriptionLightText="Happy World Rainforest Day 🌿" descriptionFont={interFont} buttonName="Redeem"
                    buttonFont={montSerrat} bookMarkIcon="bookmark" />

                <UserLandingPageCard imageName="autumn_fashion_sale" descriptionBoldText="Paucek and Lage –"
                    descriptionLightText="Happy World Rainforest Day 🌿" descriptionFont={interFont} buttonName="Redeem"
                    buttonFont={montSerrat} bookMarkIcon="bookmark" />
            </div>

            <button className={`bg-[#00308F] text-[#FFFFFF] mt-12 px-6 py-2 rounded-sm ${montSerrat.className}`}>
                View All {'>>'}</button>
        </div >
    </div>
  )
}

export default Fasion
