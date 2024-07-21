import webview
import os
import sys

def main():
    # 获取当前执行文件所在目录
    base_path = getattr(sys, '_MEIPASS', os.path.dirname(os.path.abspath(__file__)))
    # 拼接路径
    index_path = os.path.join(base_path, 'dist', 'index.html')
    # 创建窗口并设置标题
    webview.create_window('CialloTools', 'file://' + index_path)
    webview.start()

if __name__ == '__main__':
    main()
