/*
 * @lanhuage: js
 * @Descripttion: 
 * @version: beta
 * @Author: xiaoshuyui
 * @Date: 2020-11-17 13:31:30
 * @LastEditors: xiaoshuyui
 * @LastEditTime: 2020-11-17 13:55:34
 */

var btn = document.getElementById('check');
var cp = require('child_process')
const options = {
    encoding: "utf-8"
};

btn.addEventListener('click', function () {
    // alert('hello');
    let file1 = document.getElementById('File1').value
    let file2 = document.getElementById('File2').value
    if (file1 != '' && file2 != '') {
        let js = document.scripts;
        let jsPath;
        for (let i = js.length; i > 0; i--) {
            if (js[i - 1].src.indexOf("callPython.js") > -1) {
                jsPath = js[i - 1].src.substring(0, js[i - 1].src.lastIndexOf("/") + 1);
            }
        }
        // alert(jsPath);
        let pypath = jsPath.replace('js', 'pycode').replace('file:///', '');
        // alert(pypath)
        cp.exec(
            'python ' + pypath + 'check.py', options,(error, stdout, stderr) => {
                console.log(error);
                console.log(stdout);
                console.log(stderr);
            }
        )

    } else {
        alert('Input is null');
    }
})

