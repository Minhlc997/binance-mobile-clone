import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, ScrollView } from "react-native";
import axios from "axios";
import { loginWithBinance } from "./src/auth";

const App = () => {
  const [balance, setBalance] = useState(10000); // Số dư ảo
  const [amount, setAmount] = useState(0.01); // Lượng BTC
  const [price, setPrice] = useState(50000); // Giá BTC
  const [orders, setOrders] = useState([]); // Lệnh giao dịch

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

  const placeOrder = (type) => {
    const cost = amount * price;
    if (type === "buy" && cost > balance) {
      Alert.alert("Lỗi", "Không đủ số dư!");
      return;
    }

    const newOrder = {
      type,
      amount,
      price,
      time: new Date().toLocaleTimeString(),
    };

    setOrders([newOrder, ...orders]);

    if (type === "buy") {
      setBalance(balance - cost);
    } else {
      setBalance(balance + cost);
    }

    Alert.alert("Thành công", `${type === "buy" ? "Mua" : "Bán"} ${amount} BTC!`);
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Giao dịch Binance Futures</Text>
      <Text>Giá BTC: {price.toFixed(2)} USDT</Text>
      <Text>Số dư: {balance.toFixed(2)} USDT</Text>

      <TextInput
        placeholder="Số lượng BTC"
        keyboardType="numeric"
        value={amount.toString()}
        onChangeText={(text) => setAmount(parseFloat(text) || 0)}
        style={{ borderWidth: 1, padding: 5, marginVertical: 10 }}
      />

      <Button title="Mua BTC" onPress={() => placeOrder("buy")} />
      <Button title="Bán BTC" onPress={() => placeOrder("sell")} color="red" />

      <Button title="Đăng nhập Binance" onPress={loginWithBinance} />

      <Text style={{ marginTop: 20, fontSize: 18 }}>Lệnh giao dịch gần đây:</Text>
      {orders.map((order, index) => (
        <Text key={index} style={{ color: order.type === "buy" ? "green" : "red" }}>
          {order.time}: {order.type === "buy" ? "Mua" : "Bán"} {order.amount} BTC @ {order.price} USDT
        </Text>
      ))}
    </ScrollView>
  );
};

export default App;
