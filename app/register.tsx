import { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';

import { useRouter } from 'expo-router';

export default function Cadastro() {

  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {

    if (nome && email && senha && confirmarSenha) {

      if (senha === confirmarSenha) {

        router.replace('/feed');

      } else {

        alert('As senhas não são iguais.');

      }

    } else {

      alert('Por favor, preencha todos os campos.');

    }

  };

  return (

    <View style={styles.container}>

      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>Criar Conta</Text>

      <TextInput
        placeholder="Nome Completo"
        placeholderTextColor="#888"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="E-mail"
        placeholderTextColor="#888"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#888"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TextInput
        placeholder="Confirmar Senha"
        placeholderTextColor="#888"
        style={styles.input}
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <Pressable
        style={styles.button}
        onPress={handleCadastro}
      >
        <Text style={styles.txb}>Cadastrar</Text>
      </Pressable>

      <Text
        style={styles.link}
        onPress={() => router.navigate('/login')}
      >
        Já possui conta? Login
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: 300,
    height: 200,
    marginTop: 20,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#006400',
  },

  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },

  button: {
    width: '50%',
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