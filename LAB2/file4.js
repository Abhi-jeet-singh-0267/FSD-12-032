// import { mkdir,rm } from "fs/promises";

// // create recursive directory
// await mkdir("uploads/resume",{recursive:true});
// // create single directory
// await mkdir("uploads/images");

// // remove directory
// await rm("uploads",{recursive: true});

import { mkdir, rm } from "fs/promises";

// Create recursive directories
// await mkdir("uploads/resume", { recursive: true });

// Create a single directory
// await mkdir("uploads/images");

// Remove directory and everything inside it
await rm("uploads", { recursive: true });