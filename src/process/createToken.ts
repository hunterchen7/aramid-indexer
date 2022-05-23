import insertToken from '../repository/insertToken';
import getIndexerClient from '../algo/getIndexerClient';
import { Token } from '../generated/graphql';

const createToken = async (asa: number, env: string) => {
  const indexer = getIndexerClient();
  const data = await indexer.lookupAssetByID(asa).do();
  const token: Token = {
    asa: asa,
    creator: data.asset.params.creator,
    manager: data.asset.params.manager,
    clawback: data.asset.params.clawback,
    freeze: data.asset.params.freeze,
    reserve: data.asset.params.reserve,
    env: env,
    name: data.asset.params.name,
    url: data.asset.params.url,
    unit: data.asset.params['unit-name'],
    total: data.asset.params.total,
    decimals: data.asset.params.decimals,
    created_at_round: data.asset['created-at-round'],
    id: 0,
    created_at: undefined,
    updated_at: undefined,
    icon: '',
  };
  return await insertToken(token);
};
export default createToken;
