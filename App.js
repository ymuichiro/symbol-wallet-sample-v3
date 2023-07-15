import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
const { SymbolFacade } = require("symbol-sdk").facade;

export default function App() {
  // sample
  useEffect(() => {
    const facade = new SymbolFacade("testnet");
    const transaction = facade.transactionFactory.create({
      type: "transfer_transaction",
      signerPublicKey:
        "87DA603E7BE5656C45692D5FC7F6D0EF8F24BB7A5C10ED5FDA8C5CFBC49FCBC8",
      fee: 1000000n,
      deadline: 41998024783n,
      recipientAddress: "TCHBDENCLKEBILBPWP3JPB2XNY64OE7PYHHE32I",
      mosaics: [{ mosaicId: 0x7cdf3b117a3c40ccn, amount: 1000000n }],
    });
    console.log(transaction);
    const privateKey = new PrivateKey(
      "EDB671EB741BD676969D8A035271D1EE5E75DF33278083D877F23615EB839FEC"
    );
    const signature = facade.signTransaction(
      new NemFacade.KeyPair(privateKey),
      transaction
    );

    const jsonPayload = facade.transactionFactory.constructor.attachSignature(
      transaction,
      signature
    );
    console.log(jsonPayload);
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
