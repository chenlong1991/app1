import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// 定义一个空对象
const api = {}

// 判断当前进程是否为独立进程
if (process.contextIsolated) {
  try {
    // 如果当前进程为独立进程，则将electronAPI暴露给主线程
    contextBridge.exposeInMainWorld('electron', electronAPI)
    // 将api暴露给主线程
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    // 捕获异常
    console.error(error)
  }
} else {
  // 如果当前进程不是独立进程，则将electronAPI暴露给当前线程
  window.electron = electronAPI
  // 将api暴露给当前线程
  window.api = api
}
// 将三个方法暴露给主线程
contextBridge.exposeInMainWorld('electronAPI', {
  // 最小化窗口
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  // 最大化窗口
  maximizeWindow: () => ipcRenderer.send('maximize-window'),
  // 关闭窗口
  closeWindow: () => ipcRenderer.send('close-window')
})
