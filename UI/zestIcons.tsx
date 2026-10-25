import React from 'react';

export type BuiltInIconName =
  | 'add'
  | 'new'
  | 'save'
  | 'submit'
  | 'edit'
  | 'update'
  | 'delete'
  | 'remove'
  | 'cancel'
  | 'close'
  | 'view'
  | 'details'
  | 'download'
  | 'upload'
  | 'refresh'
  | 'reload'
  | 'print'
  | 'share'
  | 'confirm'
  | 'search'
  | 'filter'
  | 'sort'
  | 'copy'
  | 'paste'
  | 'back'
  | 'next'
  | 'home'
  | 'menu'
  | 'more'
  | 'settings'
  | 'help'
  | 'info'
  | 'warning'
  | 'send'
  | 'login'
  | 'logout'
  | 'undo'
  | 'redo'
  | 'approve'
  | 'reject'
  | 'favorite'
  | 'attach'
  | 'lock'
  | 'unlock'
  | 'archive'
  | 'export'
  | 'import';

const iconBaseProps = {
  viewBox: '0 0 24 24',
  width: '1em',
  height: '1em',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: 'false' as const,
};

const createIcon = (paths: React.ReactNode) => (
  <svg {...iconBaseProps}>
    {paths}
  </svg>
);

const plusIcon = createIcon(<><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></>);
const saveIcon = createIcon(<><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></>);
const editIcon = createIcon(<><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></>);
const trashIcon = createIcon(<><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></>);
const xIcon = createIcon(<><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>);
const rightArrowIcon = createIcon(<><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></>);
const leftArrowIcon = createIcon(<><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></>);
const downloadIcon = createIcon(<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></>);
const uploadIcon = createIcon(<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></>);
const refreshIcon = createIcon(<><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></>);
const printIcon = createIcon(<><polyline points="6 9 6 2 18 2 18 9"></polyline><rect x="2" y="9" width="20" height="8" rx="2"></rect><rect x="6" y="14" width="12" height="8"></rect></>);
const shareIcon = createIcon(<><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8" y1="14" x2="16" y2="17"></line><line x1="16" y1="7" x2="8" y2="10"></line></>);
const checkIcon = createIcon(<><polyline points="20 6 9 17 4 12"></polyline></>);

const searchIcon = createIcon(<><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></>);
const filterIcon = createIcon(<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>);
const sortIcon = createIcon(<><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="15" y2="12"></line><line x1="3" y1="18" x2="9" y2="18"></line></>);
const copyIcon = createIcon(<><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></>);
const pasteIcon = createIcon(<><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></>);
const homeIcon = createIcon(<path d="M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"></path>);
const menuIcon = createIcon(<><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>);
const moreIcon = createIcon(<><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></>);
const settingsIcon = createIcon(<><line x1="4" y1="21" x2="4" y2="3"></line><circle cx="4" cy="8" r="2"></circle><line x1="12" y1="21" x2="12" y2="3"></line><circle cx="12" cy="16" r="2"></circle><line x1="20" y1="21" x2="20" y2="3"></line><circle cx="20" cy="8" r="2"></circle></>);
const helpIcon = createIcon(<><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></>);
const infoIcon = createIcon(<><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></>);
const warningIcon = createIcon(<><path d="M12 3 2 20h20z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></>);
const sendIcon = createIcon(<><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></>);
const loginIcon = createIcon(<><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></>);
const logoutIcon = createIcon(<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></>);
const undoIcon = createIcon(<><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"></path></>);
const redoIcon = createIcon(<><path d="M21 7v6h-6"></path><path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7"></path></>);
const heartIcon = createIcon(<><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></>);
const attachIcon = createIcon(<><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84L9.41 17.41a2 2 0 0 1-2.83-2.83L15.07 6"></path></>);
const lockIcon = createIcon(<><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></>);
const unlockIcon = createIcon(<><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></>);
const archiveIcon = createIcon(<><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></>);

export const ZEST_ICON_ELEMENTS: Record<BuiltInIconName, React.ReactElement> = {
  add: plusIcon,
  new: plusIcon,
  save: saveIcon,
  submit: saveIcon,
  edit: editIcon,
  update: editIcon,
  delete: trashIcon,
  remove: trashIcon,
  cancel: xIcon,
  close: xIcon,
  view: rightArrowIcon,
  details: rightArrowIcon,
  download: downloadIcon,
  upload: uploadIcon,
  refresh: refreshIcon,
  reload: refreshIcon,
  print: printIcon,
  share: shareIcon,
  confirm: checkIcon,
  search: searchIcon,
  filter: filterIcon,
  sort: sortIcon,
  copy: copyIcon,
  paste: pasteIcon,
  back: leftArrowIcon,
  next: rightArrowIcon,
  home: homeIcon,
  menu: menuIcon,
  more: moreIcon,
  settings: settingsIcon,
  help: helpIcon,
  info: infoIcon,
  warning: warningIcon,
  send: sendIcon,
  login: loginIcon,
  logout: logoutIcon,
  undo: undoIcon,
  redo: redoIcon,
  approve: checkIcon,
  reject: xIcon,
  favorite: heartIcon,
  attach: attachIcon,
  lock: lockIcon,
  unlock: unlockIcon,
  archive: archiveIcon,
  export: downloadIcon,
  import: uploadIcon,
};

export const ZEST_ICON_NAMES = Object.keys(ZEST_ICON_ELEMENTS) as BuiltInIconName[];

export const getZestIconElement = (name: string): React.ReactElement | null => {
  if (Object.prototype.hasOwnProperty.call(ZEST_ICON_ELEMENTS, name)) {
    return ZEST_ICON_ELEMENTS[name as BuiltInIconName];
  }
  return null;
};
