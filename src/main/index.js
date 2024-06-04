import { app, shell, BrowserWindow, ipcMain, Tray, Menu, nativeImage } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

let tray // 全局变量，存储系统托盘实例
let settingsWindow // 全局变量，存储设置窗口实例

/**
 * 创建设置窗口
 */
function createSettingsWindow() {
  settingsWindow = new BrowserWindow({
    width: 700, // 设置窗口宽度
    height: 600, // 设置窗口高度
    show: false, // 创建时不显示窗口
    autoHideMenuBar: true, // 自动隐藏菜单栏
    ...(process.platform === 'linux' ? { icon } : {}), // Linux 平台下设置窗口图标
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'), // 预加载脚本
      sandbox: false, // 关闭沙箱模式
      contextIsolation: true,
      enableRemoteModule: false
    },
    frame: false // 禁用窗口边框
  })

  // 根据开发环境或生产环境加载URL或文件
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    settingsWindow.loadURL(process.env['ELECTRON_RENDERER_URL']) // 开发环境加载URL
  } else {
    settingsWindow.loadFile(__dirname, '../renderer/index.html') // 生产环境加载文件并指定 hash
  }
  settingsWindow.on('close', event => {
    if (!app.isQuiting) {
      event.preventDefault()
      settingsWindow.hide()
      settingsWindow.setSkipTaskbar(true)
    }
  })
  // 自动打开开发者工具
  settingsWindow.webContents.openDevTools()
}

/**
 * 创建系统托盘
 */
function createTray() {
  const iconImage = nativeImage.createFromPath(join(__dirname, '../../resources/icon.png')) // 创建托盘图标
  const trayIcon = iconImage.resize({ width: 18, height: 16 }) // 调整图标大小

  tray = new Tray(trayIcon) // 创建托盘实例

  // 创建托盘上下文菜单
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '设置',
      click: () => {
        if (settingsWindow) {
          settingsWindow.show()
        } else createSettingsWindow()
      }
    }, // 添加设置选项
    { type: 'separator' }, // 分隔线
    {
      label: '显示窗口',
      click: () => {
        settingsWindow.show()
        settingsWindow.setSkipTaskbar(false)
      }
    }, // 添加显示窗口选项
    {
      label: '重启软件',
      click: () => {
        app.relaunch()
        app.exit(0)
      }
    },
    {
      label: '退出',
      click: () => {
        app.isQuiting = true // 设置应用退出状态
        app.quit() // 退出应用
      }
    }
  ])

  tray.setContextMenu(contextMenu) // 设置托盘菜单
  tray.setToolTip('这是我的应用') // 设置托盘提示

  // 添加托盘点击事件，点击时显示窗口
  tray.on('click', () => {
    settingsWindow.show()
    settingsWindow.setSkipTaskbar(false)
  })
}

// 当应用准备好时执行
app.whenReady().then(() => {
  createTray() // 创建系统托盘
  electronApp.setAppUserModelId('com.electron') // 设置应用程序模型ID

  // 监听新创建的窗口，并优化快捷键
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // 监听自定义事件
  // ipcMain.on('ping', () => console.log('pong'))
  createSettingsWindow() // 创建主窗口

  // 在macOS上，当应用被激活且没有窗口时，创建一个新窗口
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createSettingsWindow()
  })
})

// 当所有窗口关闭时退出应用（在macOS上除外）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 监听最小化、最大化和关闭窗口事件
ipcMain.on('minimize-window', () => {
  settingsWindow.minimize()
})

ipcMain.on('maximize-window', () => {
  if (settingsWindow.isMaximized()) {
    settingsWindow.unmaximize()
  } else {
    settingsWindow.maximize()
  }
})

ipcMain.on('close-window', () => {
  settingsWindow.close()
})
