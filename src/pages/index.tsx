import Image from 'next/image'
import {useState} from 'react';
import axios from 'axios';
import https from 'https';
import {getOcidByNickname} from '../app/api/maple/getOcidByNickname'
import {getItemEquipments} from '../app/api/maple/getItemEquipments'
import {getCashItemEquipments} from '../app/api/maple/getCashItemEquipments'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async () => {
    const ocid = await getOcidByNickname(searchTerm)
    const itemEquipments = await getItemEquipments(ocid)
    const cashItemEquipments = await getCashItemEquipments(ocid)
    console.log(itemEquipments)
  }

return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {/* Your search input field */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter search term"
            className="border border-gray-300 px-3 py-2 rounded-md mr-2"
          />
          {/* Your search button */}
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>

        {/* The rest of your content remains the same */}
      </div>

      {/* ... */}
    </main>
  );
}
