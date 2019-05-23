import { WalletCreated } from "./types/WalletFactory/WalletFactory";
import { ContractBasedAccount } from "./types/schema";

export function handleNewWallet(event: WalletCreated): void {
  let contractBasedAccount = new ContractBasedAccount(
    event.params._wallet.toHex()
  );
  contractBasedAccount.owner = event.params._owner;
  contractBasedAccount.save();
}
