import axios from "axios";

export const getIfPwned = async (req, res) => {
    const { mail } = req.body
    console.log("🚀 ~ file: pwned.controller.js ~ line 5 ~ getIfPwned ~ req.body", req.body)
    
    var data = '';
    var config = {
      method: 'get',
      url: `https://haveibeenpwned.com/api/v3/pasteaccount/${mail}`,
      headers: { 
        'hibp-api-key': '519e2eabc579476383e07589b2d7c9bd',
      },
      data : data
    };
    
    let result = null;
    await axios(config)
    .then((response) => {
    //   console.log(JSON.stringify(response.data));
      result = response.data;
    })
    .catch((error) => {
      console.log(error);
      result = false;
    });

   return res.json(result);
};


