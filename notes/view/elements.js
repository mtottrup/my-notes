/* global document */

const _get = ID => document.getElementById(ID);

const googleFonts = _get("google-fonts");

// Note
const content = _get("content");
const toolbar = _get("toolbar");

// Sidebar
const sidebar = _get("sidebar");
const sidebarNotes = _get("sidebar-notes");
const drag = _get("drag");
const newNote = _get("new-note");
const openOptions = _get("open-options");
const syncNow = _get("sync-now");
const contextMenu = _get("context-menu");
const renameAction = _get("rename");
const deleteAction = _get("delete");

// Templates
const newVersionNotificationTemplate = _get("new-version-notification-template");
const modalTemplate = _get("modal-template");

export {
  googleFonts,

  // Note
  content,
  toolbar,

  // Sidebar
  sidebar,
  sidebarNotes,
  drag,
  newNote,
  openOptions,
  syncNow,
  contextMenu,
  renameAction,
  deleteAction,

  // Templates
  newVersionNotificationTemplate,
  modalTemplate,
};
