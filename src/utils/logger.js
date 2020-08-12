const SeverityLevel = {
  Debug: 'DEBUG',
  Informational: 'INFO',
  Notice: 'NOTICE',
  Warning: 'WARNING',
  Error: 'ERROR',
  Critical: 'CRITICAL',
  Alert: 'ALERT',
  Emergency: 'EMERGENCY'
}

module.exports = logger = {
  log: (message, severityLevel = SeverityLevel.Informational) => {
    console.log(`[${severityLevel}]: ${message}`);
  },
};
