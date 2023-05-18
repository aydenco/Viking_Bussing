import Background from '../assets/images/teton-range.jpg';
import PriceTable from '../components/mui/PriceTable'

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}}
      className='flex-inline flex- justify-center mx-auto bg-cover bg-fixed'>
      <div className='flex flex-column place-items-center h-screen'>
        {/* <h1 className='p-5 bg-sky bg-opacity-50 text-black font-semi rounded-xl text-6xl'>Viking Bussing</h1> */}
      </div>
      <PriceTable/>
  </div>
  )
}

export default Home