import * as FileSystem from "expo-file-system";

const createNote = async (note_title, note_content, callback) => {
  const noteContent = note_content.trim();
  const notesDirectory = `${FileSystem.documentDirectory}notes/my/`;
  const noteFileName = `${note_title}-_-_-${Date.now()}.txt`;
  const notePath = notesDirectory + noteFileName;

  await FileSystem.makeDirectoryAsync(notesDirectory, { intermediates: true });
  await FileSystem.writeAsStringAsync(notePath, noteContent);

  console.log("Note created successfully!");
  callback?callback():null
};

const readNotes = async () => {
  const notesDirectory = `${FileSystem.documentDirectory}notes/my/`;
  // await FileSystem.deleteAsync(notesDirectory, {idempotent: true})
  await FileSystem.makeDirectoryAsync(notesDirectory, { intermediates: true });

  if((`${FileSystem.documentDirectory}notes/my/`)){  
    try {
      const notesDirectory = `${FileSystem.documentDirectory}notes/my/`;
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
        } catch (error) {
          console.log(error)
          alert("My Notes Directory not found. Create a note first.")
        }
  }else{
    await FileSystem.makeDirectoryAsync(notesDirectory, { intermediates: true });
  }


};

const updateNote = async (oldFilePath, fileName, newContent) => {
  const notesDirectory = `${FileSystem.documentDirectory}notes/my/`;
  const oldNotePath = notesDirectory + oldFilePath
  const newNotePath = notesDirectory + `${fileName}-_-_-${Date.now()}.txt`;

  await FileSystem.writeAsStringAsync(newNotePath, newContent);

  // Delete the old note file
  try {
    await FileSystem.deleteAsync(oldNotePath);
  } catch (error) {
    console.log(error)
  }

  console.log(`${fileName} Note updated successfully!`);
};



const updateThisNote = async (oldFileName, newFileName, newContent, callback) => {
  try {
    const notesDirectory = `${FileSystem.documentDirectory}notes/my/`;
    const oldNoteFilePath = notesDirectory + oldFileName;
    
    const new_filename = `${newFileName}-_-_-${Date.now()}.txt`
    // await FileSystem.writeAsStringAsync(notePath, newContent);
  
    const newFilePath = `${FileSystem.documentDirectory}notes/my/` + new_filename;

    //Check if the note is existing 
    // const fileInfo = await FileSystem.getInfoAsync(oldFilePath);
    // if (!fileInfo.exists || !fileInfo.isFile) {
    //   console.log('OLD FILE PATH Note does not exist or is not a file.');
    //   return;
    // }
    
    // Read the old note content
    const oldContent = await FileSystem.readAsStringAsync(oldNoteFilePath);
    
    // Write the new content to the new note's file path
    await FileSystem.writeAsStringAsync(newFilePath, newContent);

    // Delete the old note file
    await FileSystem.deleteAsync(oldNoteFilePath);
    
    console.log(`Note updated successfully!`);
    return new_filename;

  } catch (error) {
    console.log(error)
  }

};

const deleteNotes = async (fileName, callback) => {
  const notesDirectory = `${FileSystem.documentDirectory}notes/my/`;
  const notePath = notesDirectory + fileName;

  await FileSystem.deleteAsync(notePath, { idempotent: true });

  console.log("Note deleted successfully!");
  callback?callback():null
};

export { readNotes, createNote, deleteNotes, updateThisNote };
