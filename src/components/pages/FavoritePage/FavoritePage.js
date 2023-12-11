import { Link } from 'react-router-dom';

const FavoritePage = () => {
  return <div>
    FavoritePage<br/>
    <Link to="/catalog">Catalog</Link><br/>
    <Link to="/catalog/autoId">single_Catalog</Link>
  </div>;
};

export default FavoritePage;