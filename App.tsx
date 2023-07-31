import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import globus from "./assets/globus.svg";

export default function App() {
  var dimensions = Dimensions.get('window');
  var min = Math.min(dimensions.width, dimensions.height);

  var countries =  [
    ["Alaska", "Nordpol", "Island", "Norwegen", "Schweden", "Finland", "Dresden", "Regensburg"],
    ["Kanada", "Grönland", "England", "West-Deutschland", "Ost-Deutschland", "Polen", "Chemnitz", "Bayern"],
    ["Wilder Westen", "USA-Oststaaten", "Frankreich", "Schweiz", "Österreich", "Rumänien", "Russland", "Sibirien"],
    ["Panama", "Kuba", "Spanien", "Italien", "Griechenland", "Türkei", "China", "Japan"],
    ["Galapagos Inseln", "Brasilien", "Atlantik", "Mittelmeer", "Israel", "Iran", "Indien", "Indochina"],
    ["Chile", "Argentinien", "Kanarische Inseln", "Sahara", "Ägypten", "Saudi-Arabien", "Indonesien", "Hawaii"],
    ["Feuerland", "Falkland-Inseln", "St. Helena", "Urwald", "Savanne", "Seychellen", "Neu-Guinea", "Osterinsel"],
    ["Weltall", "Sonne", "Eismeer", "Antarktis", "Südafrika", "Madagaskar", "Australien", "Neuseeland"]
  ]
  //http://www.p-roesler.de/memory.html#Globus-Merksystem

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{position: 'absolute', left: 8, top: 8, backgroundColor: '#990000b0', borderRadius: 8}}>
        <Text style={{padding: 8}}>Globus-Merksystem</Text>
      </TouchableOpacity>
      <View style={{width: min, height: min, }}> 
        <View style={{backgroundColor: '#00ff00b0'}}>
          <object type="image/svg+xml" aria-label="globus" data={globus.toString()}></object>
        </View>
      </View>
      <FlatList
        style={{position: 'absolute', width: min, height: min,}}
        data={countries.flat()}
        renderItem={({item}) => (
          <View style={{width: min/8, height: min/8, justifyContent: 'center', borderWidth: 1}}>
            <Text style={{textAlign: 'center'}}>{item}</Text>
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
