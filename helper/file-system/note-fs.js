import * as FileSystem from "expo-file-system";

const createNote = async (note_title, note_content) => {
  const noteContent = note_content.trim();
  const notesDirectory = `${FileSystem.documentDirectory}notes/`;
  const noteFileName = `${note_title}_${Date.now()}.txt`;
  const notePath = notesDirectory + noteFileName;

  await FileSystem.makeDirectoryAsync(notesDirectory, { intermediates: true });
  await FileSystem.writeAsStringAsync(notePath, noteContent);

  console.log("Note created successfully!");
};
const readNotes = async () => {
  const notesDirectory = `${FileSystem.documentDirectory}notes/`;
  const noteFileNames = await FileSystem.readDirectoryAsync(notesDirectory);

  const notes = await Promise.all(
    noteFileNames.map(async (fileName) => {
      const notePath = notesDirectory + fileName;
      const noteContent = await FileSystem.readAsStringAsync(notePath);

      const fileInfo = await FileSystem.getInfoAsync(notePath);
      const dateModified = fileInfo.modificationTime;

      const date = new Date(dateModified * 1000);
      const fileFormattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date
        .getFullYear()
        .toString()
        .substr(-2)}`;

      return { fileName, content: noteContent, fileFormattedDate };
    })
  );

  return notes;
};

const updateNote = async (oldFilePath, fileName, newContent) => {
  const notesDirectory = `${FileSystem.documentDirectory}notes/`;
  const oldNotePath = notesDirectory + oldFilePath
  const newNotePath = notesDirectory + `${fileName}_${Date.now()}.txt`;

  await FileSystem.writeAsStringAsync(newNotePath, newContent);

  // Delete the old note file
  try {
    await FileSystem.deleteAsync(oldNotePath);
  } catch (error) {
    console.log(error)
  }

  console.log(`${fileName} Note updated successfully!`);
};



const updateThisNote = async (oldFileName, newFileName, newContent) => {
  try {
    const notesDirectory = `${FileSystem.documentDirectory}notes/`;
    const oldNoteFilePath = notesDirectory + oldFileName;
  
    // await FileSystem.writeAsStringAsync(notePath, newContent);
  
    const newFilePath = `${FileSystem.documentDirectory}notes/` + `${newFileName}_${Date.now()}.txt`;

    //Check if the note is existing 
    // const fileInfo = await FileSystem.getInfoAsync(oldFilePath);
    // if (!fileInfo.exists || !fileInfo.isFile) {
    //   console.log('OLD FILE PATH Note does not exist or is not a file.');
    //   return;
    // }
    
    // Read the old note content
    const oldContent = await FileSystem.readAsStringAsync(oldFilePath);
    
    // Write the new content to the new note's file path
    await FileSystem.writeAsStringAsync(newFilePath, newContent);

    // Delete the old note file
    await FileSystem.deleteAsync(oldNoteFilePath);
    
    console.log(`Note updated successfully!`);
  } catch (error) {
    
  }

};

const deleteNotes = async (fileName) => {
  const notesDirectory = `${FileSystem.documentDirectory}notes/`;
  const notePath = notesDirectory + fileName;

  await FileSystem.deleteAsync(notePath, { idempotent: true });

  console.log("Note deleted successfully!");
};

export { readNotes, createNote, deleteNotes, updateNote };
