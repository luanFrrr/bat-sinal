import { StyleSheet, Text, TextInput, View } from "react-native";
import BotaoDark from "../BotaoDark";
import { useState } from "react";

interface BatFormProps {
  onSubmit: () => void;
}

export default function BatForm({ onSubmit }: BatFormProps) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [obs, setObs] = useState("");

  const submit = () => {
    const all_fields = { nome, telefone, email, idade, obs };
    const all_ok = Object.values(all_fields).every((v) => v);

    if (!all_ok) {
      alert("É necessário preencher todos os campos!");
      return false;
    }

    alert(
      `${nome}, Apartir de agora, em algumas noites você verá o Bat-Sinal projetado ao Céu`
    );
    onSubmit();
  };

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} onChangeText={setNome} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Idade</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={setIdade}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Observação</Text>
        <TextInput
          style={[styles.input, styles.inputauto]}
          multiline={true}
          numberOfLines={4}
          onChangeText={setObs}
        />
      </View>

      <View style={styles.submitArea}>
        <BotaoDark onPress={submit} label="Enviar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },

  formGroup: {
    gap: 4,
  },

  input: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 4,
    borderColor: "#000",
    height: 40,
  },

  inputauto: {
    height: "auto",
  },

  label: {
    fontWeight: "bold",
  },

  submitArea: {
    width: "100%",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 40,
  },
});
