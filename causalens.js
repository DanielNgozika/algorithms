function generateNewFolderName(existingFolders) {
	// Write your code here

	if (!existingFolders.includes("New Folder")) {
		return "New Folder";
	}

	let folderNameCount = 0;
	let currentName;

	for (let i = 0; i < existingFolders; i++) {
		if (existingFolders[i] === currentName) {
			currentName = existingFolders[i];
			folderNameCount++;
			return `New Folder (${folderNameCount})`;
		}
	}
}

console.log(generateNewFolderName(["New Folder"]));
