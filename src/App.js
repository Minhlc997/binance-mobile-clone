import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import axios from "axios";
import "./src/i18n"; // Import đa ngôn ngữ

const App = () => {
  const [balance, setBalance] = useState(1000); // Số dư giả lập
  const [amount, setAmount] = useState(0.1); // Lượng BTC
  const [price, setPrice] = useState(50000); // Giá BTC mặc định

  useEffect(() => {
    fetchBTCPrice();
    const interval = setInterval(fetchBTCPrice, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchBTCPrice = async () => {
    try {
      const response = await axios.get(
        "https://testnet.binancefuture.com/fapi/v1/ticker/price?symbol=BTCUSDT"
      );
      setPrice(parseFloat(response.data.price));
    } catch (error) {
      console.error("Lỗi lấy giá BTC:", error);
    }
  };

  const buyBTC = () => {
    const cost = amount * price;
    if (cost > balance) {
      Alert.alert("Lỗi", "Không đủ số dư!");
    } else {
      setBalance(balance - cost);
      Alert.alert("Thành công", `Mua ${amount} BTC thành công!`);
    }
  };

  const sellBTC = () => {
    const revenue = amount * price;
    setBalance(balance + revenue);
    Alert.alert("Thành công", `Bán ${amount} BTC thành công!`);
  };

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Giao dịch Binance Futures</Text>
      <Text>Giá BTC hiện tại: {price.toFixed(2)} USDT</Text>
      <Text>Số dư USDT: {balance.toFixed(2)}</Text>
      <TextInput
        placeholder="Số lượng BTC"
        keyboardType="numeric"
        value={amount.toString()}
        onChangeText={(text) => setAmount(parseFloat(text) || 0)}
        style={{ borderWidth: 1, width: 200, padding: 5, marginVertical: 10 }}
      />
      <Button title="Mua BTC" onPress={buyBTC} />
      <Button title="Bán BTC" onPress={sellBTC} color="red" />
    </View>
  );
};

export default App;
