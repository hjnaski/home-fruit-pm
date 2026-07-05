import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      
      <Text style={styles.titulo}>Criar Conta</Text>

      <TextInput placeholder="Nome Completo" style={styles.input} />
      <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry />
      <TextInput placeholder="Confirmar Senha" style={styles.input} secureTextEntry />

      <Pressable style={[styles.button]}>
        <Text style={[styles.txb]}>Finalizar Cadastro</Text>
      </Pressable>

      <Link href="/" style={styles.link}>
        Já possui conta? Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#006400',
  },
  input: {
    width: '35%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  button: {
    width: '25%',
    height: 55,
    backgroundColor: '#003600',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  txb: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    color: '#003600',
    fontSize: 16,
    fontWeight: 'bold',
  },
});