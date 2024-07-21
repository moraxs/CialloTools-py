from PyInstaller.utils.hooks import copy_metadata, collect_submodules

# 包含 win10toast 的元数据
datas = copy_metadata('win10toast')

# 包含 win10toast 的所有子模块
hiddenimports = collect_submodules('win10toast')
