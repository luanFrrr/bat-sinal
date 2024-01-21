import { Image, View } from "react-native";
import styles from "./styles";
import batLogo from "../assets/bat-logo.png";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import BatModal from "../components/Batform/Batform";
import BotaoDark from "../components/BotaoDark";

export default function Main() {
  const [visible, isVisible] = useState<boolean>(false);

  const showModal = () => isVisible(true);
  const onCloseModal = () => isVisible(false);

  return (
    <View style={styles.container}>
      {!visible && (
        <View style={styles.containerHome}>
          <Image style={styles.batlogo} source={batLogo} />
          <BotaoDark onPress={showModal} label="Activate bat signal" />
        </View>
      )}

      <BatModal visible={visible} onClose={onCloseModal} />

      <StatusBar style="auto" />
    </View>
  );
}
