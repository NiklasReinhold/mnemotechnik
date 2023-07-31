import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import globus from "./assets/globus.svg";
import * as Linking from 'expo-linking';

export default function App() {
  var dimensions = Dimensions.get('window');
  var min = Math.min(dimensions.width, dimensions.height);
  var elementSize = min*0.965/8;

  var countries =  [
    ["Alaska", "Nordpol", "Island", "Norwegen", "Schweden", "Estland", "Monaco", "Regensburg"],
    ["Kanada", "Grönland", "England", "West-Deutschland", "Ost-Deutschland", "Polen", "Dubai", "Bayern"],
    ["Wilder Westen", "USA-Oststaaten", "Frankreich", "Schweiz", "Österreich", "Rumänien", "Russland", "Sibirien"],
    ["Panama", "Kuba", "Spanien", "Italien", "Griechenland", "Türkei", "China", "Japan"],
    ["Galapagos Inseln", "Brasilien", "Atlantik", "Mittelmeer", "Israel", "Iran", "Indien", "Indochina"],
    ["Chile", "Argentinien", "Kanarische Inseln", "Sahara", "Ägypten", "Saudi-Arabien", "Indonesien", "Hawaii"],
    ["Feuerland", "Falkland-Inseln", "St. Helena", "Urwald", "Savanne", "Seychellen", "Neu-Guinea", "Osterinsel"],
    ["Weltall", "Sonne", "Eismeer", "Antarktis", "Capetown", "Madagaskar", "Australien", "Neuseeland"]
  ]
  const link = 'http://www.p-roesler.de/memory.html#Globus-Merksystem';

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{position: 'absolute', left: 8, top: 8, backgroundColor: '#990000b0', borderRadius: 8}}
        onPress={() => Linking.openURL(link)}>
        <Text style={{padding: 8}}>Globus-Merksystem</Text>
      </TouchableOpacity>
      <View style={{width: min*1.01, height: min, left: -12}}> 
        <object type="image/svg+xml" aria-label="globus" data={globus.toString()}></object>
      </View>
      <FlatList
        style={{position: 'absolute', width: min, height: min, marginTop: 40}}
        data={countries.flat()}
        renderItem={({item}) => (
          <View style={{width: elementSize, height: elementSize, justifyContent: 'center', borderWidth: 1}}>
            <Text style={{textAlign: 'center', color: '#990000ff', fontWeight: 'bold', 
              textShadowColor: 'white',
              fontSize: 12,
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 0}}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
