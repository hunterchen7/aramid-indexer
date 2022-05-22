import algosdk from 'algosdk';
import { CustomTokenHeader } from 'algosdk/dist/types/src/client/urlTokenBaseHTTPClient';

const getAlgodClient = () => {
  const host = 'https://testnet-api.k8s.aramid.finance';
  const port = 443;
  const tokenHeader = 'X-Algo-API-Token';
  const token = '';
  const auth: CustomTokenHeader = {};
  auth[tokenHeader] = token;
  return new algosdk.Algodv2(auth, host, port);
};
export default getAlgodClient;
