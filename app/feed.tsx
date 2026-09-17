import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';

export default function Feed() {

  return (
    <View style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.header}>

        <Text style={styles.ola}>Olá!</Text>

        <Image
          source={require('../assets/sino.png')}
          style={styles.sino}
          resizeMode="contain"
        />

      </View>

        <View style={styles.busca}>

          <Image
            source={require('../assets/lupa.png')}
            style={styles.lupa}
            resizeMode="contain"
          />

          <TextInput
            placeholder="Buscar produtos..."
            placeholderTextColor="#888"
            style={styles.pesquisa}
          />

        </View>

        <Image
          source={require('../assets/banner.jpg')}
          style={styles.banner}
          resizeMode="cover"
        />

        <View style={styles.produtos}>

          <Text style={styles.titulo}>
            Produtos em destaque
          </Text>

          <View style={styles.grid}>

            <View style={styles.card}>

              <Image
                source={require('../assets/maca.jpg')}
                style={styles.imagemProduto}
                resizeMode="cover"
              />

              <View style={styles.infoProduto}>

                <Text style={styles.nomeProduto}>
                  Maçã
                </Text>

                <Text style={styles.produtor}>
                  Fazenda Verde
                </Text>

                <Text style={styles.preco}>
                  R$ 8,00
                </Text>

                <Text style={styles.tem}>
                  Disponível
                </Text>

              </View>

            </View>

            <View style={styles.card}>

              <Image
                source={require('../assets/tomate.jpeg')}
                style={styles.imagemProduto}
                resizeMode="cover"
              />

              <View style={styles.infoProduto}>

                <Text style={styles.nomeProduto}>
                  Tomate
                </Text>

                <Text style={styles.produtor}>
                  Sítio Boa Terra
                </Text>

                <Text style={styles.preco}>
                  R$ 6,50
                </Text>

                <Text style={styles.tem}>
                  Disponível
                </Text>

              </View>

            </View>

          </View>

        </View>

      {/* Rodapé */}
      <View style={styles.footer}>

        <Pressable style={styles.footerItem}>

          <Image
            source={require('../assets/home.png')}
            style={styles.footerIcon}
            resizeMode="contain"
          />

          <Text style={styles.footerText}>
            Início
          </Text>

        </Pressable>

        <Pressable style={styles.footerItem}>

          <Image
            source={require('../assets/lupa.png')}
            style={styles.footerIcon}
            resizeMode="contain"
          />

          <Text style={styles.footerText}>
            Buscar
          </Text>

        </Pressable>

        <Pressable style={styles.footerItem}>

          <Image
            source={require('../assets/pedi.png')}
            style={styles.footerIcon}
            resizeMode="contain"
          />

          <Text style={styles.footerText}>
            Pedidos
          </Text>

        </Pressable>

        <Pressable style={styles.footerItem}>

          <Image
            source={require('../assets/perfil.png')}
            style={styles.footerIcon}
            resizeMode="contain"
          />

          <Text style={styles.footerText}>
            Perfil
          </Text>

        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 5,
    borderBottomColor: '#44b802',
  },

  ola: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003600',
  },

  sino: {
    width: 28,
    height: 28,
  },

  busca: {
    height: 50,
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 12,
  },

  lupa: {
    width: 22,
    height: 22,
    marginRight: 8,
  },

  pesquisa: {
    flex: 1,
    fontSize: 16,
    color: '#222',
  },

  banner: {
    width: '90%',
    height: 160,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 15,
  },

  produtos: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#003600',
    marginBottom: 15,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },

  imagemProduto: {
    width: '100%',
    height: 130,
  },

  
  infoProduto: {
    padding: 10,
  },

  nomeProduto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 3,
  },

  produtor: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },

  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003600',
    marginBottom: 5,
  },

  tem: {
    fontSize: 12,
    color: '#006400',
    fontWeight: 'bold',
  },

  footer: {
    height: 75,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },

  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  footerIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },

  footerText: {
    fontSize: 12,
    color: '#003600',
    fontWeight: '600',
  },

});