import { useFamiliars } from '../../hooks/useFamiliars';
import Familiar from './Familiar';

export default function Familiars() {
  const { familiars } = useFamiliars();

  return (
    <div className="home">
      <h1>Check out this incredible list of familiars!</h1>
      <div>
        {familiars.map((familiar) => (
          <Familiar key = {familiar._id}{...familiar}/>
        ))}
      </div>
    </div>
  );
}