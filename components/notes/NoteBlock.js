import { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';

import styles from '../../styles/SNotes';

export default class NoteBlock extends Component {
    render() {
        return (
            <View>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#EEEEDD"
                    onPress={this.props.on_click}
                    onLongPress={this.props.on_long_press}
                    style={styles.headerNotes}>
                    <View>
                        <View style={styles.notesContainer}>
                            <Text 
                            numberOfLines={1}
                            style={styles.notesTitle}>{this.props.note_title}</Text>
                            <Text style={styles.notesDate}>{this.props.note_modified_date}</Text>
                        </View>
                        <View style={styles.notesContainer1}>
                            <View 
                            style={styles.verses}>
                                <Text 
                                numberOfLines={4}
                                style={styles.noteverses}>{this.props.note_content}</Text>
                            </View>
                        </View>
                    </View>
                    
                </TouchableHighlight>
            </View>
        )
    }
}