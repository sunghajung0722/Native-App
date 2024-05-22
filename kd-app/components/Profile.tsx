
import { Image, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    minHeight: 100,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1
  },
  tempHeight: {
    flex: 1,
    minHeight: 90
  },
  profileImage: {
    flex: 1

  },
  imageContainer: {
    maxWidth: '30%'
  },
  infoContainer: {
    paddingTop: 15,
    padding: 10,
  },
  nameStyle: {
    fontSize: 20
  },
  designationStyle: {
    fontSize: 15
  }
})


const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, styles.tempHeight]}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={styles.profileImage}
        />
      </View>
      <View style={[styles.infoContainer, styles.tempHeight]}>
        <Text style={[styles.nameStyle]}>Kendrick Cruz</Text>
        <Text style={[styles.designationStyle]}>Software Developer</Text>
      </View>
    </View>

  )
}

export default Profile;