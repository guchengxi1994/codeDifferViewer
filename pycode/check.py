'''
lanhuage: python
Descripttion: 
version: beta
Author: xiaoshuyui
Date: 2020-11-17 13:47:42
LastEditors: xiaoshuyui
LastEditTime: 2020-11-18 09:16:31
'''
import sys
import difflib
import os

if __name__ == "__main__":
    # baseDir = os.path.abspath(os.path.dirname(os.getcwd()))
    try:
        baseDir = sys.argv[3]
        file1 = sys.argv[1]
        file2 = sys.argv[2]
        if not os.path.exists(file1) or not os.path.exists(file2):
            sys.stderr.write('File not found！')
        else:
            with open(file1, 'r', encoding='utf-8', errors='ignore') as f1:
                text1 = f1.read().splitlines()
            with open(file2, 'r', encoding='utf-8', errors='ignore') as f2:
                text2 = f2.read().splitlines()

            diff = difflib.HtmlDiff()
            result = diff.make_file(text1, text2)
            with open(baseDir +  'diff.html', 'w',encoding='utf-8') as f3:
                f3.write(result)
            sys.stdout.write(baseDir +  'diff.html')
    except Exception as e:
        sys.stderr.write('Input error {}'.format(str(e)))