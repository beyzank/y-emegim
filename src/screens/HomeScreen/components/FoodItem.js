import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FoodItem = () => {
  const navigation = useNavigation();

  const data = [
    {
      title: 'Tarhana Çorbası',
      desc: 'Salçalı bir çorba.',
      img: 'ezogelin.webp',
    },
    {title: 'Yayla Çorbası', desc: 'Salçalı bir çorba.', img: 'ezogelin.webp'},
    {
      title: 'Mercimek Çorbası',
      desc: 'Salçalı bir çorba.',
      img: 'ezogelin.webp',
    },
    {
      title: 'Ezogelin Çorbası',
      desc: 'Salçalı bir çorba.',
      img: 'ezogelin.webp',
    },
    {
      title: 'Brokoli Çorbası',
      desc: 'Salçalı bir çorba.',
      img: 'ezogelin.webp',
    },
    {title: 'Yoğurt Çorbası', desc: 'Salçalı bir çorba.', img: 'ezogelin.webp'},
    {
      title: 'Kara Lahana Çorbası',
      desc: 'Salçalı bir çorba.',
      img: 'ezogelin.webp',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('RecipeDetail')}
        style={styles.container}>
        <Image
          source={require('/Users/beyzanurkahraman/Desktop/yemegim/src/images/ezogelin.webp')}
          style={styles.image}
        />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return <FlatList data={data} renderItem={renderItem} />;
};

const styles = {
  container: {
    marginTop: 30,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    backgroundColor: '#f8f8f8',
  },
  image: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 20,
    width: '100%',
    height: 160,
  },
  title: {
    marginLeft: 5,
    fontSize: 17,
    marginBottom: 15,
  },
};
export default FoodItem;
