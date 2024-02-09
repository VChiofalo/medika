    import Header from '../components/header'
    import GraphCard from '../components/cards/graph_card'
    import WeightCard from '../components/cards/weight_card'
    import IccCard from '../components/cards/icc_card'

function AnimalWeightPage() {
    
    return <>
        <Header title="Poid" linkTo="/animal_profil_page"/>
        <GraphCard/>
        <div className='flex justify-center'>
            <WeightCard/>
            <IccCard/>
        </div>
    </>
  }
  export default AnimalWeightPage;