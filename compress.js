import { createWriteStream } from "fs";
import archiver from "archiver";

// Define the directory to compress
const sourceDir = "dist";
const archiveName = "dist/dist.zip";

// Create an output stream to the archive file
const output = createWriteStream(archiveName);
const archive = archiver("zip", {
  zlib: { level: 9 }, // Maximum compression level
});

// Pipe the output stream to the archive file
archive.pipe(output);

// Add files and subdirectories from the specified directory to the archive
archive.directory(sourceDir, false);

// Start the compression process
console.log(`Starting compression of '${sourceDir}' to '${archiveName}'...`);

// Listen for progress events during compression
archive.on("progress", (progress) => {
  const percentComplete =
    (progress.entries.processed / progress.entries.total) * 100;
  console.log(`Progress: ${percentComplete.toFixed(2)}%`);
});

// Finalize the archive
archive.finalize();

// Print a success message
console.log(
  `Files and subdirectories from '${sourceDir}' compressed to '${archiveName}'.`
);
