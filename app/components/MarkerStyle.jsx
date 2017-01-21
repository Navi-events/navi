const M_SIZE = 28;

const markerStyling = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: M_SIZE,
  height: M_SIZE,
  left: -M_SIZE / 2,
  top: -M_SIZE / 2,

  border: '4px solid #f44336',
  borderRadius: M_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 14,
  fontWeight: 'bold',
  cursor: 'pointer'
};

const markerStylingOnHover = {
  ...markerStyling,
  border: '4px solid #3f51b5',
  color: '#f44336'
};

export { markerStyling, markerStylingOnHover, M_SIZE };
