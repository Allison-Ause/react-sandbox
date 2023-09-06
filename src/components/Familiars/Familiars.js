import { fetchFamiliars } from '../../services/familiars';
import Familiar from './Familiar';

export default function Familiars() {
  // create api service call then import here to bring in familiars
  //const familiars = fetchFamiliars();
  //console.log('familiars:', familiars);

  return (
    <div>
      <h1>Check out this incredible list of familiars!</h1>
      {/* {familiars.map((familiar) => (
        <div key = {familiar.id}>
          <Familiar {...familiar}/>
        </div>
      ))} */}
    </div>
  );
}