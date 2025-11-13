import { View, Text,StyleSheet,SectionList }  from "react-native";
import React, {useState} from 'react';

const houses = [{
    title: 'Ragnarok',
    data: [
        'Lubu',
        'Adan',
        'Thor',
        'Odin',
    ],
},
{
    title: 'dragon boll',
    data:[
        'Goku',
        'Picoro',
        'Vegeta',
        'Cell',
        'Gohan',
    ],
},
];

const SecctionList = () => {
    return (
        <View style={styles.container}>
            <SectionList 
            sections={houses}
            keyExtractor={(item) => item}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  }
});

export default SecctionList;


