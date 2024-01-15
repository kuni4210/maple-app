import axios from "axios";
import https from "https";

export const getCashItemEquipments = async (ocid) => {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://open.api.nexon.com/maplestory/v1/character/cashitem-equipment',
        headers: {
          'Content-Type': 'application/json',
          'x-nxopen-api-key': `test_b2b2462ae85c2546580ceb55369a9275e09a40323c57bf3046843f3b126a225be18fea57c288bd5d130f55bd1232dcd7`,
        },
        params: new URLSearchParams({
          ocid: ocid,
          date: '2023-12-21'
        }),
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })

      return response.data;
    } catch (err) {
        throw err
    }
}