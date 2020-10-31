import axios from 'axios';
import https from 'https';
import { tenable } from '../../config';

/** @type {import("express").RequestHandler} */
export const getAssets = (req, res) => {
  // At request level
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const XApiKey = `accesskey=${tenable.accessKey};secretkey=${tenable.secretkey};`;
  axios
    .get(`${tenable.host}/rest/asset`, {
      httpsAgent: agent,
      headers: {
        'x-apikey': XApiKey,
      },
    })
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((err) => {
      return res.status(400).json({ error: 'Something went wrong' });
    });
};
