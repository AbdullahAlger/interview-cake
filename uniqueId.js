 = [3234,  223,  50,  41,  37,  6, 6,  51,  50,  41,  334];

function findNumber(ids) {
  var uniqueId = 0;
  for(var id = 0, len = ids.length; id < len; id++ ) {
    uniqueId ^= ids[id];
  }
  return uniqueId;
}

/* This problem returns the ID which is unique in an array of IDs. 
 *  The only issue is that if there are more than one missing, it does not return as expected. Therefore, only one id can be unique to the array.
*/
