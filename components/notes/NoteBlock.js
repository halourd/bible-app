import { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../../styles/SNotes';

export default class NoteBlock extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={this.props.on_click}
                    style={styles.headerNotes}>
                    <View>
                        <View style={styles.notesContainer}>
                            <Text style={styles.notesTitle}>{this.props.note_title}</Text>
                            <Text style={styles.notesDate}>12/13</Text>
                        </View>
                        <View style={styles.notesContainer1}>
                            <View style={styles.verses}>
                                <Text style={styles.noteverses}>{this.props.note_content}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}