export const omitKey = (key, obj) => {
  const { [key]: omitted, ...rest } = obj;
  return rest;
};

export const combineArrays = arrayOfArrays => {
  return arrayOfArrays.reduce((acc, currentArray) => {
    return acc.concat(currentArray);
  }, []);
};

export const combineArraysByKey = (arrayOfObjects, key) => {
  try {
    const combinedArray = {};

    arrayOfObjects.forEach(obj => {
      if (Array.isArray(obj[key])) {
        combinedArray[key] = combinedArray[key]
          ? [...combinedArray[key], ...obj[key]]
          : [...obj[key]];
      }
    });

    return combinedArray;
  } catch (e) {
    return [];
  }
};

export const transformArray = originalArray => {
  try {
    const transformedArray = [];

    originalArray.forEach(obj => {
      obj.dmAreas.forEach(area => {
        transformedArray.push({
          id: area.id,
          name: area.name,
          amAreaName: obj.name,
          year: obj.year,
          meta: obj.meta,
          areaStatus: obj.areaStatus,
          createdAt: obj.createdAt,
          updatedAt: obj.updatedAt,
        });
      });
    });

    return transformedArray;
  } catch (e) {
    return [];
  }
};

export const filterObjectsByKey = (arr, key) => {
  return arr.map(obj => ({ [key]: obj[key] }));
};

export const spreadValuesByKey = (arr, key) => {
  return arr.map(obj => obj[key]);
};

export const flattenArray = arr => {
  return arr.reduce((acc, curr) => {
    return Array.isArray(curr)
      ? acc.concat(flattenArray(curr))
      : acc.concat(curr);
  }, []);
};

export const removeItemByIndex = (arr, index) => {
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

// Find index by key value
export const findIndexByKey = (arr, key, value) => {
  return arr.findIndex(item => item[key] === value);
};
