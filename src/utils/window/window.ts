import { getCurrentWindow} from "@tauri-apps/api/window";

export function closeWindow() {
  
  const appWindow = getCurrentWindow();
  return appWindow.close();
}

export function minimizeWindow() {
  const appWindow = getCurrentWindow();
  return appWindow.minimize();
}

export function maximizeWindow() {
  const appWindow = getCurrentWindow();
  return appWindow.toggleMaximize();
}