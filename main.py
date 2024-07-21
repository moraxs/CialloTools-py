import webview
import os
import sys
from win10toast import ToastNotifier

def main():
    # 获取当前执行文件所在目录
    base_path = getattr(sys, '_MEIPASS', os.path.dirname(os.path.abspath(__file__)))
    # 拼接路径
    index_path = os.path.join(base_path, 'dist', 'index.html')
    # 创建窗口并设置标题和大小
    webview.create_window('CialloTools', 'file://' + index_path, width=1280, height=720)
    webview.start()

if __name__ == '__main__':
    # 发送系统通知
    base_path = getattr(sys, '_MEIPASS', os.path.dirname(os.path.abspath(__file__)))
    icon_path = os.path.join(base_path, 'dist', 'favicon.ico')  # 从临时目录获取图标路径
    toaster = ToastNotifier()
    toaster.show_toast("Notice", "本指令生成器与任何公开的PS没有从属关系，请您注意甄别。DanhengServer与其他任何衍生工具都是免费软件，如果你是付费购买的，请及时退款并举报", icon_path=icon_path, duration=10)
    main()
