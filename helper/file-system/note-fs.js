import * as FileSystem from 'expo-file-system'

const readNotes = async () => {
    const notesDirectory = `${FileSystem.documentDirectory}notes/`;
    const noteFileNames = await FileSystem.readDirectoryAsync(notesDirectory);

    const notes = await Promise.all(
      noteFileNames.map(async (fileName) => {
        const notePath = notesDirectory + fileName;
        const noteContent = await FileSystem.readAsStringAsync(notePath);
        
        const fileInfo = await FileSystem.getInfoAsync(notePath);
        const creationDate = fileInfo.creationTime;
      
        return { fileName, content: noteContent };
      })
    );
    
    return notes
  }
  
const createNote = async (note_title, note_content) => {
    const noteContent = note_content.trim()
    const notesDirectory = `${FileSystem.documentDirectory}notes/`;
    const noteFileName = `${note_title}_${Date.now()}.txt`;
    const notePath = notesDirectory + noteFileName;
  
    await FileSystem.makeDirectoryAsync(notesDirectory, { intermediates: true });
    await FileSystem.writeAsStringAsync(notePath, noteContent);
  
    console.log('Note created successfully!', );
  }
  
const deleteNotes = async (fileName) => {
    const notesDirectory = `${FileSystem.documentDirectory}notes/`;
    const notePath = notesDirectory + fileName;
  
    await FileSystem.deleteAsync(notePath, { idempotent: true });
  
    console.log('Note deleted successfully!');
}


export {readNotes, createNote, deleteNotes};