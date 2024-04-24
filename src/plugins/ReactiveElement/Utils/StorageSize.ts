interface Units {
  B?: string;
  KB?: string;
}

Storage.prototype.size = function(units: keyof Units | string) {
  'use strict';
  units = units ? units.toUpperCase() : 'MB';
  var size = unescape(encodeURIComponent(JSON.stringify(this))).length;
  switch (units) {
    case 'B': return [size,'B'].join(' ');
    case 'KB': return [+(size / 1024).toFixed(3),'KB'].join(' ');
    default: return [+(size / 1024 / 1024).toFixed(3),'MB'].join(' ');
  }
}
