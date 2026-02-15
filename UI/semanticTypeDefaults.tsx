import React from 'react';
import { FaSave, FaTrash, FaPlus, FaEdit, FaTimes, FaArrowRight, FaDownload, FaUpload, FaSyncAlt, FaPrint, FaShareAlt } from 'react-icons/fa'; // Using Fa for broader compatibility
import { ZestCustomProps } from './ZestButton';
import { SemanticType } from './ZestButton'; // Import SemanticType

// Define a type for the semantic defaults map
type SemanticTypeDefaultsMap = Partial<Record<string, Partial<ZestCustomProps>>>;

export const semanticTypeDefaults: SemanticTypeDefaultsMap = {
  // Creation / Add
  'add': {
    visualOptions: {
      variant: 'standard',
      iconLeft: <FaPlus />,
    },
  },
  'new': { // Alias for add
    visualOptions: {
      variant: 'standard',
      iconLeft: <FaPlus />,
    },
  },

  // Save / Submit
  'save': {
    visualOptions: {
      variant: 'success',
      iconLeft: <FaSave />,
    },
    busyOptions: { minBusyDurationMs: 500 }, // Default busy duration for saves
    successOptions: { showCheckmark: true },
  },
  'submit': { // Alias for save
    visualOptions: {
      variant: 'success',
      iconLeft: <FaSave />,
    },
    busyOptions: { minBusyDurationMs: 500 },
    successOptions: { showCheckmark: true },
  },

  // Edit / Update
  'edit': {
    visualOptions: {
      variant: 'standard',
      iconLeft: <FaEdit />,
    },
  },
  'update': { // Alias for edit
    visualOptions: {
      variant: 'standard',
      iconLeft: <FaEdit />,
    },
  },

  // Delete / Remove
  'delete': {
    visualOptions: {
      variant: 'danger',
      iconLeft: <FaTrash />,
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
      iconLeft: <FaTrash />,
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
      iconLeft: <FaTimes />,
    },
  },
  'close': { // Alias for cancel
    buttonStyle: 'outline', // Moved here
    visualOptions: {
      variant: 'standard',
      iconLeft: <FaTimes />,
    },
  },

  // View / Details
  'view': {
    buttonStyle: 'text', // Moved here
    visualOptions: {
      variant: 'standard',
      iconRight: <FaArrowRight />,
    },
  },
  'details': { // Alias for view
    buttonStyle: 'text', // Moved here
    visualOptions: {
      variant: 'standard',
      iconRight: <FaArrowRight />,
    },
  },

  // Download
  'download': {
    visualOptions: {
      variant: 'standard',
      iconLeft: <FaDownload />,
    },
  },

  // Upload
  'upload': {
    visualOptions: {
      variant: 'standard',
      iconLeft: <FaUpload />,
    },
  },

  // Refresh / Reload
  'refresh': {
    visualOptions: {
      variant: 'standard',
      iconLeft: <FaSyncAlt />,
    },
    busyOptions: { minBusyDurationMs: 500 },
  },
  'reload': { // Alias for refresh
    visualOptions: {
      variant: 'standard',
      iconLeft: <FaSyncAlt />,
    },
    busyOptions: { minBusyDurationMs: 500 },
  },

  // Print
  'print': {
    visualOptions: {
      variant: 'standard',
      iconLeft: <FaPrint />,
    },
  },

  // Share
  'share': {
    visualOptions: {
      variant: 'standard',
      iconLeft: <FaShareAlt />,
    },
  },

  // Confirm (generic)
  'confirm': {
    visualOptions: {
      variant: 'success', // Could be standard or success
    },
    confirmOptions: {
      displayLabel: 'Are you sure?',
      timeoutSecs: 5,
    },
  },
};
