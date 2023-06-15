import { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../../styles/SNotes';

export default class NoteBlock extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                        this.props.navigation.navigate('Edit Note')
                    }}
                    style={styles.headerNotes}>
                    <View>
                        <View style={styles.notesContainer}>
                            <Text style={styles.notesTitle}>Thanksgiving</Text>
                            <Text style={styles.notesDate}>12/13</Text>
                        </View>
                        <View style={styles.notesContainer1}>
                            <View style={styles.verses}>
                                <Text style={styles.noteverses}>1Cor 1:1</Text>
                                <Text style={styles.noteverses}>1Cor 1:2</Text>
                                <Text style={styles.noteverses}>1Cor 1:3</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}