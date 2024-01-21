import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import https from "https";
import { getOcidByNickname } from "../app/api/maple/getOcidByNickname";
import { getItemEquipments } from "../app/api/maple/getItemEquipments";
import { getCashItemEquipments } from "../app/api/maple/getCashItemEquipments";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemEquipments, setItemEquipments] = useState({
    item_equipment: [
      {
        item_equipment_part: "",
        item_equipment_slot: "",
        item_name: "",
        item_icon: "",
        item_description: "",
      },
    ],
  });

  const handleSearch = async () => {
    const ocid = await getOcidByNickname(searchTerm);
    const itemEquipments = await getItemEquipments(ocid);
    setItemEquipments(itemEquipments);
    const cashItemEquipments = await getCashItemEquipments(ocid);
    // console.log(itemEquipments)
    console.log(itemEquipments.item_equipment);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {/* Page title */}
          <h1 className="text-4xl font-bold mt-8 mb-4">메이플 장비 검색</h1>

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

          {/* Display table for itemEquipments */}
          <table className="mt-8 w-full border-collapse border border-gray-800">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-800 p-2">Icon</th>
                <th className="border border-gray-800 p-2">Name</th>
                <th className="border border-gray-800 p-2">Part</th>
                <th className="border border-gray-800 p-2">Slot</th>
                <th className="border border-gray-800 p-2">Description</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              {itemEquipments &&
                itemEquipments.item_equipment &&
                itemEquipments.item_equipment.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                  >
                    <td className="border border-gray-800 p-2">
                      <img
                        src={item.item_icon}
                        alt={item.item_name}
                        className="h-8 w-8"
                      />
                    </td>
                    <td className="border border-gray-800 p-2">
                      {item.item_name}
                    </td>
                    <td className="border border-gray-800 p-2">
                      {item.item_equipment_part}
                    </td>
                    <td className="border border-gray-800 p-2">
                      {item.item_equipment_slot}
                    </td>
                    <td className="border border-gray-800 p-2">
                      {item.item_description}
                    </td>
                    {/* Add more columns as needed */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* The rest of your content remains the same */}
      </div>

      {/* ... */}
    </main>
  );
}
