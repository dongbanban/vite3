/*
 * @FilePath: /click/Users/i104/vite3/src/utils/path.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import path from 'path'

/**
 * 处理配置中的相对路径
 * @param p
 * @returns {string}
 */
function resolveRootPath(p) {
    return path.join(__dirname, '..', p);
}

export {
    resolveRootPath
}