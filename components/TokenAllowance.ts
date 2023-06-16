import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "mWx7PIHJ3HcB5msisjerHmzUFvshbDZI6VPZD9Z1fxkOn8buIXmTT8OcgqPM045z",
    // ...and any other configuration
  });

  const chain = EvmChain.ETHEREUM;

  const address = "";

  const ownerAddress = "";

  const spenderAddress = "";

  const response = await Moralis.EvmApi.token.getTokenAllowance({
    address,
    chain,
    ownerAddress,
    spenderAddress,
  });

  return response.toJSON();
};

export default runApp();
