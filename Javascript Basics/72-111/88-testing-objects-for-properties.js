var Obj = {
  gift: "poney",
  pet: "kitten",
  bed: "sleigh",
  city: "Seattle",
};

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
