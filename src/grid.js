function createVariables() {
  const variables = {
    screenXS: 480,
    screenMS: 480,
    screenSM: 768,
    screenMD: 992,
    screenLG: 1200,
    gridColumns: 12,
    gridGutterWidth: 30
  }

  variables.screenXSMin = variables.screenXS;
  variables.screenMSMin = variables.screenMS;
  variables.screenSMMin = variables.screenSM;
  variables.screenMDMin = variables.screenMD;
  variables.screenLGMin = variables.screenLG;

  variables.screenXSMax = variables.screenMSMin - 1;
  variables.screenMSMax = variables.screenSMMin - 1;
  variables.screenSMMax = variables.screenMDMin - 1;
  variables.screenMDMax = variables.screenLGMin - 1;

  variables.containerMS = 480 + variables.gridGutterWidth;
  variables.containerSM = 720 + variables.gridGutterWidth;
  variables.containerMD = 940 + variables.gridGutterWidth;
  variables.containerLG = 1140 + variables.gridGutterWidth;

  return variables;
};
export const variables = createVariables();

export const container = {
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingLeft: Math.floor(variables.gridGutterWidth / 2),
  paddingRight: Math.ceil(variables.gridGutterWidth / 2),
  [`@media (min-width: ${variables.screenSMMin}px)`]: {
    width: variables.containerSM
  },
  [`@media (min-width: ${variables.screenMDMin}px)`]: {
    width: variables.containerMD
  },
  [`@media (min-width: ${variables.screenLGMin}px)`]: {
    width: variables.containerLG
  }
};

export const row = {
  marginLeft: Math.ceil(variables.gridGutterWidth / -2),
  marginRight: Math.floor(variables.gridGutterWidth / -2)
};

export const column = {
  position: 'relative',
  minHeight: '1px',
  paddingLeft: Math.ceil(variables.gridGutterWidth / 2),
  paddingRight: Math.floor(variables.gridGutterWidth / 2),
  float: 'left',
  [`@media (min-width: ${variables.screenMSMin}px)`]: {
    float: 'left'
  },
  [`@media (min-width: ${variables.screenSMMin}px)`]: {
    float: 'left'
  },
  [`@media (min-width: ${variables.screenMDMin}px)`]: {
    float: 'left'
  },
  [`@media (min-width: ${variables.screenLGMin}px)`]: {
    float: 'left'
  }
};

function createColumns() {
  const xs = Array(variables.gridColumns + 1).fill(null).map((v, i) => ({
    width: `${(i / variables.gridColumns * 100).toFixed(5)}%`
  }))
  const ms = Array(variables.gridColumns + 1).fill(null).map((v, i) => ({
    [`@media (min-width: ${variables.screenMSMin}px)`]: {
      width: `${(i / variables.gridColumns * 100).toFixed(5)}%`
    }
  }))
  const sm = Array(variables.gridColumns + 1).fill(null).map((v, i) => ({
    [`@media (min-width: ${variables.screenSMMin}px)`]: {
      width: `${(i / variables.gridColumns * 100).toFixed(5)}%`
    }
  }))
  const md = Array(variables.gridColumns + 1).fill(null).map((v, i) => ({
    [`@media (min-width: ${variables.screenMDMin}px)`]: {
      width: `${(i / variables.gridColumns * 100).toFixed(5)}%`
    }
  }))
  const lg = Array(variables.gridColumns + 1).fill(null).map((v, i) => ({
    [`@media (min-width: ${variables.screenLGMin}px)`]: {
      width: `${(i / variables.gridColumns * 100).toFixed(5)}%`
    }
  }))

  return {xs, ms, sm, md, lg};
}
export const columnWidth = createColumns()

export const columnHidden = {
  xs: {
    [`@media (max-width: ${variables.screenXSMax}px)`]: {
      display: 'none'
    }
  },
  ms: {
    [`@media (min-width: ${variables.screenMSMin}px) and (max-width: ${variables.screenMSMax}px)`]: {
      display: 'none'
    }
  },
  sm: {
    [`@media (min-width: ${variables.screenSMMin}px) and (max-width: ${variables.screenSMMax}px)`]: {
      display: 'none'
    }
  },
  md: {
    [`@media (min-width: ${variables.screenMDMin}px) and (max-width: ${variables.screenMDMax}px)`]: {
      display: 'none'
    }
  },
  lg: {
    [`@media (min-width: ${variables.screenLGMin}px)`]: {
      display: 'none'
    }
  }
}

export const clearfix = {
  clear: 'both'
}
