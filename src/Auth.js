import { Linking } from "react-native";

const BINANCE_AUTH_URL = "https://accounts.binance.com/oauth/authorize";
const CLIENT_ID = "your_client_id";
const REDIRECT_URI = "your_redirect_uri";
const RESPONSE_TYPE = "code";

export const loginWithBinance = () => {
  const authUrl = `${BINANCE_AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  Linking.openURL(authUrl);
};
