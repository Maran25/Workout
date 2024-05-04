// /**
//  * @param {string} version1
//  * @param {string} version2
//  * @return {number}
//  */
// var compareVersion = function(version1, version2) {
//     let result = 0;

//     let i = 0; 
//     let j = 0;

//     while(i<version1.length && j<version2.length) {
//         let n = version1[i];
//         let m = version2[j];
//         if(version1[i] === '0') {
//             i++;
//         } else if(version2[j] === '0') {
//             j++;
//         } else if(version1[i] === '.') {
//             i++;
//         } else if(version2[j] === '.') {
//             j++;
//         } else if(version1[i] === version2[j]) {
//             if(version1[i] !== '.' && version1[i] !== '0')result = 0;
//             i++;
//             j++
//         } else if(version1[i] > version2[j]) {
//             result = 1;
//             i++;
//             // j++
//         } else if(version1[i] < version2[j]){
//             result = -1;
//             // i++;
//             j++
//         }
//     }
//     return result;
// };
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let result = 0;

    let i = 0; 
    let j = 0;

    while(i < version1.length && j < version2.length) {
        while(i < version1.length && version1[i] !== '.' && version1[i] === '0') i++;
        while(j < version2.length && version2[j] !== '.' && version2[j] === '0') j++;

        if(version1[i] === '.' || version2[j] === '.') {
            result = 0;
            i++;
            j++;
        } else if(version1[i] > version2[j]) {
            result = 1;
            i++;
        } else if(version1[i] < version2[j]) {
            result = -1;
            j++
        }
    }
    return result;
};

compareVersion('1.01', '1.001')