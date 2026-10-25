import React from 'react';
import { ZestCustomProps } from './ZestButton';
import { SemanticType } from './ZestButton';
import { getZestIconElement } from './zestIcons';

// Define a type for the semantic defaults map
type SemanticTypeDefaultsMap = Partial<Record<string, Partial<ZestCustomProps>>>;

export const semanticTypeButtonConfigDefaults: SemanticTypeDefaultsMap = {
  // Creation / Add
  'add': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('add'),
    },
  },
  'new': { // Alias for add
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('new'),
    },
  },

  // Save / Submit
  'save': {
    visualOptions: {
      variant: 'success',
      iconLeft: getZestIconElement('save'),
    },
    busyOptions: { minBusyDurationMs: 500 }, // Default busy duration for saves
    successOptions: { showCheckmark: true },
  },
  'submit': { // Alias for save
    visualOptions: {
      variant: 'success',
      iconLeft: getZestIconElement('submit'),
    },
    busyOptions: { minBusyDurationMs: 500 },
    successOptions: { showCheckmark: true },
  },

  // Edit / Update
  'edit': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('edit'),
    },
  },
  'update': { // Alias for edit
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('update'),
    },
  },

  // Delete / Remove
  'delete': {
    visualOptions: {
      variant: 'danger',
      iconLeft: getZestIconElement('delete'),
    },
    confirmOptions: {
      displayLabel: 'Confirm Delete',
      timeoutSecs: 5,
    },
    successOptions: { showFailIcon: true, autoResetAfterMs: 400 }, // Shake for fail
  },
  'remove': { // Alias for delete
    visualOptions: {
      variant: 'danger',
      iconLeft: getZestIconElement('remove'),
    },
    confirmOptions: {
      displayLabel: 'Confirm Remove',
      timeoutSecs: 5,
    },
    successOptions: { showFailIcon: true, autoResetAfterMs: 400 },
  },

  // Cancel / Close
  'cancel': {
    buttonStyle: 'outline', // Moved here
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('cancel'),
    },
  },
  'close': { // Alias for cancel
    buttonStyle: 'outline', // Moved here
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('close'),
    },
  },

  // View / Details
  'view': {
    buttonStyle: 'text', // Moved here
    visualOptions: {
      variant: 'standard',
      iconRight: getZestIconElement('view'),
    },
  },
  'details': { // Alias for view
    buttonStyle: 'text', // Moved here
    visualOptions: {
      variant: 'standard',
      iconRight: getZestIconElement('details'),
    },
  },

  // Download
  'download': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('download'),
    },
  },

  // Upload
  'upload': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('upload'),
    },
  },

  // Refresh / Reload
  'refresh': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('refresh'),
    },
    busyOptions: { minBusyDurationMs: 500 },
  },
  'reload': { // Alias for refresh
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('reload'),
    },
    busyOptions: { minBusyDurationMs: 500 },
  },

  // Print
  'print': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('print'),
    },
  },

  // Share
  'share': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('share'),
    },
  },

  // Confirm (generic)
  'confirm': {
    visualOptions: {
      variant: 'success', // Could be standard or success
      iconLeft: getZestIconElement('confirm'),
    },
    confirmOptions: {
      displayLabel: 'Are you sure?',
      timeoutSecs: 5,
    },
  },

  // New types
  'search': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('search'),
    },
  },
  'filter': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('filter'),
    },
  },
  'sort': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('sort'),
    },
  },
  'copy': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('copy'),
    },
  },
  'paste': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('paste'),
    },
  },
  'back': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('back'),
    },
  },
  'next': {
    visualOptions: {
      variant: 'standard',
      iconRight: getZestIconElement('next'),
    },
  },
  'home': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('home'),
    },
  },
  'menu': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('menu'),
    },
  },
  'more': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('more'),
    },
  },
  'settings': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('settings'),
    },
  },
  'help': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('help'),
    },
  },
  'info': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('info'),
    },
  },
  'warning': {
    visualOptions: {
      variant: 'danger',
      iconLeft: getZestIconElement('warning'),
    },
  },
  'send': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('send'),
    },
    busyOptions: { minBusyDurationMs: 500 },
  },
  'login': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('login'),
    },
    busyOptions: { minBusyDurationMs: 500 },
  },
  'logout': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('logout'),
    },
    busyOptions: { minBusyDurationMs: 500 },
  },
  'undo': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('undo'),
    },
  },
  'redo': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('redo'),
    },
  },
  'approve': {
    visualOptions: {
      variant: 'success',
      iconLeft: getZestIconElement('approve'),
    },
    busyOptions: { minBusyDurationMs: 500 },
  },
  'reject': {
    visualOptions: {
      variant: 'danger',
      iconLeft: getZestIconElement('reject'),
    },
    busyOptions: { minBusyDurationMs: 500 },
  },
  'favorite': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('favorite'),
    },
  },
  'attach': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('attach'),
    },
  },
  'lock': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('lock'),
    },
  },
  'unlock': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('unlock'),
    },
  },
  'archive': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('archive'),
    },
    busyOptions: { minBusyDurationMs: 500 },
  },
  'export': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('export'),
    },
    busyOptions: { minBusyDurationMs: 500 },
  },
  'import': {
    visualOptions: {
      variant: 'standard',
      iconLeft: getZestIconElement('import'),
    },
    busyOptions: { minBusyDurationMs: 500 },
  },
};
