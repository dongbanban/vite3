/*
 * @FilePath: /Users/i104/vite3/src/utils/file.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import { isFile, isBlob } from './util'
const fileConvert = ({ file, convertType = 'base64', callback }) => {
    if (!isFile(file)) {
        throw new Error('Please convert file')
    }
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function () {
        const base64 = this.result
        if (convertType.toLowerCase() === 'blob') {
            const blob = new Blob([this.result], { type: file.type });
            return callback?.(blob)
        }
        return callback?.(base64)
    }
}

const download = ({ data, fileName = 'default.png' }) => {
    if (!isFile(data) && !isBlob(data)) {
        throw new Error('Error data type to download')
    }
    const blobUrl = URL.createObjectURL(data)
    const downloadEl = document.createElement('a');
    document.body.appendChild(downloadEl);
    downloadEl.style.display = 'none';
    downloadEl.href = blobUrl;
    downloadEl.download = fileName;
    downloadEl.click();
    document.body.removeChild(downloadEl);
    URL.revokeObjectURL(blobUrl);
}

export {
    fileConvert,
    download
}