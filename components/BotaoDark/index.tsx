import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface BotaoDarkProps {
  label: string;
  onPress?: () => void;
}

export default function BotaoDark({
  label,
  onPress = () => {},
}: BotaoDarkProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnDark}>
      <Text style={styles.texto}>{label}</Text>
    </TouchableOpacity>
  );
}
