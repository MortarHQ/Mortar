import { add } from "node-7z";

// 定义要压缩的目录和压缩后的文件名
const sourceDir = "dist";
const outputZip = `${sourceDir}/dist.7z`;

console.log(`Compressing ${sourceDir} to ${outputZip}...`);

// 创建 Seven 对象
const myStream = add(outputZip, sourceDir);

// 监听压缩进度事件
myStream.on("progress", (progress) => {
  console.log(`Compression progress: ${progress}%`);
});

// 监听压缩完成事件
myStream.on("end", () => {
  console.log("Compression done");
});

// 监听错误事件
myStream.on("error", (err) => {
  console.error("Compression error:", err);
});
