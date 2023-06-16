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

        console.log(notePath)
        return { fileName, content: noteContent };
      })
    );
    
    return notes
  }
  
const createNote = async () => {
    const notesDirectory = `${FileSystem.documentDirectory}notes/`;
    const noteFileName = `${Date.now()}.txt`;
    const notePath = notesDirectory + noteFileName;
  
    await FileSystem.makeDirectoryAsync(notesDirectory, { intermediates: true });
    await FileSystem.writeAsStringAsync(notePath, "hiiiiiiiiiiiii");
  
    console.log('Note created successfully!', );
  }
  
const deleteNotes = async (fileName) => {
    const notesDirectory = `${FileSystem.documentDirectory}notes/`;
    const notePath = notesDirectory + fileName;
  
    await FileSystem.deleteAsync(notePath, { idempotent: true });
  
    console.log('Note deleted successfully!');
}


export {readNotes, createNote, deleteNotes};