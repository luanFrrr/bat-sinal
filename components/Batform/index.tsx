import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import styles from "../Batform/styles";
import batLogo from "../../assets/bat-logo.png";
import BatForm from "../Batform/Batform";

interface BatModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function BatModal({ visible, onClose }: BatModalProps) {
  const onSubmit = () => {
    onClose();
  };

  return (
    <Modal animationType="fade" visible={visible}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.batMiniLogo} source={batLogo} />
            <TouchableOpacity onPress={onClose}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>

          <BatForm onSubmit={onSubmit} />
        </View>
      </ScrollView>
    </Modal>
  );
}
