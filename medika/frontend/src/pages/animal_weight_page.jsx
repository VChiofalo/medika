import Header from '../components/header'
import GraphCard from '../components/graph_card'
import WeightCard from '../components/weight_card'
import IccCard from '../components/icc_card'

function AnimalWeightPage() {
    
    return <>
        <Header/>
        <GraphCard/>
        <div className='flex justify-center'>
            <WeightCard/>
            <IccCard/>
        </div>
    </>
  }
  export default AnimalWeightPage;