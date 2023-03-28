import { useState } from 'react'

const BarryMelrose = (props) => {
  const [results, setResults] = useState(['Paladin', 'Bard', 'Rogue'])
  return (
    <>
      <div>
        <h3>Barry Melrose</h3>
      </div>
    </>
  );
}
 
export default BarryMelrose;