import './App.css';
import OrangeFarm from './OrangeFarm';
import Revenue from './Revenue';
import LostDeals from './LostDeals';
import Goal from './Goal';
import Customers from './Customers';
import TopMonth from './TopMonth';
import TopYear from './TopYear';
import TopBuyer from './TopBuyer';
import Chats from './Chats';

function App() {
  return (
    <div className="App">
      <OrangeFarm/>
      <Revenue/>
      <LostDeals/>
      <Goal/>
      <Customers/>
      <TopMonth/>
      <TopYear/>
      <TopBuyer/>
      <Chats/>
    </div>
  );
}

export default App;
