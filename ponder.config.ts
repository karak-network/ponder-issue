import { createConfig } from "ponder";
import { erc20ABI } from "./abis/erc20ABI";

export default createConfig({
  database: {
    kind: "postgres",
    connectionString: "postgresql://postgres:postgres@localhost:5432/ponder",
  },
  chains: {
    arbitrumSepolia: {
      id: 421614,
      rpc: "https://arbitrum-sepolia-rpc.publicnode.com",
      disableCache: true,
    },
  },
  contracts: {
    ERC20: {
      abi: erc20ABI,
      chain: {
        arbitrumSepolia: {
          address: "0x5d9a35f697A70Ea6b24d5388188DbBc54cD26823",
          startBlock: 181216269,
        },
      },
    },
  },
});
