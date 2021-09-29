import axios from "axios";  
import FormData from 'form-data';

export const openPortNmap = async (req, res) => {
  const { target } = req.body;
  let targetId = "";

  var data = new FormData();
  data.append("scan_type", "single");
  data.append("command", "ping");
  data.append("schedule", "now");
  data.append("target", target);

  var config = {
    method: "post",
    url: "https://api.nmap.online/v01/start_scan",
    headers: {
      "NMAP-API-KEY": "bctib1ttoyhzdudtuyyduw0pxpsmcyvkwd5otvnws2exsxfn",
      "Content-Type": "multipart/form-data",
      Cookie: "PHPSESSID=c2qkl8fd06ovd5nb6fipdf82n5",
      ...data.getHeaders(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log("🚀 ~ file: nmap.controller.js ~ line 29 ~ JSON.stringify(response.data)", JSON.stringify(response.data))
      targetId = response.data.scan_id;
    })
    .catch(function (error) {
      console.log(error);
    });

    
  var data = new FormData();
  data.append("scan_id", targetId);

  var config = {
    method: "post",
    url: "https://api.nmap.online/v01/scan_result",
    headers: {
      "NMAP-API-KEY": "bctib1ttoyhzdudtuyyduw0pxpsmcyvkwd5otvnws2exsxfn",
      Cookie: "PHPSESSID=c2qkl8fd06ovd5nb6fipdf82n5",
      ...data.getHeaders(),
    },
    data: data,
  };

  const result = await axios(config)
    .then(function (response) {
      console.log("🚀 ~ file: nmap.controller.js ~ line 52 ~ JSON.stringify(response.data)", JSON.stringify(response.data))
      return JSON.stringify(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return res.json(result);
};
