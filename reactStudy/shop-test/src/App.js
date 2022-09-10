import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login/Login';
import Join from './login/Join';
import Header from './fragment/Header';
import ItemForm from './item/ItemForm';
import Main from './main/Main';
import ItemDtl from './item/ItemDtl';
import CartList from './cart/CartList';
import OrderHist from './order/OrderHist';

function App() {
  return (
    // <Login></Login><
    <>
    <Header></Header>
    <Login></Login>
    </>
    // <Join></Join>
  );
}

export default App;
