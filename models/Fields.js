// these fields should match the model and formData
// if it doesn't match then add a mapping array/object set

const volunteerFields = [
  "mode",
  "name",
  "email",
  "mobile",
  "co_mobile",
  "address",
  "region",
  "pin",
  "area",
  "notes",
  "services",
  "act",
  "availability",
  "individual",
  "organization",
];

const appealFields = ["act", "region", "pin", "services", "desc", "tags"];

const requestFields = ["act", "name", "mobile", "co_mobile", "address", "area", "region", "pin", "desc"];

const fields = [...volunteerFields, ...appealFields];

// build unique all fields list
const tempMap = {};
fields.forEach((f) => {
  tempMap[f] = 1;
});
const allFields = Object.keys(tempMap) || [];

const actMap = {
  volunteer: volunteerFields,
  kind: volunteerFields,
  appeal: appealFields,
  request: requestFields,
  all: allFields,
};

exports.getFieldList = (act = "all") => {
  if (act in actMap) {
    return actMap[act];
  }
  return [];
};

// volunteer query formats
exports.queryFormats = {
  region: "in",
  service_communications: "in",
  service_entrepreneurial: "in",
  service_essential: "in",
  service_health: "in",
};

exports.queryFieldFn = {
  default: (value) => value,
  in: (value) => ({ $in: value }),
};