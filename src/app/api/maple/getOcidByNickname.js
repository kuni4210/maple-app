import axios from "axios";
import https from "https";

export const getOcidByNickname = async (characterName) => {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://open.api.nexon.com/maplestory/v1/id',
        headers: {
          'Content-Type': 'application/json',
          'x-nxopen-api-key': `test_b2b2462ae85c2546580ceb55369a9275e09a40323c57bf3046843f3b126a225be18fea57c288bd5d130f55bd1232dcd7`,
        },
        params: new URLSearchParams({
          character_name: characterName,
        }),
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })
      
      return response.data.ocid;
    } catch (err) {
      console.log(err)
       throw err
    }
}